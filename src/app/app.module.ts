import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { ShowTopicComponent } from './components/show-topic/show-topic.component';

//Firebase & Angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//firebaseconfig
import { environment } from '../environments/environment';

//Routes
import { appRoutes } from './routes';

//Material2
import { MaterialdesignModule } from './materialdesign';
import { FlexLayoutModule } from '@angular/flex-layout';

//Services
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { MatSortModule } from '@angular/material';
import { CommentsComponent } from './components/comments/comments.component';
import { DeadlinesComponent } from './components/deadlines/deadlines.component';
import { ArchieveComponent } from './components/archieve/archieve.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    NavBarComponent,
    PostsComponent,
    NewTopicComponent,
    ShowTopicComponent,
    CommentsComponent,
    DeadlinesComponent,
    ArchieveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialdesignModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    NewTopicComponent,
    ShowTopicComponent,
    ArchieveComponent
  ],
  providers: [
    AuthService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
