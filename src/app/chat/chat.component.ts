import { Component }    from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';   
import { AiChatService } from '../services/ai-chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule         // ← aqui
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  document = '';      // armazena o texto colado
  question = '';      // armazena a pergunta
  answer: string | null = null;
  loading = false;    // controla o estado da requisição

  constructor(private ai: AiChatService) {}

  ask() {
    if (!this.document.trim() || !this.question.trim()) {
      return;
    }
    this.loading = true;
    this.answer = null;
    this.ai.getAnswer(this.document, this.question).subscribe({
      next: (res) => {
        this.answer = res;
        this.loading = false;
      },
      error: () => {
        this.answer = 'Erro ao obter resposta da IA.';
        this.loading = false;
      }
    });
  }
}
