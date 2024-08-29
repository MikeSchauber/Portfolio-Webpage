import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [NavbarComponent, HeadlineComponent ,CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  isGerman: boolean = false;

  mail: boolean = false;
  github: boolean = false;
  linkedin: boolean = false;

  constructor(public translate: TranslateService) {}
  mouseover(e: string) {
    e === 'mail' ? (this.mail = true) : null;
    e === 'github' ? (this.github = true) : null;
    e === 'linkedin' ? (this.linkedin = true) : null;
  }
  mouseout(e: string) {
    e === 'mail' ? (this.mail = false) : null;
    e === 'github' ? (this.github = false) : null;
    e === 'linkedin' ? (this.linkedin = false) : null;
  }
}
