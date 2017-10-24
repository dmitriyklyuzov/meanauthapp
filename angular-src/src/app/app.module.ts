// Meeting place for all components
// When we create a service or component we have to import it here

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Flash messages module
import { FlashMessagesModule } from 'angular2-flash-messages';

// Importing main app component - add these to 'declarations'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

// Importing services - add these to 'providers'
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

// Importing guards - add to the 'providers', add to the route to protect it
import { AuthGuard } from './guards/auth.guard';

// Routes like routes/web.php
// Every path maps to a Component
const appRoutes: Routes = [
  // Home page
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
]

@NgModule({
  // Adding main app component into declarations
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
