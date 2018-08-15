import { Component, OnInit } from '@angular/core';
import {NativeDateAdapter} from '@angular/material';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

@Injectable()
export class DatePickerComponent extends NativeDateAdapter {

  getFirstDayOfWeek(): number {
    return 1;
  }

}
