import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactButtonComponent } from '../../../shared/contact-button/contact-button.component';
import { LanguageService } from '../../../services/language.service';
import { Observable } from 'rxjs';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { FormContent } from '../../../interfaces/form-content.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FirestoreContentService } from '../../../services/firestore-content.service';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [
        FormsModule,
        ContactButtonComponent,
        CommonModule,
        RouterLink,
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

  mailTest = true;

  post = {
    endPoint: 'https://michaelring.eu/app/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      console.log(this.contactData);
      
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
