import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ TranslateModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  isGerman: boolean = false;

  about: boolean = false;
  skills: boolean = false;
  projects: boolean = false;

  translateX: string = "translateX(0%)"

  constructor(public translate: TranslateService) {}

  toggleLanguage() {
    if (this.isGerman) {
      this.isGerman = false;
      this.translate.use('en');
    } else {
      this.isGerman = true;
      this.translate.use('de');
    }
  }

  mouseover(e: string) {
    e === 'about' ? (this.about = true) : null;
    e === 'skills' ? (this.skills = true) : null;
    e === 'projects' ? (this.projects = true) : null;
  }
  mouseout(e: string) {
    e === 'about' ? (this.about = false) : null;
    e === 'skills' ? (this.skills = false) : null;
    e === 'projects' ? (this.projects = false) : null;
  }

}
