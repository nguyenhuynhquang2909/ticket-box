import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-history-ticket-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-ticket-detail.component.html',
  styleUrl: './history-ticket-detail.component.css'
})
export class HistoryTicketDetailComponent implements OnDestroy {
  
  ticket = {
    title: 'Concert A',
    description: 'Description for Concert A',
    price: 50,
    date: '2023-01-01',
    qrCode: 'https://via.placeholder.com/150' // Placeholder for QR code image URL
  };

  isQrModalOpen = false;
  showQrButton = true;
  countdown = 30;
  countdownInterval: any;

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
