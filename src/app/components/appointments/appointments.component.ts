import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/Appointment';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments:Appointment[];

  constructor(
    public appointmentService:AppointmentService
  ) { }

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      console.log(this.appointments);
    });
  }

}
