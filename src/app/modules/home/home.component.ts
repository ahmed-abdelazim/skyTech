import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    const mobilePattern = /^(010|011|015|012)\d{8}$/;
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(mobilePattern)]],
      message: ['', [Validators.maxLength(200)]],
    })
  }
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  submitForm() {
    this.isFormSubmitted = true;
    if (this.contactForm.invalid) return;
    console.log(this.contactForm.value)
  }
}
