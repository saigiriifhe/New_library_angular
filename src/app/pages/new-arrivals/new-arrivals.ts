import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss'
})
export class NewArrivals {

  books = [

    {
      title: 'Artificial Intelligence: A Modern Approach',
      author: 'Stuart Russell',
      category: 'Artificial Intelligence',
      year: '2025',
      image: 'assets/books/ai.jpg'
    },

    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Software Engineering',
      year: '2025',
      image: 'assets/books/clean-code.jpg'
    },

    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      category: 'Finance',
      year: '2025',
      image: 'assets/books/psychology-money.jpg'
    },

    {
      title: 'Data Science for Business',
      author: 'Foster Provost',
      category: 'Data Science',
      year: '2025',
      image: 'assets/books/data-science.jpg'
    },

    {
      title: 'Strategic Management',
      author: 'Fred R. David',
      category: 'Management',
      year: '2025',
      image: 'assets/books/management.jpg'
    },

    {
      title: 'Computer Networks',
      author: 'Andrew S. Tanenbaum',
      category: 'Computer Science',
      year: '2025',
      image: 'assets/books/networks.jpg'
    }

  ];

}