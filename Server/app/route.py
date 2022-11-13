from flask import request
from app import app
from app.preprocessing.audio import AudioFeature
from app.model.classification import AudioModel
import os

model_path = 'app/model/infant_model/infant_classification_model.h5'
image_dir = 'app/data/image'

#
# @app.route('/')
# def hello_world():  # put application's code here
#     return 'Hello World!'
#
#
# @app.route('/1')
# def hello():
#     q = request.args.get('q')
#     print(q)
#     return {"message": "Hello!"}, 201


app.config["audio_upload"] = "app/data/sound/"


@app.route('/infantcry', methods=['POST', 'GET'])
def book():
    if request.method == 'GET':
        return {"Message": "hello book"}

    elif request.method == 'POST':
        audio = request.files
        audio_dict = audio.to_dict()
        audio_filestorage = list(audio_dict.values())[0]

        ## save
        audio_filestorage.save(os.path.join(app.config["audio_upload"], audio_filestorage.filename))


        ## preprocessing
        audio_data = AudioFeature(sound_dir=app.config["audio_upload"], image_dir=image_dir)
        audio_data.create_image_audio(audio_filestorage.filename, 'mel_spectrogram')
        input = audio_data.load_audio_predict()

        ## predict model
        model = AudioModel(model_path)

        target = model.predict(input)

        return {   "audio": f'{audio_filestorage.filename}',
                   "Reason": f'baby crying because {target}'}, 201
