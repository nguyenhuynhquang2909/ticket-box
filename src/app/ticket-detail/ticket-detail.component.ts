import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.css'
})
export class TicketDetailComponent implements OnInit {
  ticket: any;
  isModalOpen = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    // For demonstration, we'll use a static ticket object
    this.ticket = {
      id: ticketId,
      title: 'Concert A',
      description: 'Description for Concert A',
      price: 50,
      date: '2023-01-01',
      remaining: 100
    };
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmPurchase(){
    alert('Ticket purchased successfully');
    this.closeModal();
  }

}
