import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BreakfastService } from '../how-we-work/breakfast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Import ReactiveFormsModule
  providers:[BreakfastService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  message='';
  messageClass='';
  breakfastService=inject(BreakfastService); // ✅ Inject BreakfastService

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.breakfastService.sendContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          this.message = response.message; // ✅ Show success message
          console.log('Success:', response);
          this.messageClass = 'text-success'; // ✅ Apply success class
        },
        error: (error) => {
          this.message = 'Failed to send message';
          this.messageClass = 'text-danger'; // ❌ Apply error class

          console.error('Error:', error);
        }
      });
    } else {
      this.message = 'Please fill in all required fields correctly.';
    }
  }
}
