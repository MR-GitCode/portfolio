import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactButtonComponent } from '../../../shared/contact-button/contact-button.component';
import { LanguageService } from '../../../shared/services/language.service';
import { RouterLink } from '@angular/router';
import { FirestoreContentService } from '../../../shared/services/firestore-content.service';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ContactButtonComponent,
    RouterLink,
    AnimateOnScrollDirective,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);
  http = inject(HttpClient);

  formContent = this.contentService.getFormContent();
  
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  mailTest = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  privacyAccepted = signal(false);

  post = {
    endPoint: 'https://michaelring.eu/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Toggles the privacy acceptance state.
   */
  togglePrivacy() {
    this.privacyAccepted.set(!this.privacyAccepted());
  }
  
  /**
   * Handles form submission and sends contact data to the server.
   * @param ngForm The Angular form instance.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => this.handleSuccess(response, ngForm),
          error: () => this.handleError(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  /**
   * 
   * @param response The server response object containing status information
   * @param ngForm The form instance to be reset after successful submission
   */
  handleSuccess(response: any, ngForm: NgForm): void {
    if (response.status === 'success') {
      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }
    ngForm.resetForm();
    this.privacyAccepted.set(false);
  }
  
  /**
   * Handles form submission errors.
   * Displays error message for 3 seconds and hides success message. 
   */
  handleError(): void {
    this.showErrorMessage = true;
    this.showSuccessMessage = false;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3000);
  }
}
