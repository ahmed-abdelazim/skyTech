import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private mailApi = 'https://tecksky-backend.vercel.app'

  constructor(private http: HttpClient) { }

  PostMessage(userData: any) {
    return this.http.post(this.mailApi, JSON.stringify(userData), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

}
