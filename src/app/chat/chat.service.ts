import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

interface ChatRequest {
  message : string 
}

interface ChatResponse {
  response : string 
}


@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private apiUrl = "http://localhost:8000/chat"
  constructor( private http : HttpClient ) { }

  sendMessage (message : string ) : Observable<ChatResponse>  {
    const body : ChatRequest = {message};
    return this.http.post<ChatResponse>(this.apiUrl , body ) ;  
  }

}
