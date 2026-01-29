import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactButtonComponent } from '../../../shared/contact-button/contact-button.component';
import { LanguageService } from '../../../services/language.service';
import { RouterLink } from '@angular/router';
import { FirestoreContentService } from '../../../services/firestore-content.service';
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

  formContent = this.contentService.getFormContent();


  http = inject(HttpClient);
  
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  privacyAccepted = signal(false)

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

  togglePrivacy() {
    this.privacyAccepted.set(!this.privacyAccepted());
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      console.log('Sending email with data:', this.contactData);
      
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            console.log('SUCCESS:', response);
            
            if (response.status === 'success') {
              // show success Message
              this.showSuccessMessage = true;
              this.showErrorMessage = false;
              
              setTimeout(() => {
                this.showSuccessMessage = false;
              }, 3000);
            }
            
            ngForm.resetForm();
            this.privacyAccepted.set(false);
          },
          error: (error) => {
            console.error('ERROR:', error);
            
            // Show error message
            this.showErrorMessage = true;
            this.showSuccessMessage = false;
            
            setTimeout(() => {
              this.showErrorMessage = false;
            }, 3000);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Test mode - not sending email');
      ngForm.resetForm();
    }
  }
}
