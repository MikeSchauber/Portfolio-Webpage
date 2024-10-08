import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormularFeedbackService } from '../../../services/formular-feedback.service';

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
  mailTest = false;

  post = {
    endPoint: 'https://mikeschauber.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(
    public translate: TranslateService,
    public http: HttpClient,
    private feedback: FormularFeedbackService
  ) {}

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.contactData.privacy
    ) {
      this.sendMail(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    } else if (!this.contactData.privacy) {
      this.privacyWarning = true;
    } else {
      this.privacyWarning = false;
    }
  }

  sendMail(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.feedbackAnimation();
          this.resetContactData();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  feedbackAnimation() {
    this.feedback.submitSuccess = true;
    setTimeout(() => {
      this.feedback.submitSuccess = false;
    }, 4000);
  }

  resetContactData() {
    this.contactData = {
      name: '',
      email: '',
      message: '',
      privacy: false,
    };
    this.privacyWarning = false;
    this.checkboxUrl = 'assets/icons/checkbox.png';
  }

  toggleCheckbox() {
    if (!this.contactData.privacy) {
      this.checkboxUrl = 'assets/icons/checked.png';
      this.contactData.privacy = true;
      this.privacyWarning = false;
    } else {
      this.checkboxUrl = 'assets/icons/checkbox.png';
      this.contactData.privacy = false;
      this.privacyWarning = true;
    }
  }
}
