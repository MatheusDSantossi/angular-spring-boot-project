import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, NgFor, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  // Variable for buttons visibility 
  btnRegister:boolean = true;

  // Clients JSON
  clients:Client[] = [];
  
  // Constructor
  constructor(private service:ClientService) {}

   // Initialization method
   ngOnInit():void {
    console.log("Component Initialized");
    this.select();
  }

  // Select Method
  select():void {
    this.service.select()
    .subscribe({
    next: data => {
      console.log("Data received: ", data);
      this.clients = data;
    },
    error: error => {
      console.error("Error: ", error);
    }
  });
  }

}
