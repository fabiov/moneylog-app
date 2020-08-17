import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from '../../settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings = settings;

  constructor(private http: HttpClient) { }

  getSettings(): object {
    return this.settings;
  }

  setSettings(data): void {
    this.settings = data;
  }
}
