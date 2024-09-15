import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../services/dialog-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isGerman: boolean = false;
  about: boolean = false;
  skills: boolean = false;
  projects: boolean = false;
  dialogOpen: boolean = false;
  public dialogData = inject(DialogDataService);

  constructor(public translate: TranslateService) {
    this.dialogOpen = this.dialogData.open;
  }

  ngOnInit(): void {
    this.loadLanguageFromLocalStorage();
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
      this.saveLanguageToLocalStorage('en');
    } else {
      this.isGerman = true;
      this.translate.use('de');
      this.saveLanguageToLocalStorage('de');
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

  private loadLanguageFromLocalStorage(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
      if (storedLanguage === 'de') {
        this.isGerman = true;
      }
    } else {
      this.translate.use('en');
      this.isGerman = false;
    }
  }

  private saveLanguageToLocalStorage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
  }
}
