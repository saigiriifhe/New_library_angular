import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-announcement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-announcement.html',
  styleUrl: './special-announcement.scss'
})
export class SpecialAnnouncement {

  announcements = [

    {
      title: 'New Digital Library Services Launched',
      date: '15 May 2026',
      icon: 'bi bi-laptop',
      color: '#2563eb',
      description:
      'Students and faculty can now access Knimbus, DSpace Repository and National Digital Library resources through the library portal.'
    },

    {
      title: 'IEEE & Springer Access Available',
      date: '10 May 2026',
      icon: 'bi bi-journal-richtext',
      color: '#16a34a',
      description:
      'Access to IEEE Xplore and Springer Engineering Journals has been enabled for academic and research purposes.'
    },

    {
      title: 'Research Support Services',
      date: '05 May 2026',
      icon: 'bi bi-mortarboard-fill',
      color: '#9333ea',
      description:
      'The library has introduced research support services for faculty members and research scholars.'
    },

    {
      title: 'Library Orientation Programme',
      date: '01 May 2026',
      icon: 'bi bi-people-fill',
      color: '#dc2626',
      description:
      'Orientation sessions for newly admitted students will be conducted every semester.'
    },

    {
      title: 'Library Week Celebration',
      date: '20 Apr 2026',
      icon: 'bi bi-calendar-event-fill',
      color: '#f59e0b',
      description:
      'Book exhibitions, quiz competitions and awareness programs will be organized during Library Week.'
    },

    {
      title: 'Scopus & Web of Science Workshop',
      date: '10 Apr 2026',
      icon: 'bi bi-search',
      color: '#0891b2',
      description:
      'Hands-on training program on Scopus, Web of Science and research databases.'
    }

  ];

}