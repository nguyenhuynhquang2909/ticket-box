import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {
  tickets = [
    { id: 1, title: 'Concert A', description: 'Description for Concert A', price: 50, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Concert B', description: 'Description for Concert B', price: 60, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Concert C', description: 'Description for Concert C', price: 70, image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Concert D', description: 'Description for Concert D', price: 80, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Concert E', description: 'Description for Concert E', price: 90, image: 'https://via.placeholder.com/150' },
  ];

  historyTickets = [
    { id: 6, title: 'Concert X', description: 'Description for Concert X', price: 40, date: '2023-01-01', image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Concert Y', description: 'Description for Concert Y', price: 45, date: '2023-02-01', image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Concert Z', description: 'Description for Concert Z', price: 55, date: '2023-03-01', image: 'https://via.placeholder.com/150' },
  ];
}
