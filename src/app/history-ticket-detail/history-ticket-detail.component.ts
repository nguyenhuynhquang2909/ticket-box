import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-ticket-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-ticket-detail.component.html',
  styleUrl: './history-ticket-detail.component.css'
})
export class HistoryTicketDetailComponent implements OnDestroy, OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('ticket_id');
    this.fetchTicketDetails(ticketId);
  }
  isQrModalOpen = false;
  showQrButton = true;
  countdown = 30;
  countdownInterval: any;
  ticket: any;
  fetchTicketDetails(ticketId: string | null): void {
    if (ticketId) {
      this.apiService.getTicketDetails(ticketId).subscribe(
        response => {
          this.ticket = response.ticket;
        },
        error => {
          console.error('Failed to fetch ticket details', error);
        }
      );
    }
  }

  openQrModal() {
    this.isQrModalOpen = true;
    this.startCountdown();
  }

  

  startCountdown() {
    this.countdown = 30;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.closeQrModal();
      }
    }, 1000);
  }

  closeQrModal() {
    this.isQrModalOpen = false;
    this.showQrButton = false;
    clearInterval(this.countdownInterval);
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }
}
