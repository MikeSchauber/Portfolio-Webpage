import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent {
  workEntered: boolean = false;
  contactEntered: boolean = false;
  animation: boolean = false;

  mouseOver(btn: string) {
    console.log('mouse is ' + btn);
    if (btn === 'contact') {
      this.animation = true;
      this.contactEntered = true;
      this.workEntered = false;
    } else if (btn === 'work') {
      this.animation = true;
      this.workEntered = true;
      this.contactEntered = false;
    } else {
      this.contactEntered = false;
      this.workEntered = false;
    }
    console.log('work ' + this.workEntered);
    console.log('contact ' + this.contactEntered);
    console.log('Animation ' + this.animation);
  }
}
