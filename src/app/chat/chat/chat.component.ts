import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  imports: [CommonModule , FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  userMessage = '';
  aiResponse = '';
  isLoading = false;
  errorMessage = '';

  constructor (private chatService: ChatService) {}

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.isLoading = true;
    this.aiResponse = '';
    this.errorMessage = '';

    this.chatService.sendMessage(this.userMessage).subscribe({
      next: (res) => {
        this.aiResponse = res.response;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Something went wrong. Is the backend running?';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

}
