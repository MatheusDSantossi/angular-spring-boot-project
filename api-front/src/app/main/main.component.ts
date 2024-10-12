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
  
  // Object of type client
  client = new Client();

  // Variable for buttons visibility 
  btnRegister:boolean = true;

  // Clients JSON
  clients:Client[] = [];

  // Variable to table visibility
  tableVisibility:boolean = true;

  // selectedClient: Client = {code: 0, name: '', age: 0, city: ''};
  
  // Constructor
  constructor(private service:ClientService) {}

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
  // registerClient(): void {
  //   if (this.selectedClient.name && this.selectedClient.age && this.selectedClient.city) {
  //     this.clients.push({ ...this.selectedClient });

  //     // Reset the form
  //     this.selectedClient = {code: 0, name: '', age: 0, city: ''};
  //   }
  // }
  registerClient(): void {
    if (this.client.name && this.client.age && this.client.city) {
      this.clients.push({ ...this.client });

      // Reset the form
      this.client = {code: 0, name: '', age: 0, city: ''};
    }
  }

  // Method to register a new client
  register():void {
    this.service.register(this.client)
    .subscribe(data => { 
      // Register the client on the vector
      this.clients.push(data); 
      
      // Clear the form
      this.client = new Client();

      // message
      alert("Client registered successfully!")

    });
  }

  // Method to select a client for editing
  // selectClient(client: Client): void {
  //   this.selectedClient = {...client };
  //   this.btnRegister = false;
  // }

  selectClient(position: number): void {
    // Select client in the vector position
    this.client = this.clients[position];

    // Buttons visibility
    this.btnRegister = false;

    // Table visibility
    this.tableVisibility = false;
  }

  // Method to handle client editing
  editClient(): void {
    this.service.edit(this.client)
    .subscribe(data => {
      // Get vector position where is the client
      let position = this.clients.findIndex(obj => {
        return obj.code === data.code;
      });

      // Update the client in the vector position
      this.clients[position] = data;
      
      // Clear the form
      this.client = new Client();
      
      // Visbility of bottons
      this.btnRegister = true;

      // Table visibility
      this.tableVisibility = true;
      
      
      // message
      alert("Client edited successfully!")

      // Clear the form
      this.client = new Client();
      
      // message
      alert("Client edited successfully!")
    });

  }

  // Method to remove client
  removeClient(): void {
    this.service.remove(this.client.code)
    .subscribe(data => {
      // Get vector position where is the client
      let position = this.clients.findIndex(obj => {
        return obj.code === this.client.code;
      });
      // Remove clients from vector
      this.clients.splice(position, 1);
      
      // Clear the form
      this.client = new Client();
      
      // message
      alert("Client removed successfully!")
      
      // Table visibility
      this.tableVisibility = true;
      
      // Buttons visibility
      this.btnRegister = true;
      
      // message
      alert("Client removed successfully!")
      
      // Clear the form
      this.client = new Client();
      
      // message
      alert("Client removed successfully!")
      
      // Table visibility
      this.tableVisibility = true;
      
      // Buttons visibility
      this.btnRegister = true;
      
      // message
      alert("Client removed successfully!")
      
      // Clear the form
      this.client = new Client();
      
      // message
      alert("Client removed successfully!")
      
      // Table visibility
      this.tableVisibility = true;
      
      // Buttons visibility
      this.btnRegister = true;
      
      // message
      alert("Client removed successfully!")
      
    });
    
  }

  // Method to cancel editing
  cancelEdit(): void {
    // Clean form
    this.client = new Client();
    
    // Buttons visibility
    this.btnRegister = true;
    
    // Table visibility
    this.tableVisibility = true;    
  }

  // Initialization method
  ngOnInit():void {
  this.select();
  }


}
