import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../components/above-the-fold/navbar/navbar.component';
import { DialogDataService } from '../services/dialog-data.service';
import { ResponsiveMenuComponent } from '../components/above-the-fold/responsive-menu/responsive-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, TranslateModule, NavbarComponent, ResponsiveMenuComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(public translate: TranslateService, public dialogData: DialogDataService) {}

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
