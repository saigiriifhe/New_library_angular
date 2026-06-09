// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-opac',
//   imports: [],
//   templateUrl: './opac.html',
//   styleUrl: './opac.scss',
// })
// export class Opac {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opac.html',
  styleUrl: './opac.scss'
})
export class Opac {

  openQuickSearch() {

    window.open(
      'http://111.93.16.209/libksr/queries/q_string.aspx',
      '_blank'
    );

  }

  openAdvancedSearch() {

    window.open(
      'http://111.93.16.209/libksr/queries/q_simq.aspx',
      '_blank'
    );

  }

}