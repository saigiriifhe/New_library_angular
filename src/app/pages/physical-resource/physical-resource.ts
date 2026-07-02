import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-physical-resource',
  standalone: true,
  imports: [CommonModule,BackButton],
  templateUrl: './physical-resource.html',
  styleUrl: './physical-resource.scss'
})
export class PhysicalResource {




  resources = [

    {
      title: 'Total Books',
      count: '105,761',
      icon: 'bi bi-book-fill',
      color: '#2563eb'
    },

    {
      title: 'Journals',
      count: '165',
      icon: 'bi bi-journal-richtext',
      color: '#16a34a'
    },

    {
      title: 'Magazines',
      count: '114',
      icon: 'bi bi-newspaper',
      color: '#dc2626'
    },

    {
      title: 'Newspapers',
      count: '10',
      icon: 'bi bi-file-earmark-text-fill',
      color: '#f59e0b'
    },

    {
      title: 'Bound Volumes',
      count: '2529',
      icon: 'bi bi-collection-fill',
      color: '#9333ea'
    },

    {
      title: 'CMIE Reports',
      count: '487',
      icon: 'bi bi-bar-chart-fill',
      color: '#0891b2'
    },

    {
      title: 'IUP Study Materials',
      count: '1640',
      icon: 'bi bi-mortarboard-fill',
      color: '#0f766e'
    },

    {
      title: 'Special Collections',
      count: '167',
      icon: 'bi bi-star-fill',
      color: '#be123c'
    },

    {
      title: 'Ph.D',
      count: '288',
      icon: 'bi bi-file-earmark-medical-fill',
      color: '#7c3aed'
    }

  ];

}