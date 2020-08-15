import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: object;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }

}
