


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-library-notices',
  standalone: true,
  imports: [CommonModule,BackButton],
  templateUrl: './library-notices.html',
  styleUrl: './library-notices.scss'
})
export class LibraryNotices {

  notices = [

    {
      title: 'Library Working Hours During Examination Period',
      date: '20 May 2026',
      category: 'Important',
      description:
        'The library will remain open from 8:00 AM to 10:00 PM during the examination period to facilitate student preparation.'
    },

    {
      title: 'New Online Databases Added',
      date: '15 May 2026',
      category: 'Resources',
      description:
        'Scopus, Web of Science, IEEE Xplore and Springer Engineering Collections are now available through the library portal.'
    },

    {
      title: 'Book Return Reminder',
      date: '10 May 2026',
      category: 'Circulation',
      description:
        'Students are requested to return overdue books before the due date to avoid penalties.'
    },

    {
      title: 'National Digital Library Access',
      date: '05 May 2026',
      category: 'Digital Library',
      description:
        'All students can access NDLI resources using their institutional credentials.'
    },

    {
      title: 'Library Orientation Programme',
      date: '01 May 2026',
      category: 'Event',
      description:
        'Orientation programme for newly admitted students will be conducted in the library seminar hall.'
    }

  ];

}