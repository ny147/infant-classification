import os
import librosa, librosa.display
import matplotlib.pyplot as plt

import numpy as np
from pydub import AudioSegment
from pathlib import Path
from transform import AudioTransform


class AudioFeature:
    def __init__(self,src_path,label):
        self.src_path = src_path
        self.label = label
        self.data = []



    def load_audio(self,file_path):
        waveform, sample_rate = librosa.load(file_path)
        return waveform, sample_rate

    def load_audio_files(self):

        dataset = []
        walker = sorted(str(p) for p in Path(self.src_path).glob(f'*.wav'))
        for i, file_path in enumerate(walker):
            path, filename = os.path.split(file_path)
            speaker, _ = os.path.splitext(filename)

        # Load audio
            waveform, sample_rate = self.load_audio(file_path)
            audio_segment = AudioSegment.from_file(file_path)
            dataset.append([waveform, sample_rate,audio_segment])

        # return dataset
        self.data = dataset

    def create_images(self, typeimg, label_dir, path, num):

        # transform
        audiotransform = AudioTransform()
        # make directory
        test_directory = f'./data/{typeimg}/test_oneclass/{path}/{label_dir}/'
        train_directory = f'./data/{typeimg}/train_oneclass/{path}/{label_dir}/'

        os.makedirs(test_directory, mode=0o777, exist_ok=True)
        os.makedirs(train_directory, mode=0o777, exist_ok=True)
        for i, data in enumerate(self.data):

            sample_rate = data[1]
            waveform = data[0]

            ## set waveform and sample_rate
            audiotransform.set_waveform(waveform)
            audiotransform.set_sample_rate(sample_rate)

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
            librosa.display.specshow(spectrogram, sr=sample_rate, x_axis='time')

            plt.axis('off')
            # Split test and train images by 30%
            if i % 3 == 0:
                plt.savefig(f'./data/{typeimg}/test_oneclass/{path}/{label_dir}/spec_img{i}{num}.jpg',
                            bbox_inches="tight", pad_inches=0)
                # plt.imsave(f'./data/test_oneclass/{path}/{label_dir}/spec_img{i}{num}.jpg', spectrogram, cmap='magma')
            else:
                plt.savefig(f'./data/{typeimg}/train_oneclass/{path}/{label_dir}/spec_img{i}{num}.jpg',
                            bbox_inches="tight", pad_inches=0)
                # plt.imsave(f'./data/train_oneclass/{path}/{label_dir}/spec_img{i}{num}.jpg', spectrogram, cmap='magma')