import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackButton } from '../../shared/back-button/back-button';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,BackButton
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss'
})
export class Feedback {

  feedbacks = [

    {
      name: 'Dr. K. Ramesh',
      designation: 'Professor',
      rating: 5,
      feedback:
      'The library provides excellent academic resources and research support.'
    },

    {
      name: 'Priya Sharma',
      designation: 'MBA Student',
      rating: 5,
      feedback:
      'The digital library resources are very useful for assignments and projects.'
    },

    {
      name: 'Sneha Reddy',
      designation: 'Research Scholar',
      rating: 5,
      feedback:
      'Excellent access to journals, Scopus and research databases.'
    }

  ];

  userFeedback = {

    name: '',
    designation: '',
    email: '',
    rating: 5,
    feedback: ''

  };

  submitFeedback() {

    console.log(this.userFeedback);

    alert('Thank you for your feedback!');

    this.userFeedback = {
      name: '',
      designation: '',
      email: '',
      rating: 5,
      feedback: ''
    };

  }

}