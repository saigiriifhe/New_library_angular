import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
      route: ''
    },

    {
      title: 'e-Books',
      icon: 'bi bi-book-fill',
      color: '#16a34a',
      description: 'Digital books for learning, teaching and research.',
      route: ''
    },

    {
      title: 'e-Magazines',
      icon: 'bi bi-newspaper',
      color: '#dc2626',
      description: 'Online magazines and periodicals.',
      route: ''
    },

    {
      title: 'Higher Education News Clippings',
      icon: 'bi bi-megaphone-fill',
      color: '#7c3aed',
      description: 'Latest educational and academic news updates.',
      route: ''
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