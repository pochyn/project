import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardOrGazetaComponent } from './components/or_gazeta/dashboard-or-gazeta/dashboard-or-gazeta.component';
import { DashboardOrSiteComponent } from './components/or_site/dashboard-or-site/dashboard-or-site.component';
import { KvDashboardComponent } from './components/kv/kv-dashboard/kv-dashboard.component';
import { SoloDashboardComponent } from './components/solo/solo-dashboard/solo-dashboard.component';
import { GrDashboardComponent } from './components/gr/gr-dashboard/gr-dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthguardService } from './services/authguard.service';

export const appRoutes: Routes = [
    {path: 'login', component: LoginPageComponent },
    {path: 'signup', component: SignupPageComponent },
    {path: 'reset', component: ResetPasswordComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'dashboard_or_gazeta', component: DashboardOrGazetaComponent},
    {path: 'dashboard_or_site', component: DashboardOrSiteComponent},
    {path: 'dashboard_kv', component: KvDashboardComponent, canActivate: [AuthguardService]},
    {path: 'solo_dashboard', component: SoloDashboardComponent},
    {path: 'dashboard_gr', component: GrDashboardComponent},
    {path: 'dashboard_g', component: GrDashboardComponent, canActivate: [AuthguardService]},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
]
