import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }

}
