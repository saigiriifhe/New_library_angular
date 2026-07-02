import { Component } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-subscribed-periodicals',
  imports: [BackButton],
  templateUrl: './subscribed-periodicals.html',
  styleUrl: './subscribed-periodicals.scss',
})
export class SubscribedPeriodicals {
  periodicals = [

  {
    title: 'Faculty of Management',
    icon: 'bi bi-briefcase-fill',
    file: 'assets/periodicals/N J yasaswy Memorial Library.pdf'
  },
  {
    title: 'Faculty of Social Sciences',
    icon: 'bi bi-mortarboard-fill',
    file: 'assets/periodicals/ISE Library.pdf'
  },

  {
    title: 'Faculty of Science & Technology',
    icon: 'bi bi-cpu-fill',
    file: 'assets/periodicals/FST Library.pdf'
  },

  {
    title: 'Faculty of Law',
    icon: 'bi bi-bank2',
    file: 'assets/periodicals/FOL Periodicals list 2026.pdf'
  },

  {
    title: 'ICFAI School of Architecture',
    icon: 'bi bi-building',
    file: 'assets/periodicals/ISArch Library.pdf'
  },

  {
    title: 'IUP Journals',
    icon: 'bi bi-journal-richtext',
    file: 'assets/periodicals/IUP Periodicals.pdf'
  }
  

];
}
