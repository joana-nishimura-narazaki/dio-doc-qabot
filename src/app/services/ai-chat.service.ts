import { Injectable }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment }     from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AiChatService {
  private endpoint      = environment.azureOpenAiEndpoint;
  private key           = environment.azureOpenAiKey;
  private deployment    = 'gpt-35-turbo'; // ou o nome do seu deployment

  constructor(private http: HttpClient) {}

  /**
   * Envia o documento e a pergunta e retorna a resposta da IA
   */
  getAnswer(document: string, question: string): Observable<string> {
    const url = 
      `${this.endpoint}/openai/deployments/${this.deployment}/chat/completions?api-version=2023-05-15`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.key
    });
    const body = {
      messages: [
        { role: 'system', content: 'Você é um assistente útil.' },
        { role: 'system', content: `Documento: ${document}` },
        { role: 'user',   content: question }
      ]
    };
    return this.http.post<any>(url, body, { headers })
      .pipe(map(r => r.choices[0].message.content as string));
  }
}
