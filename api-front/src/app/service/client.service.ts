import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // url of API
  private url:string = 'http://localhost:8080';

  // Constructor
  constructor(private http: any) { }
  // constructor(private http: HttpClientModule) { }
}
