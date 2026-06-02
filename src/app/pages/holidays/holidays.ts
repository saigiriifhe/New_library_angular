import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holidays.html',
  styleUrl: './holidays.scss'
})
export class Holidays {

  holidays = [

    {
      date: '01-01-2026',
      day: 'Thursday',
      holiday: 'New Year Day'
    },

    {
      date: '14-01-2026',
      day: 'Wednesday',
      holiday: 'Bhogi'
    },

    {
      date: '15-01-2026',
      day: 'Thursday',
      holiday: 'Sankranti'
    },

    {
      date: '26-01-2026',
      day: 'Monday',
      holiday: 'Republic Day'
    },

    {
      date: '19-03-2026',
      day: 'Thursday',
      holiday: 'Ugadi'
    },

    {
      date: '27-03-2026',
      day: 'Friday',
      holiday: 'Sri Rama Navami'
    },

    {
      date: '21-08-2026',
      day: 'Friday',
      holiday: 'Varalakshmi Vratham'
    },

    {
      date: '14-09-2026',
      day: 'Monday',
      holiday: 'Vinayaka Chavithi'
    },

    {
      date: '02-10-2026',
      day: 'Friday',
      holiday: 'Mahatma Gandhi Jayanthi'
    },

    {
      date: '20-10-2026',
      day: 'Tuesday',
      holiday: 'Vijaya Dasami'
    },

    {
      date: '25-12-2026',
      day: 'Friday',
      holiday: 'Christmas'
    }

  ];

  workingDays = [

    {
      date: '03-01-2026',
      remarks: 'Working day in lieu of 16-01-2026'
    },

    {
      date: '07-03-2026',
      remarks: 'Working day in lieu of 20-03-2026'
    }

  ];

}