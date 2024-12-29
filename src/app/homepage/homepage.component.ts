import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageComponent {
  tickets = [
    { title: 'Concert A', description: 'Description for Concert A', price: 50 },
    { title: 'Concert B', description: 'Description for Concert B', price: 60 },
    { title: 'Concert C', description: 'Description for Concert C', price: 70 },
    { title: 'Concert D', description: 'Description for Concert D', price: 80 },
    { title: 'Concert E', description: 'Description for Concert E', price: 90 },
  ];

  historyTickets = [
    { title: 'Concert X', description: 'Description for Concert X', price: 40, date: '2023-01-01' },
    { title: 'Concert Y', description: 'Description for Concert Y', price: 45, date: '2023-02-01' },
    { title: 'Concert Z', description: 'Description for Concert Z', price: 55, date: '2023-03-01' },
  ];
}
