import { Component, OnInit } from '@angular/core';
import { Movement } from '../../models/movement.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.css']
})
export class MovementFormComponent implements OnInit {
  movementForm: FormGroup;

  amount: AbstractControl;
  date: AbstractControl;
  description: AbstractControl;

  constructor(fb: FormBuilder) {
    this.movementForm = fb.group({
      amount: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.amount = this.movementForm.controls.amount;
    this.date = this.movementForm.controls.date;
    this.description = this.movementForm.controls.description;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);

    this.amount.setValue('');
    this.date.setValue('');
    this.description.setValue('');
  }

  // addMovement(date: HTMLInputElement, description: HTMLInputElement, amount: HTMLInputElement) {
  //   console.log(`Addinig movements date: ${date.value}, description: ${description.value} amd amount: ${amount.value}`);
  //
  //   // this.movements.push(new Movement(movements.length + 1, parseFloat(amount.value), description.value, new Date(date.value)));
  //
  //   amount.value      = '';
  //   date.value        = '';
  //   description.value = '';
  //
  //   return false;
  // }
}
