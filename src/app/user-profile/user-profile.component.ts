import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, Anytown, USA',
    profilePicture: 'https://via.placeholder.com/150'
  };

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    this.isEditing = false;
  }
}
