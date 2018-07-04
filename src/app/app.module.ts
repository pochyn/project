import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
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
import { DashboardOrGazetaComponent } from './components/or_gazeta/dashboard-or-gazeta/dashboard-or-gazeta.component';
import { ArchieveOrGazetaComponent } from './components/or_gazeta/archieve-or-gazeta/archieve-or-gazeta.component';
import { NavBarOrGazetaComponent } from './components/or_gazeta/nav-bar-or-gazeta/nav-bar-or-gazeta.component';
import { PostOrGazetaComponent } from './components/or_gazeta/post-or-gazeta/post-or-gazeta.component';
import { ShowTopicOrGazetaComponent } from './components/or_gazeta/show-topic-or-gazeta/show-topic-or-gazeta.component';
import { ArchieveOrSiteComponent } from './components/or_site/archieve-or-site/archieve-or-site.component';
import { DashboardOrSiteComponent } from './components/or_site/dashboard-or-site/dashboard-or-site.component';
import { NavBarOrSiteComponent } from './components/or_site/nav-bar-or-site/nav-bar-or-site.component';
import { PostOrSiteComponent } from './components/or_site/post-or-site/post-or-site.component';
import { ShowTopicOrSiteComponent } from './components/or_site/show-topic-or-site/show-topic-or-site.component';
import { KvArchieveComponent } from './components/kv/kv-archieve/kv-archieve.component';
import { KvCommentsComponent } from './components/kv/kv-comments/kv-comments.component';
import { KvDashboardComponent } from './components/kv/kv-dashboard/kv-dashboard.component';
import { KvDeadlinesComponent } from './components/kv/kv-deadlines/kv-deadlines.component';
import { KvNavBarComponent } from './components/kv/kv-nav-bar/kv-nav-bar.component';
import { KvNewTopicComponent } from './components/kv/kv-new-topic/kv-new-topic.component';
import { KvPostsComponent } from './components/kv/kv-posts/kv-posts.component';
import { KvShowTopicComponent } from './components/kv/kv-show-topic/kv-show-topic.component';
import { GrArchieveComponent } from './components/gr/gr-archieve/gr-archieve.component';
import { GrDashboardComponent } from './components/gr/gr-dashboard/gr-dashboard.component';
import { GrNewTopicComponent } from './components/gr/gr-new-topic/gr-new-topic.component';
import { GrShowTopicComponent } from './components/gr/gr-show-topic/gr-show-topic.component';
import { GrPostsComponent } from './components/gr/gr-posts/gr-posts.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarDashboardComponent } from './components/top-bar-dashboard/top-bar-dashboard.component';
import { GrTopbarComponent } from './components/gr/gr-topbar/gr-topbar.component';
import { KvTopBarComponent } from './components/kv/kv-top-bar/kv-top-bar.component';
import { OrTopBarComponent } from './components/or_gazeta/or-top-bar/or-top-bar.component';
import { SiteTopBarComponent } from './components/or_site/site-top-bar/site-top-bar.component';
import { GrBarComponent } from './components/gr/gr-bar/gr-bar.component';
import { GrSiteComponent } from './components/gr/gr-site/gr-site.component';
import { GrLvivComponent } from './components/gr/gr-lviv/gr-lviv.component';
import { GrRegionsComponent } from './components/gr/gr-regions/gr-regions.component';
import { OrNewTopicComponent } from './components/or_site/or-new-topic/or-new-topic.component';
import { GazetaBarComponent } from './components/or_gazeta/gazeta-bar/gazeta-bar.component';
import { SitePostsComponent } from './components/or_gazeta/site-posts/site-posts.component';
import { OrGazetaNewTopicComponent } from './components/or_gazeta/or-gazeta-new-topic/or-gazeta-new-topic.component';



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
    ArchieveComponent,
    DashboardOrGazetaComponent,
    ArchieveOrGazetaComponent,
    NavBarOrGazetaComponent,
    PostOrGazetaComponent,
    ShowTopicOrGazetaComponent,
    ArchieveOrSiteComponent,
    DashboardOrSiteComponent,
    NavBarOrSiteComponent,
    PostOrSiteComponent,
    ShowTopicOrSiteComponent,
    KvArchieveComponent,
    KvCommentsComponent,
    KvDashboardComponent,
    KvDeadlinesComponent,
    KvNavBarComponent,
    KvNewTopicComponent,
    KvPostsComponent,
    KvShowTopicComponent,
    GrArchieveComponent,
    GrDashboardComponent,
    GrNewTopicComponent,
    GrShowTopicComponent,
    GrPostsComponent,
    ResetPasswordComponent,
    TopBarComponent,
    TopBarDashboardComponent,
    GrTopbarComponent,
    KvTopBarComponent,
    OrTopBarComponent,
    SiteTopBarComponent,
    GrBarComponent,
    GrSiteComponent,
    GrLvivComponent,
    GrRegionsComponent,
    OrNewTopicComponent,
    GazetaBarComponent,
    SitePostsComponent,
    OrGazetaNewTopicComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialdesignModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  entryComponents: [
    NewTopicComponent,
    ShowTopicComponent,
    ArchieveComponent,
    ArchieveOrGazetaComponent,
    ShowTopicOrGazetaComponent,
    ShowTopicOrSiteComponent,
    ArchieveOrSiteComponent,
    KvNewTopicComponent,
    KvShowTopicComponent,
    KvArchieveComponent,
    GrNewTopicComponent,
    GrShowTopicComponent,
    GrArchieveComponent,
    OrNewTopicComponent,
    OrGazetaNewTopicComponent
  ],
  providers: [
    AuthService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
