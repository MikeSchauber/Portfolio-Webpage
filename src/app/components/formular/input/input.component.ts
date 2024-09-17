import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  checkboxUrl: string = 'assets/icons/checkbox.png';
  privacyChecked: boolean = false;

  constructor(public translate: TranslateService) {}

  toggleCheckbox() {
    if (!this.privacyChecked) {
      this.checkboxUrl = 'assets/icons/checked.png';
      this.privacyChecked = true;
    } else {
      this.checkboxUrl = 'assets/icons/checkbox.png';
      this.privacyChecked = false;
    }
  }
}
