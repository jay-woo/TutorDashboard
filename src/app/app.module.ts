import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component imports
import { AppComponent } from './app.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { AppointmentDashboardComponent } from './components/appointment-dashboard/appointment-dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Routes
const appRoutes:Routes = [
  {path: '', component: AppointmentDashboardComponent},
  {path: 'clients', component: ClientDashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    AppointmentDashboardComponent,
    ClientsComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    AddAppointmentComponent,
    EditClientComponent,
    EditAppointmentComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
