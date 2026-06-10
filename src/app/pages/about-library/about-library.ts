import { Component } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-about-library',
  imports: [BackButton],
  templateUrl: './about-library.html',
  styleUrl: './about-library.scss',
})
export class AboutLibrary {}
