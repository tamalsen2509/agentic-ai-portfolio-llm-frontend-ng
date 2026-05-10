import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

interface ChatRequest {
  message : string 
  session_id: string;
}

interface ChatResponse {
  response : string 
  session_id: string;
}


@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private apiUrl = "http://localhost:8000/chat"
   public sessionId: string = crypto.randomUUID();

  constructor( private http : HttpClient ) { }

  sendMessage (message : string ) : Observable<ChatResponse>  {
    const body : ChatRequest = {message , 
      session_id: this.sessionId

     };
    return this.http.post<ChatResponse>(this.apiUrl , body ) ;  
  }

}
