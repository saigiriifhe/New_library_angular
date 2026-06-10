import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { BackButton } from '../../shared/back-button/back-button';
@Component({
  selector: 'app-library-timings',
  imports: [BackButton],
  templateUrl: './library-timings.html',
  styleUrl: './library-timings.scss',
})
export class LibraryTimings {
  // constructor(
  //   private location: Location,
  //   private router: Router
  // ) {}

  // goBack(): void {

  //   if (window.history.length > 1) {

  //     this.location.back();

  //   } else {

  //     this.router.navigate(['/']);

  //   }

  // }

}
