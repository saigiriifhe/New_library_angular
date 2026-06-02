import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-online-databases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './online-databases.html',
  styleUrl: './online-databases.scss'
})
export class OnlineDatabases {

  databases = [

    {
      title: 'Business Source Complete (EBSCO)',
      icon: 'bi bi-briefcase-fill',
      color: '#2563eb',
      link: 'https://research-ebsco-com-ifheiindia.knimbus.com/c/s2gk3c/search'
    },

    {
      title: 'Emerald Management Xtra',
      icon: 'bi bi-journal-richtext',
      color: '#16a34a',
      link: 'https://www-emerald-com-ifheiindia.knimbus.com/'
    },

    {
      title: 'ProQuest ABI/Inform',
      icon: 'bi bi-book-fill',
      color: '#dc2626',
      link: 'https://www-proquest-com-ifheiindia.knimbus.com/abicomplete/index'
    },

    {
      title: 'JSTOR',
      icon: 'bi bi-collection-fill',
      color: '#7c3aed',
      link: 'https://www-jstor-org-ifheiindia.knimbus.com/'
    },

    {
      title: 'Science Direct',
      icon: 'bi bi-cpu-fill',
      color: '#ea580c',
      link: 'https://www-sciencedirect-com-ifheiindia.knimbus.com/'
    },

    {
      title: 'MarketLine',
      icon: 'bi bi-graph-up-arrow',
      color: '#0891b2',
      link: 'https://advantage-marketline-com-ifheiindia.knimbus.com/HomePage'
    },

    {
      title: 'Prime Database',
      icon: 'bi bi-database-fill',
      color: '#f59e0b',
      link: 'https://www-primedatabase-com-ifheiindia.knimbus.com/'
    },

    {
      title: 'Capitaline AWS',
      icon: 'bi bi-bar-chart-fill',
      color: '#0f766e',
      link: 'https://awsone.capitaline.com/externel-access-iplogin.html'
    },

    {
      title: 'CMIE Prowess',
      icon: 'bi bi-building-fill',
      color: '#be123c',
      link: 'https://prowess.cmie.com/'
    },

    {
      title: 'IEEE ASPP + POP',
      icon: 'bi bi-lightning-charge-fill',
      color: '#1d4ed8',
      link: 'https://ieeexplore-ieee-org-ifheiindia.knimbus.com/Xplore/home.jsp'
    },

    {
      title: 'Springer Engineering',
      icon: 'bi bi-journal-code',
      color: '#9333ea',
      link: 'https://link-springer-com-ifheiindia.knimbus.com/search?new-search=true&query=&content-type=Journal'
    },

    {
      title: 'J-Gate Engineering',
      icon: 'bi bi-book-half',
      color: '#059669',
      link: 'https://jgatenext-com-ifheiindia.knimbus.com/'
    },

    {
      title: 'Manupatra',
      icon: 'bi bi-bank2',
      color: '#dc2626',
      link: 'https://www-manupatrafast-in-ifheiindia.knimbus.com/pers/Personalized.aspx'
    },

    {
      title: 'SCC Online',
      icon: 'bi bi-shield-fill-check',
      color: '#0ea5e9',
      link: 'https://www-scconline-com-ifheiindia.knimbus.com/'
    },

    {
      title: 'Lexis Nexis',
      icon: 'bi bi-file-earmark-text-fill',
      color: '#f97316',
      link: 'https://advance-lexis-com-ifheiindia.knimbus.com/'
    },

    {
      title: 'Scopus',
      icon: 'bi bi-search',
      color: '#2563eb',
      link: 'https://www-scopus-com-ifheiindia.knimbus.com/pages/home'
    },

    {
      title: 'Web of Science',
      icon: 'bi bi-globe-central-south-asia',
      color: '#16a34a',
      link: 'https://www-webofscience-com-ifheiindia.knimbus.com/wos/woscc/basic-search'
    },

    {
      title: 'Cabells Directories',
      icon: 'bi bi-folder-fill',
      color: '#9333ea',
      link: 'https://cabells.com/'
    },

    {
      title: 'Wiley Online Library',
      icon: 'bi bi-journal-text',
      color: '#0891b2',
      link: 'https://onlinelibrary.wiley.com/'
    },

    {
      title: 'Taylor & Francis',
      icon: 'bi bi-bookmarks-fill',
      color: '#dc2626',
      link: 'https://www-tandfonline-com-ifheiindia.knimbus.com/'
    }

  ];

}