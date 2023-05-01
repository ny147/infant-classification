import tensorflow as tf
import numpy as np
from tensorflow.keras.models import load_model
class AudioModel:
    def __init__(self,model_path):
        self.audio = []
        self.model_path = model_path
        ## load model
        self.model = {}
        # self.model_phase_1 = load_model(model_path)
    def load_model(self,model_name):
        
        # for name in model_name:
        #     # self.model.append(load_model(f'{self.model_path}/{name}'))
        #     model_key = f'{name.split(".")[0]}'
        #     if  model_key not in self.model:
        #         model_temp = load_model(f'{self.model_path}/{name}')
        #         self.model[model_key] = model_temp

        model_key = f'{model_name.split(".")[0]}'
        self.model[model_key] = load_model(f'{self.model_path}/{model_name}')
        

    def predict(self,auido_predict,model_name):
        class_name = ['burping', 'discomfort', 'hungry', 'poop', 'tired']
        # pred = self.model['mel_model'].predict(auido_predict)
        pred = self.model[model_name].predict(auido_predict)
        percent = (pred*100).tolist()[0]

        prob = dict(zip(class_name,percent))
        index = np.argmax(pred, axis=1)
        reason = class_name[index[0]]
        return  reason,prob

    # def predict_phase_1(self,audio_predict):
    #     class_name = ["type1","type2"]
    #     pred = self.model['SplitClass'].predict(audio_predict)
    #     index = np.argmax(pred, axis=1)
    #     reason = class_name[index[0]]
    #     return  reason

    # def predict_phase_2(self,audio_predict,type):
    #     model_num = 4
    #     if type == "type1":
    #         class_name = ["burp","poop"]
    #         model_key = 'BurpAndPoop'
    #     elif type == "type2":
    #         class_name = ["discomfort","hungry","tried"]
    #         model_num  = 'HungryTiredAndDiscomfort'
    #     else :
    #         class_name = ["error","error"]

    #     pred = self.model[model_num].predict(audio_predict)
    #     index = np.argmax(pred, axis=1)
    #     reason = class_name[index[0]]
    #     return  reason

        




