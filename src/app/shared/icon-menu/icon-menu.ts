// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-icon-menu',
//   standalone: true,
//   imports: [CommonModule,RouterModule],
// templateUrl: './icon-menu.html',
// styleUrl: './icon-menu.scss'
// })
// export class IconMenuComponent {

//   menus = [
//     {
//       title: 'About Library',
//       icon: 'bi-bank',
//       color: '#4A7BD0',
//        route:'/about-library'
//     },
//     {
//       title: 'Rules & Regulations',
//       icon: 'bi-journal-bookmark-fill',
//       color: '#F15A3D',
//       route:'/rules-regulations'
//     },
//     {
//       title: 'Physical Resource',
//       icon: 'bi-stack',
//       color: '#1F9D55',
//         route:'/physical-resource'
//     },
//     {
//       title: 'Online Resource',
//       icon: 'bi-globe',
//       color: '#F5A623',
//       route:'/online-resource'
//     },
//     {
//       title: 'Digital Library',
//       icon: 'bi-pc-display',
//       color: '#7E57C2',
//       route:'/digital-library'
//     },
//     {
//       title: 'Online Databases',
//       icon: 'bi-database',
//       color: '#0097A7',
//       route:'/online-databases'
//     },
//     {
//       title: 'New Arrivals',
//       icon: 'bi-book',
//       color: '#E84A5F',
//       route:'/new-arrivals'
//     },
//     {
//       title: 'OPAC',
//       icon: 'bi-search',
//       color: '#F57C00',
//       route:'/external-opac'
//     },
//     {
//       title: 'Library Notices',
//       icon: 'bi-bell',
//       color: '#1976D2',
//       route:'/library-notices'
//     },
//     {
//       title: 'IFHE Holidays List',
//       icon: 'bi-calendar-event',
//       color: '#2E8B57',
//       route:'/ifhe-holidays-list'
//     },
//     {
//       title: 'Special Announcement',
//       icon: 'bi-megaphone',
//       color: '#7E57C2',
//       size: '1.2em',
//       route:'/special-announcement'
//     },
//     {
//       title: 'Library Timings',
//       icon: 'bi-clock',
//       color: '#5B9AA0',
//       route:'/library-timings'
//     },
//     {
//       title: 'Feedback',
//       icon: 'bi-chat-dots',
//       color: '#E15B64',
//       route:'/feedback'
//     }
//   ];

//   openMenu(menu: any) {

//   if (menu.title === 'OPAC') {

//     window.open(
//       'http://111.93.16.209/libksr/queries/q_string.aspx',
//       '_blank'
//     );

//     return;
//   }

// }

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-menu.html',
  styleUrl: './icon-menu.scss'
})
export class IconMenuComponent {

  showOpacOptions = false;

  constructor(
    private router: Router
  ) {}

  menus = [

    { title:'About Library', image: 'assets/books/bgimage.jpg', route:'/about-library' },

    { title:'Rules & Regulations', icon:'bi-journal-bookmark-fill', color:'#F15A3D', route:'/rules-regulations' },

    { title:'Library Timings', icon:'bi-clock', color:'#5B9AA0', route:'/library-timings' },

    { title:'Physical Resources', icon:'bi-stack', color:'#1F9D55', route:'/physical-resource' },

    { title:'Online Resources', icon:'bi-globe', color:'#F5A623', route:'/online-resource' },

    { title:'Digital Library', icon:'bi-pc-display', color:'#7E57C2', route:'/digital-library' },

    { title:'Online Databases', icon:'bi-database', color:'#0097A7', route:'/online-databases' },

    { title:'New Arrivals', icon:'bi-book', color:'#E84A5F', route:'/new-arrivals' },

    { title:'Library OPAC', icon:'bi-search', color:'#F57C00',route:'/opac'},

    { title:'Library Notices', icon:'bi-bell', color:'#1976D2', route:'/library-notices' },

    { title:'IFHE Holidays List', icon:'bi-calendar-event', color:'#2E8B57', route:'/ifhe-holidays-list' },

    { title:'Feedback', icon:'bi-chat-dots', color:'#E15B64', route:'/feedback' }

  ];


  openMenu(menu: any) {

  this.router.navigate([menu.route]);

}




closeOpacPopup() {

  this.showOpacOptions = false;

}

}