import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-digital-library',
  standalone: true,
  imports: [CommonModule,BackButton],
  templateUrl: './digital-library.html',
  styleUrl: './digital-library.scss'
})
export class DigitalLibrary {

  resources = [

    {
      title: 'Knimbus Digital Library',
      description:
      'Access eBooks, eJournals, research papers and institutional resources.',

      icon: 'bi bi-book-half',

      color: '#2563eb',

      link:
      'https://ifheiindia.knimbus.com/portal/v2/default/home'
    },

    {
      title: 'DSpace Institutional Repository',
      description:
      'Browse institutional publications, thesis, dissertations and research archives.',

      icon: 'bi bi-hdd-network-fill',

      color: '#16a34a',

      link:
      'http://172.22.40.6:4000'
    },

    {
      title: 'National Digital Library of India',
      description:
      'Access millions of learning resources from schools, colleges and universities.',

      icon: 'bi bi-globe-central-south-asia',

      color: '#7c3aed',

      link:
      'https://www.ndl.gov.in/'
    }

  ];

}