import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../components/above-the-fold/navbar/navbar.component';
import { ResponsiveMenuComponent } from '../components/above-the-fold/responsive-menu/responsive-menu.component';
import { DialogDataService } from '../services/dialog-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, TranslateModule, NavbarComponent, ResponsiveMenuComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {

  constructor(public translate: TranslateService, public dialogData: DialogDataService) { }

  ngOnInit(): void {
    this.loadLanguageFromLocalStorage();
  }

  private loadLanguageFromLocalStorage(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
      if (storedLanguage === 'de') {
      }
    } else {
      this.translate.use('en');
    }
  }
}
