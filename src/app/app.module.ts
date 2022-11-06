import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActsComponent } from './acts/acts.component';
import { FormActsComponent } from './acts/form-acts.component';
import { RoomComponent } from './room/room.component';
import { FormRoomComponent } from './room/form-room.component';
import { MeetsComponent } from './meets/meets.component';
import { FormMeetsComponent } from './meets/form-meets.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  { path:'', redirectTo:'/acts', pathMatch:'full'},
  { path:'', redirectTo:'/acts', pathMatch:'full'},
  { path:'acts', component:ActsComponent},
  { path:'acts/form', component:FormActsComponent},
  { path:'acts/form/:num_acts', component:FormActsComponent},
  { path:'', redirectTo:'/room', pathMatch:'full'},
  { path:'room', component:RoomComponent},
  { path:'room/form', component:FormRoomComponent},
  { path:'room/form/:id_room', component:FormRoomComponent},
  { path:'meets', component:MeetsComponent},
  { path:'meets/form', component:FormMeetsComponent},
  { path:'meets/form/:id_meets', component:FormMeetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActsComponent,
    FormActsComponent,
    RoomComponent,
    FormRoomComponent,
    FormMeetsComponent,
    MeetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
