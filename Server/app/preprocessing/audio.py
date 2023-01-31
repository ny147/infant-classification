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

        # Load audio
        self.audio_filename = audio_filename
        file_path = f'{self.sound_dir}/{self.audio_filename}'
        self.waveform, self.sample_rate = librosa.load(file_path)
        self.audio_segment = AudioSegment.from_file(file_path)


    def create_image_audio(self,typeimg,phase_no):

       

        # create image_dir
        # create folder if path does not exit
        Path(f'./{self.image_dir}/type_{phase_no}').mkdir(parents=True, exist_ok=True)
        

        
        # Create Transform obj
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
        elif typeimg == 'waveform':
            timescale = np.arange(waveform .shape[0])
            fast_fourier_transf = np.fft.fft(waveform)
            plt.plot(timescale, fast_fourier_transf,color = 'k')
        if typeimg != 'waveform':
            librosa.display.specshow(spectrogram, sr=self.sample_rate, x_axis='time')
        plt.axis('off')


        # save img
        self.image_file =  f'./{self.image_dir}/type_{phase_no}/Temp.jpg'
        plt.savefig(self.image_file,bbox_inches="tight", pad_inches=0)
        plt.clf()

    def load_audio_predict(self,phase_no):

        ## load audio
        # self.load_audio_files(audio_filename)
        
        try:
            if   (phase_no == 1):
                self.create_image_audio(typeimg='mel_freq',phase_no=1)
            elif (phase_no == 2):
                self.create_image_audio(typeimg='mel_spectrogram',phase_no=2)
            else :
                raise NameError('phase_no')
        except NameError:
            print("phase_no must be 1 or 2")
            raise

        # image_ds = tf.keras.preprocessing.image_dataset_from_directory(f'./{self.image_dir}/{phase_no}', labels= None , label_mode=None, image_size=(256, 256),
        # validation_split=None, subset=None)
        
        # image_ds = tf.keras.preprocessing.image_dataset_from_directory( f'./{self.image_dir}/{phase_no}', labels='inferred', label_mode='int', image_size=(432, 288), seed=321,validation_split=None, subset=None)
        image_ds = tf.keras.preprocessing.image_dataset_from_directory( f'./{self.image_dir}/type_{phase_no}', labels= None, label_mode= None, image_size=(432, 288), seed=321,validation_split=None, subset=None)
        


        sound_predict = np.array(list(image_ds.unbatch().as_numpy_iterator()))
        return sound_predict
