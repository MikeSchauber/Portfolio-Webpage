import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../services/dialog-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isGerman: boolean = false;

  about: boolean = false;
  skills: boolean = false;
  projects: boolean = false;

  dialogOpen: boolean = false;

  public dialogData = inject(DialogDataService);

  constructor(public translate: TranslateService) {
    this.dialogOpen = this.dialogData.open;
  }

  openDialog() {
    this.dialogData.open = true;
    this.dialogData.toggleScrollBehav();
    setTimeout(() => {
      this.dialogData.opacity = "1";
      this.dialogData.translationY = "translateY(0px)";
    }, 21);
  }

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
