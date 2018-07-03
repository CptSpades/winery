import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WineApiService {

  public api = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getWines() {
    return this.http.get( this.api + 'wines');
  }

  getWine(id) {
    return this.http.get( this.api + 'wines/' + id);
  }
}
