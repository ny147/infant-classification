import tensorflow as tf
import numpy as np
from tensorflow.keras.models import load_model
class AudioModel:
    def __init__(self,model_path):
        self.audio = []
        self.model_path = model_path
        ## load model
        self.model = load_model(model_path)

    def predict(self,auido_predict):
        class_name = ['burping', 'discomfort', 'hungry', 'poop', 'tired']
        pred = self.model.predict(auido_predict)
        index = np.argmax(pred, axis=1)
        reason = class_name[index[0]]
        return  reason




