// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { BackButton } from '../../shared/back-button/back-button';

// // @Component({
// //   selector: 'app-feedback',
// //   standalone: true,
// //   imports: [
// //     CommonModule,
// //     FormsModule,BackButton
// //   ],
// //   templateUrl: './feedback.html',
// //   styleUrl: './feedback.scss'
// // })
// // export class Feedback {

// //   feedbacks = [

// //     {
// //       name: 'Dr. K. Ramesh',
// //       designation: 'Professor',
// //       rating: 5,
// //       feedback:
// //       'The library provides excellent academic resources and research support.'
// //     },

// //     {
// //       name: 'Priya Sharma',
// //       designation: 'MBA Student',
// //       rating: 5,
// //       feedback:
// //       'The digital library resources are very useful for assignments and projects.'
// //     },

// //     {
// //       name: 'Sneha Reddy',
// //       designation: 'Research Scholar',
// //       rating: 5,
// //       feedback:
// //       'Excellent access to journals, Scopus and research databases.'
// //     }

// //   ];

// //   userFeedback = {

// //     name: '',
// //     designation: '',
// //     email: '',
// //     rating: 5,
// //     feedback: ''

// //   };

// //   submitFeedback() {

// //     console.log(this.userFeedback);

// //     alert('Thank you for your feedback!');

// //     this.userFeedback = {
// //       name: '',
// //       designation: '',
// //       email: '',
// //       rating: 5,
// //       feedback: ''
// //     };

// //   }

// // }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { BackButton } from '../../shared/back-button/back-button';

// @Component({
//   selector: 'app-feedback',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     BackButton
//   ],
//   templateUrl: './feedback.html',
//   styleUrl: './feedback.scss'
// })
// export class Feedback {

//   userFeedback = {
//     name: '',
//     designation: '',
//     email: '',
//     rating: 5,
//     feedback: ''
//   };

//   submitFeedback() {

//   const url =
//     'https://docs.google.com/forms/d/e/1FAIpQLSfxa-WuVuy3v_RZgvufp-VUnXKFByNu76QxRNpMG23n473GkA/formResponse';

//   const formData = new FormData();

//   formData.append('entry.134724461', this.userFeedback.name);
//   formData.append('entry.1257615711', this.userFeedback.designation);
//   formData.append('entry.1319379012', this.userFeedback.email);
//   formData.append('entry.32884969', this.userFeedback.feedback);
//   formData.append('entry.980960598', this.userFeedback.rating.toString());

//   fetch(url, {
//     method: 'POST',
//     mode: 'no-cors',
//     body: formData
//   })
//   .then(() => {
//     alert('Feedback Submitted Successfully');

//     this.userFeedback = {
//       name: '',
//       designation: '',
//       email: '',
//       rating: 5,
//       feedback: ''
//     };
//   })
//   .catch(err => {
//     console.log(err);
//   });

// }

//   // submitFeedback() {

//   //   const formURL =
//   //     'https://docs.google.com/forms/d/e/1FAIpQLSfxa-WuVuy3v_RZgvufp-VUnXKFByNu76QxRNpMG23n473GkA/formResponse';

//   //   const formData = new FormData();

//   //   formData.append(
//   //     'entry.134724461',
//   //     this.userFeedback.name
//   //   );

//   //   formData.append(
//   //     'entry.1257615711',
//   //     this.userFeedback.designation
//   //   );

//   //   formData.append(
//   //     'entry.1319379012',
//   //     this.userFeedback.email
//   //   );

//   //   formData.append(
//   //     'entry.980960598',
//   //     this.userFeedback.rating.toString()
//   //   );

//   //   formData.append(
//   //     'entry.32884969',
//   //     this.userFeedback.feedback
//   //   );

//   //   fetch(formURL, {
//   //     method: 'POST',
//   //     mode: 'no-cors',
//   //     body: formData
//   //   });

//   //   alert('✅ ✔ Feedback Submitted Successfully');

//   //   this.userFeedback = {
//   //     name: '',
//   //     designation: '',
//   //     email: '',
//   //     rating: 5,
//   //     feedback: ''
//   //   };

//   // }

// }


import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
 import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BackButton
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback{

  private platformId = inject(PLATFORM_ID);

  userFeedback = {
    name: '',
    designation: '',
    email: '',
    rating: 5,
    feedback: ''
  };

  submitFeedback() {

    // Prevent SSR execution
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSfxa-WuVuy3v_RZgvufp-VUnXKFByNu76QxRNpMG23n473GkA/formResponse';

    const formData = new FormData();

    formData.append('entry.134724461', this.userFeedback.name);
    formData.append('entry.1257615711', this.userFeedback.designation);
    formData.append('entry.1319379012', this.userFeedback.email);
    formData.append('entry.32884969', this.userFeedback.feedback);
    formData.append('entry.980960598', this.userFeedback.rating.toString());

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })
    .then(() => {

      alert('Feedback Submitted Successfully.');

      this.userFeedback = {
        name: '',
        designation: '',
        email: '',
        rating: 5,
        feedback: ''
      };

    })
    .catch(error => {
      console.error('Submission Error:', error);
      alert('Unable to submit feedback.');
    });

  }

}