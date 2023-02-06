from flask import request
from app import app
from app.preprocessing.audio import AudioFeature
from app.model.classification import AudioModel
from pydub import AudioSegment
from werkzeug.utils import secure_filename
import os

model_path = 'app/model/infant_model/'
image_dir = 'app/data/image'
app.config["audio_upload"] = "app/data/sound/"

def convert_type(name):
    try:
        filename, file_extension = os.path.splitext(name)
        if file_extension in ['.m4a','.mp4','.mp3']:
            sound = AudioSegment.from_file(os.path.join(app.config["audio_upload"], f'{filename}{file_extension}'), format="mp4")
            file_extension = '.wav'
            sound.export( os.path.join(app.config["audio_upload"],  f'{filename}{file_extension}') ,format = "wav")
    except :
        print("Convert type failed")
        return {"Message" : "Request failed file type must be .m4a mp4 .mp3"}


@app.route('/')
def hello_world(): 
    return 'Hello World!'


@app.route('/infantcry1', methods=['POST', 'GET'])
def infantcry1():
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

        convert_type(filename) ## convert type to .wav

        # preprocessing
        audio = AudioFeature(sound_dir=app.config["audio_upload"], image_dir=image_dir)
        audio.load_audio_files(filename)
        input_audio = audio.load_audio_predict(phase_no = 2)

        ## predict model
        model = AudioModel(model_path)
        model.load_model(["mel_model.h5"])
        
        output = model.predict(input_audio)
        
        target = output
        return {   "audio": f'{filename}',
                "Reason": f'baby crying because {target}'}, 201

@app.route('/infantcry2', methods=['POST', 'GET'])
def infantcry2():
    if request.method == 'GET':
        return {"Message": "hello infantcry testing GET Method"}

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

        convert_type(filename) ## convert type to .wav

        # preprocessing
        audio = AudioFeature(sound_dir=app.config["audio_upload"], image_dir=image_dir)
        audio.load_audio_files(filename)
        input_phase_1  = audio.load_audio_predict(phase_no = 1)

        ## predict model
        model = AudioModel(model_path)
        model.load_model(["SplitClass.h5","BurpAndPoop.h5","HungryTiredAndDiscomfort.h5"])
        output_phase_1 = model.predict_phase_1(audio_predict=input_phase_1)

        ## phase 2 
        input_phase_2  = audio.load_audio_predict(phase_no = 2)
        output_phase_2 = model.predict_phase_2(audio_predict=input_phase_2,type=output_phase_1)

        target = output_phase_2
        return {   "audio": f'{filename}',
                "Reason": f'baby crying because {target}'}, 201




