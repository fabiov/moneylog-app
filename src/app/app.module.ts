import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MovementDetailsComponent } from './movement-details/movement-details.component';
import { MovementFormComponent } from './components/movement-form/movement-form.component';
import { MovementListComponent } from './components/movement-list/movement-list.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementDetailsComponent,
    MovementFormComponent,
    MovementListComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MovementListComponent },
      { path: 'movements/:movementId', component: MovementDetailsComponent },
      { path: 'settings', component: SettingsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
