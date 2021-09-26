import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://randomuser.me/api/';
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  
/* REAL LIFE CRUD Methods I've used in projects. ToasterService uses Material Toasts for displaying messages: */
    addItem(item: any): void {
    this.httpClient.post(this.API_URL, item).subscribe(data => {
      this.dialogData = item;
      console.log('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      console.log('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

     updateItem(item: any): void {
    this.httpClient.put(this.API_URL + item.id, item).subscribe(data => {
        this.dialogData = item;
        console.log('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        console.log('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        console.log('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        console.log('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
}




