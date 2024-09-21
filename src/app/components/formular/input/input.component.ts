import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  checkboxUrl: string = 'assets/icons/checkbox.png';
  privacyChecked: boolean = false;
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };
  privacyWarning: boolean = false;
  mailTest = true;

  post = {
    endPoint:
      'https://mike-schauber.developerakademie.net/angular-projects/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(public translate: TranslateService, public http: HttpClient) {}

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData);
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.privacyChecked
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
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

  toggleCheckbox() {
    this.privacyWarning = false;
    if (!this.contactData.privacy) {
      this.checkboxUrl = 'assets/icons/checked.png';
      this.contactData.privacy = true;
    } else {
      this.checkboxUrl = 'assets/icons/checkbox.png';
      this.contactData.privacy = false;
    }
  }
}
