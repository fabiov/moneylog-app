import { Injectable } from '@angular/core';
import { settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings = settings;

  constructor() { }

  getSettings(): object {
    return this.settings;
  }

  setSettings(data): void {
    this.settings = data;
  }
}
