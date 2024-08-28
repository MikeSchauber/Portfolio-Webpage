import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  isGerman: boolean = false;

  constructor(public translate: TranslateModule) {

  }

  toggleLanguage() {
    if (this.isGerman) {
      this.isGerman = false;
    } else {
      this.isGerman = true;
    }
  }
}
