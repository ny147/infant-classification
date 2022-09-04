import os
import librosa, librosa.display
import matplotlib.pyplot as plt
from pathlib import Path
import numpy as np
from pydub import AudioSegment

class AudioTransform:
    def __init__(self):
        self.waveform = []
        self.sample_rate = []

    def set_waveform(self,waveform):
        self.waveform = waveform

    def set_sample_rate(self,sample_rate):
        self.sample_rate = sample_rate

    def get_waveform(self):
        return self.waveform

    def get_sample_rate(self):
        return self.sample_rate

    def fast_furior_transform(self):
        yf = np.abs(librosa.stft(self.waveform))
        img = librosa.display.specshow(librosa.amplitude_to_db(yf), y_axis='log')
        plt.colorbar()

    def Spectrogram(self):
        waveform = librosa.stft(self.waveform)
        waveformdb = librosa.power_to_db(abs(self.waveform))
        plt.figure(figsize=(15, 3))
        librosa.display.specshow(waveformdb, sr=self.sample_rate, x_axis='time', y_axis='log', cmap='magma')
        plt.colorbar()

        return waveformdb

    def mel_spectrogram(self):
        n_fft = 2048
        hop_length = 128
        audio_stft = librosa.feature.melspectrogram(y=self.waveform, n_fft=n_fft, hop_length=hop_length)
        log_spectro = librosa.power_to_db(audio_stft)
        librosa.display.specshow(log_spectro, sr=self.sample_rate, x_axis='time', y_axis='fft', cmap='magma')

        return log_spectro

    def rms(self):
        # Get RMS value from each frame's magnitude value
        S, phase = librosa.magphase(librosa.stft(self.waveform))
        rms = librosa.feature.rms(S=S)
        # Plot the RMS energy
        fig, ax = plt.subplots(figsize=(15, 6), nrows=2, sharex=True)
        times = librosa.times_like(rms)
        ax[0].semilogy(times, rms[0], label='RMS Energy')
        ax[0].set(xticks=[])
        ax[0].legend()
        ax[0].label_outer()
        data = librosa.power_to_db(S, ref=np.max)
        librosa.display.specshow(data, y_axis='log', x_axis='time', ax=ax[1], cmap='magma')
        ax[1].set(title='log Power spectrogram')
        return data

    def zero_crossing(self):
        zcrs = librosa.feature.zero_crossing_rate(self.waveform)
        data = librosa.power_to_db(zcrs)
        print(f"Zero crossing rate: {sum(librosa.zero_crossings(self.waveform))}")
        plt.figure(figsize=(15, 3))
        plt.plot(zcrs[0])
        plt.title('Action Rock')
        return data

    def mel_freq(self):
        mfccs = librosa.feature.mfcc(self.waveform, sr=self.sample_rate, dct_type=2)
        data = librosa.power_to_db(mfccs)
        return data, mfccs