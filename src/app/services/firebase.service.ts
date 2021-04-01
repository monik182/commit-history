import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import 'firebase/remote-config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  remoteConfig;
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  async fetch(key: string) {
    await this.fetchAndActivate();
    return this.remoteConfig.getString(key);
  }

  private async fetchAndActivate() {
    if (!this.remoteConfig) {
      this.remoteConfig = firebase.remoteConfig();
      this.remoteConfig.settings.minimumFetchIntervalMillis = 60000;
    }
    await this.remoteConfig.fetchAndActivate();
  }
}
