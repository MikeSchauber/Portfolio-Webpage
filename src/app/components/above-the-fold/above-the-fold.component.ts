import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  isGerman: boolean = false;

  about: boolean = false;
  skills: boolean = false;
  projects: boolean = false;
  mail: boolean = false;
  github: boolean = false;
  linkedin: boolean = false;

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
    e === 'mail' ? (this.mail = true) : null;
    e === 'github' ? (this.github = true) : null;
    e === 'linkedin' ? (this.linkedin = true) : null;
    
    console.log(e);
  }
  mouseout(e: string) {
    e === 'about' ? (this.about = false) : null;
    e === 'skills' ? (this.skills = false) : null;
    e === 'projects' ? (this.projects = false) : null;
    e === 'mail' ? (this.mail = false) : null;
    e === 'github' ? (this.github = false) : null;
    e === 'linkedin' ? (this.linkedin = false) : null;
  }
}
