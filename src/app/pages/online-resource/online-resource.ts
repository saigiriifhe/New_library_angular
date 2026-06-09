import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { count } from 'console';

@Component({
  selector: 'app-online-resource',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './online-resource.html',
  styleUrl: './online-resource.scss'
})
export class OnlineResource {

  resources = [

    {
      title: 'e-Journals',
      icon: 'bi bi-journal-richtext',
      color: '#2563eb',
      description: 'Access scholarly journals and research publications.',
      count: '123'
    },

    {
      title: 'e-Books',
      icon: 'bi bi-book-fill',
      color: '#16a34a',
      description: 'Digital books for learning, teaching and research.',
      count: '123'
    },

    {
      title: 'e-Magazines',
      icon: 'bi bi-newspaper',
      color: '#dc2626',
      description: 'Online magazines and periodicals.',
      count: '123'
    },


    {
      title: 'Online Databases',
      icon: 'bi bi-database-fill',
      color: '#f59e0b',
      description: 'Access premium research databases and resources.',
      route: '/online-databases'
    }

  ];

}