import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telephone: new FormControl(null, [Validators.required, Validators.pattern(/^\d{11}$/)]),
    area: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  })


  get errors(){
    return {
      name: this.registerForm.get('name')?.errors,
      email: this.registerForm.get('email')?.errors,
      telephone: this.registerForm.get('telephone')?.errors,
      area: this.registerForm.get('area')?.errors,
      message: this.registerForm.get('message')?.errors,
    }
  }



  onSubmit(){
    if(this.registerForm.status === "INVALID"){
      this.registerForm.markAllAsTouched()
      return alert("Fill all the required fields")
    }
    console.log(this.registerForm.value)
    this.registerForm.reset()
  }
}
