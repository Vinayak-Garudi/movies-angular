import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css']
})
export class ChatGptComponent {
  chatResponses: any = []
  openAIForm: FormGroup = this.fb.group({
    promptValue: ['', Validators.required]
  })

  // learn ng-zorro and scss

  constructor(private http: HttpClient, private userDetails: UserDetailsService, private fb: FormBuilder) { }

  handleSend() {
    if (this.openAIForm.get('promptValue')?.value.length > 0) {
      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Type', 'chatgpt4')
        .set('X-RapidAPI-Key', '7d24bdaad4msh8f98b48025207abp1cb766jsncbe35c377280')
        .set('X-RapidAPI-Host', 'chatgpt-open-ai-nlp.p.rapidapi.com')
      const body = {
        prompt: JSON.stringify(this.openAIForm.get('promptValue')?.value),
        temperature: '0.7'
      }
      this.http.post<any[]>(this.userDetails.openAIApi, body, { headers }).subscribe((res: any) => {
        this.chatResponses.push(
          {
            question: this.openAIForm.get('promptValue')?.value,
            answer: res.answer
          }
        )
        this.openAIForm.reset()
      })
    }
  }
}
