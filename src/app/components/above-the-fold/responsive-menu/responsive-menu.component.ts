import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../services/dialog-data.service';

@Component({
  selector: 'app-responsive-menu',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss']
})
export class ResponsiveMenuComponent implements OnInit {
  isGerman: boolean = false;
  about: boolean = false;
  skills: boolean = false;
  projects: boolean = false;

  public dialogData = inject(DialogDataService);

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.loadLanguageFromLocalStorage();
  }

  toggleLanguage() {
    if (this.isGerman) {
      this.isGerman = false;
      this.translate.use('en');
      this.saveLanguageToLocalStorage('en', false);
    } else {
      this.isGerman = true;
      this.translate.use('de');
      this.saveLanguageToLocalStorage('de', true);
    }
  }

  stopProp(event: Event) {
    event.stopPropagation();
  }

  private loadLanguageFromLocalStorage(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const storedIsGerman = localStorage.getItem('isGerman') === 'true';
    if (storedLanguage) {
      this.translate.use(storedLanguage);
      this.isGerman = storedIsGerman;
    } else {
      this.translate.use('en');
      this.isGerman = false;
    }
  }

  private saveLanguageToLocalStorage(language: string, isGerman: boolean): void {
    localStorage.setItem('selectedLanguage', language);
    localStorage.setItem('isGerman', isGerman.toString());
  }
}
