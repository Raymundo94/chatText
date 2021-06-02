import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoChatsService {

  constructor(private httpClient: HttpClient) { }

  //Get chats actives
  getUsersChat(): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': environment.apiKey
    });
    const url = '/users/connected';
    return this.httpClient.get(url, { headers });
  }

  //Get chats of users
  getChats(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-token': environment.apiKey,
    });
    const url = `/messages/${id}`;
    return this.httpClient.get(url, { headers });
  }

  //Get count message for user
  getCountMessage(): Observable<any>{
    const headers = new HttpHeaders({
      'x-token': environment.apiKey,
    });
    const url = `/messages/status`;
    return this.httpClient.get(url, { headers });
  }
}
