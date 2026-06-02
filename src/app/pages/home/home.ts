import { Component } from '@angular/core';

import { Navbar } from '../../shared/navbar/navbar';
import { HeroBanner } from '../../shared/hero-banner/hero-banner';
import { Footer } from '../../shared/footer/footer';
import { IconMenuComponent } from '../../shared/icon-menu/icon-menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    HeroBanner,
    Footer,
    IconMenuComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}