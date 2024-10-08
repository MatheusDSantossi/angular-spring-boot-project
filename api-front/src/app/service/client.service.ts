import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // url of API
  private url:string = 'http://localhost:8080';

  // Constructor
  constructor(private http: HttpClient) { }


  // Method to select all clients
  select():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
}
