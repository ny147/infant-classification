import os
import librosa, librosa.display
import matplotlib.pyplot as plt
import tensorflow as tf
import numpy as np
from pydub import AudioSegment
from pathlib import Path
from app.preprocessing.transform  import AudioTransform


class AudioFeature:
    def __init__(self,sound_dir,image_dir):
        ## directory
        self.sound_dir = sound_dir
        self.image_dir = image_dir

        ## image
        self.image_file = []

        ## audio properties
        self.audio_filename  = []
        self.waveform = []
        self.sample_rate = []
        self.audio_segment = []


    def load_audio_files(self,audio_filename):

        # walker = sorted(str(p) for p in Path(self.src_path).glob(f'*.wav'))
        # for i, file_path in enumerate(walker):
        #     path, filename = os.path.split(file_path)
        #     speaker, _ = os.path.splitext(filename)

        # Load audio
        self.audio_filename = audio_filename
        file_path = f'{self.sound_dir}/{self.audio_filename}'
        self.waveform, self.sample_rate = librosa.load(file_path)
        self.audio_segment = AudioSegment.from_file(file_path)


    def create_image_audio(self,audio_filename,typeimg):

        ## load audio
        self.load_audio_files(audio_filename)

        # create image_dir
        Path(f'./{self.image_dir}').mkdir(parents=True, exist_ok=True)

        ## Create Transform obj
        audiotransform = AudioTransform()
        audiotransform.set_waveform(self.waveform)
        audiotransform.set_sample_rate(self.sample_rate)

        if typeimg == 'Spectrogram':
            spectrogram = audiotransform.Spectrogram()
        elif typeimg == 'mel_spectrogram':
            spectrogram = audiotransform.mel_spectrogram()
        elif typeimg == 'rms':
            spectrogram = audiotransform.rms()
        elif typeimg == 'zero_crossing':
            spectrogram = audiotransform.zero_crossing()
        elif typeimg == 'mel_freq':
            data, spectrogram = audiotransform.mel_freq()
        librosa.display.specshow(spectrogram, sr=self.sample_rate, x_axis='time')
        plt.axis('off')


        # save img
        self.image_file =  f'./{self.image_dir}/2.jpg'
        plt.savefig(self.image_file,bbox_inches="tight", pad_inches=0)
        plt.clf()

    def load_audio_predict(self):

        image_ds = tf.keras.preprocessing.image_dataset_from_directory(self.image_dir, labels= None , label_mode=None, image_size=(256, 256),
        validation_split=None, subset=None)


        sound_predict = np.array(list(image_ds.unbatch().as_numpy_iterator()))
        return sound_predict
