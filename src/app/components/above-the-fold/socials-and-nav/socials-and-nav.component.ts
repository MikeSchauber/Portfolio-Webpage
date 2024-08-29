import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-socials-and-nav',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './socials-and-nav.component.html',
  styleUrl: './socials-and-nav.component.scss'
})
export class SocialsAndNavComponent {

  constructor(public translate: TranslateService) {}

  mail: boolean = false;
  github: boolean = false;
  linkedin: boolean = false;


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
