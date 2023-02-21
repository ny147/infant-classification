from flask import request,render_template
from app import app
from app.preprocessing.audio import AudioFeature
from app.model.classification import AudioModel
from pydub import AudioSegment
from pydub.silence import split_on_silence
from werkzeug.utils import secure_filename
from pathlib import Path
import os
import soundfile as sf
import librosa

model_path = 'app/model/infant_model/'
image_dir = 'app/data/image'
app.config["audio_upload"] = "app/data/sound/"
app.config['JSON_SORT_KEYS'] = False


def convert_type(name):
    try:
        filename, file_extension = os.path.splitext(name)
        if file_extension in ['.m4a','.mp4','.mp3']:
            # sound = AudioSegment.from_file(os.path.join(app.config["audio_upload"], f'{filename}{file_extension}'), format="mp4")
            sound = AudioSegment.from_file(os.path.join(app.config["audio_upload"], f'{filename}{file_extension}'))
            file_extension = '.wav'

            sound = AudioSegment.from_mono_audiosegments(sound, sound)
            sound.export( os.path.join(app.config["audio_upload"],  f'{filename}{file_extension}') ,format = "wav",bitrate="512k",)
    except :
        print("Convert type failed")
        return {"Message" : "Request failed file type must be .m4a mp4 .mp3"}
    return f'{filename}{file_extension}'


def remove_allfile(path):
    [f.unlink() for f in Path(path).glob("*") if f.is_file()] 

def remove_silence_librosa(filename):
    
    waveform, sr = librosa.load(os.path.join(app.config["audio_upload"],  filename) )
    db = 25 # adjust db

    # Trim silence from beginning and end of audio signal
    trimmed_audio = librosa.effects.trim(waveform, top_db=db )

    filename_output = f'trim_{db}db_{filename}'
    sf.write(os.path.join(app.config["audio_upload"],  filename_output) , trimmed_audio[0], sr)


    return filename_output

def remove_silence_pydub(filename):

    sound=AudioSegment.from_file(os.path.join(app.config["audio_upload"],  filename),format="wav")
    audio_chunks=split_on_silence(sound,min_silence_len=200,silence_thresh=-45,keep_silence=50,seek_step=2)

    combined = AudioSegment.empty()
    for chunk in audio_chunks:
        combined += chunk

    filename_output = f'trim_{filename}'
    combined.export(os.path.join(app.config["audio_upload"],  filename_output), format = "wav")

    return filename_output
    



@app.route('/')
def index(): 
    return 'Hello This is infantcry API!'

@app.route('/showimage')
def showimage():
    image_file =  'static/current_image.jpg'
    
    if Path("app/" + image_file).is_file():
        return render_template("index.html", image_file=image_file)
    else :
        return render_template("error.html")


@app.route('/infantcry/<int:silenttype>/<int:modeltype>', methods=['POST', 'GET'])
def infantcry(silenttype,modeltype):
    if request.method == 'GET':
        return {"Message": "hello infantcry testing GET Method 1"}

    elif request.method == 'POST':


        if 'file' not in request.files: 
            print("no file part")
            return {"Message" : "key name must be file"}

        files =  request.files['file']
        
        if files :
            filename = secure_filename(files.filename)
            files.save(os.path.join(app.config["audio_upload"], filename))
        else:
            print("file not found")
            return { "Message" : "file not found pls check your file and upload again"}

        filename = convert_type(filename) ## convert type to .wav



        # preprocessing
        if silenttype == 0:
            file_remove_silence = filename
        elif silenttype == 1:
            file_remove_silence = remove_silence_pydub(filename)
        elif silenttype == 2:
            file_remove_silence = remove_silence_librosa(filename)
        else :
            file_remove_silence = filename

        audio = AudioFeature(sound_dir=app.config["audio_upload"], image_dir=image_dir)
        audio.load_audio_files(file_remove_silence)
        input_audio = audio.load_audio_predict(phase_no = 2)    

        ## remove file  
        # remove_allfile(app.config["audio_upload"])

        ## predict model
        model = AudioModel(model_path)

        # 2 mdodel
        if modeltype ==  1:
            model_name = "mel_model"
        elif modeltype == 2 :
            model_name = "mel_model_trim"
        else :
            model_name = "mel_model"
            
        model.load_model(f'{model_name}.h5')
        target,percent = model.predict(input_audio,model_name)
        
        sort_percent = sorted(percent.items(), key=lambda x: x[1], reverse=True)
        dict_sort_percent = dict(sort_percent)
        
        return {   "Audio": f'{filename}',
                    "Reason": f'{target}',
                    "Emotion" : dict_sort_percent}, 201


# @app.route('/infantcry2', methods=['POST', 'GET'])
# def infantcry2():
#     if request.method == 'GET':
#         return {"Message": "hello infantcry testing GET Method"}

#     elif request.method == 'POST':


#         if 'file' not in request.files: 
#             print("no file part")
#             return {"Message" : "key name must be file"}

#         files =  request.files['file']
        
#         if files :
#             filename = secure_filename(files.filename)
#             files.save(os.path.join(app.config["audio_upload"], filename))
#         else:
#             print("file not found")
#             return { "Message" : "file not found pls check your file and upload again"}

#         convert_type(filename) ## convert type to .wav

#         # preprocessing
#         audio = AudioFeature(sound_dir=app.config["audio_upload"], image_dir=image_dir)
#         audio.load_audio_files(filename)
#         input_phase_1  = audio.load_audio_predict(phase_no = 1)

#         ## predict model
#         model = AudioModel(model_path)
#         model.load_model(["SplitClass.h5","BurpAndPoop.h5","HungryTiredAndDiscomfort.h5"])
#         output_phase_1 = model.predict_phase_1(audio_predict=input_phase_1)

#         ## phase 2 
#         input_phase_2  = audio.load_audio_predict(phase_no = 2)
#         output_phase_2 = model.predict_phase_2(audio_predict=input_phase_2,type=output_phase_1)

#         target = output_phase_2
#         return {   "audio": f'{filename}',
#                 "Reason": f'baby crying because {target}'}, 201




