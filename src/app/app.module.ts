import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


import { AuthGuard } from './guards/auth.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { AuthService } from './services/auth.service';
import { DataUserService } from './services/data-user.service';
import { NoteDataService } from './services/note-data.service';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { VideoCallComponent } from './video/pages/video-call/video-call.component';
import { VideoPlayerComponent } from './video/components/video-player/video-player.component';
import { VideoCallMenuComponent } from './video/components/video-call-menu/video-call-menu.component';
import { VideoCallChatComponent } from './video/components/video-call-chat/video-call-chat.component';



const config: SocketIoConfig = { url: 'http://localhost:3100', options: {withCredentials: false} };



@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    VideoCallComponent,
    VideoPlayerComponent,
    VideoCallMenuComponent,
    VideoCallChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [AuthService, DataUserService, NoteDataService, AuthGuard, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }