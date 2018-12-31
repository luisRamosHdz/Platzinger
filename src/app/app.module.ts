import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import {Routes, RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './pipes/search';
import { FormStyle } from '@angular/common';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes =[
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'conversation/:uid',component:ConversationComponent},
  {path:'profile',component:ProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ///RouterModule Añade caracteristicas de navegacion
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
