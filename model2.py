from sklearn.model_selection import LeaveOneGroupOut, StratifiedKFold, GridSearchCV
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, classification_report, f1_score
from sklearn.preprocessing import LabelEncoder, StandardScaler
import numpy as np
import random
from sklearn.model_selection import train_test_split


class Model:
    def __init__(self, feature_matrix, labels, cfg):

        self.X = feature_matrix
        self.encoder = LabelEncoder()
        self.y = self.encoder.fit_transform(labels)
        self.cfg = cfg

        self.val_fold_scores_ = []

    def train_kfold(self):

        X_train, X_test, y_train, y_test = train_test_split(self.X, self.y, test_size = 0.3,random_state=15000,shuffle = True)
        ss = StandardScaler(copy=True)
        X_train = ss.fit_transform(X_train)
        X_test = ss.transform(X_test)

        clf = self.cfg["model"]
        clf.fit(X_train, y_train)

        y_pred = clf.predict(X_test)

        fold_acc = accuracy_score(y_test, y_pred)
        self.val_fold_scores_.append(fold_acc)

        return self.val_fold_scores_
