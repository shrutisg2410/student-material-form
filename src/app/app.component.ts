import { Component, VERSION } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   dataSource:  any;
   data: any;
   formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dataService: DataService) { }

   submit() {
    // emppty stuff
    }

    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Required field' :
        this.formControl.hasError('email') ? 'Not a valid email' :
          '';
    }

    public confirmAdd(): void {
      this.dataService.addItem(this.data);
    }

    startEdit(i, id, name,state, created_date, updated_date){

    }

    deleteItem(i, id, name,state){

    }
}
