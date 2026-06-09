import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { IconMenuComponent} from './shared/icon-menu/icon-menu';
import { LibraryHeader } from './shared/library-header/library-header';
import {Footer} from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    //IconMenuComponent,
    LibraryHeader,
  
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}