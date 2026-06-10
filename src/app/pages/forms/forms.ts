import { Component } from '@angular/core';
import { BackButton } from '../../shared/back-button/back-button';
// import { Router, RouterLink } from '@angular/router';
// import { Location } from '@angular/common';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [BackButton],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {

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