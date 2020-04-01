import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;


  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, this.nameValidator]),
      mail: new FormControl('', [Validators.email, Validators.required], this.mailValidator),
      status: new FormControl(''),
    })
  }

  onSubmmit() {
    console.log(this.projectForm.value);
  }

  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'teste') {
      return { 'invalidName': true };
    } else {
      return null
    }
  }

  mailValidator(control: FormControl): Observable<any> | Promise<any> {

    const promise = new Promise((resolve, reject) => {
      return setTimeout(() => {
        if (control.value === 'teste@teste.com.br') {
          resolve({ 'invalidEmail': true })
        } else {
          resolve(null)
        }
      }, 1800);
    })

    return promise;

  }
}
