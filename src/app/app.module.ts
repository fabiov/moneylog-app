import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { MovementDetailsComponent } from './movement-details/movement-details.component';
import { MovementListComponent } from './movement-list/movement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementDetailsComponent,
    MovementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MovementListComponent },
      { path: 'products/:productId', component: MovementDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
