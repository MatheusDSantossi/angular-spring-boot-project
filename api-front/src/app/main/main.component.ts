import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, NgFor, HttpClientModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  // Variable for buttons visibility 
  btnRegister:boolean = true;

  // Clients JSON
  clients:Client[] = [];

  selectedClient: Client = {code: 0, name: '', age: 0, city: ''};
  
  // Constructor
  constructor(private service:ClientService) {}

   // Initialization method
   ngOnInit():void {
    this.select();
  }

  // Select Method
  select():void {
    this.service.select()
    .subscribe({
    next: data => {
      this.clients = data;
    },
    error: error => {
      console.error("Error: ", error);
    }
  });
  }

  // Method to handle the client registration
  registerClient(): void {
    if (this.selectedClient.name && this.selectedClient.age && this.selectedClient.city) {
      this.clients.push({ ...this.selectedClient });

      // Reset the form
      this.selectedClient = {code: 0, name: '', age: 0, city: ''};
    }
  }

  // Method to register a new client
  register():void {
    this.service.register(this.selectedClient)
    .subscribe(data => { 
      // Register the client on the vector
      this.clients.push(data); 
      
      // Clear the form
      this.selectedClient = new Client();

      // message
      alert("Client registered successfully!")

    });
  }

  // Method to select a client for editing
  selectClient(client: Client): void {
    this.selectedClient = {...client };
    this.btnRegister = false;
  }

  // Method to handle client editing
  editClient(): void {
    this.btnRegister = true;
  }

  // Method to remove client
  // removeClient(client: Client): void {
  //   this.clients = this.clients.filter(c => c !== this.selectClient);
  //   this.cancelEdit();
  // }

  // Method to cancel editing
  cancelEdit(): void {
    this.selectedClient = {code: 0, name: '', age: 0, city: ''};
    this.btnRegister = true;
  }

}
