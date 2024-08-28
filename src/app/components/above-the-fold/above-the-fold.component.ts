import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  isGerman: boolean = false;

  toggleLanguage() {
    if (this.isGerman) {
      this.isGerman = false;
    } else {
      this.isGerman = true;
    }
    console.log('Deutsch ist an: ' + this.isGerman);
  }
}
