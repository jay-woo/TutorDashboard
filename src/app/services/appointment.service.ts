import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable()
export class AppointmentService {
  appointments:FirebaseListObservable<any[]>;
  appointment:FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) {
    this.appointments = this.af.list('/appointments') as FirebaseListObservable<Appointment[]>;
  }

  getAppointments() {
    return this.appointments;
  }
}