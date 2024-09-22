import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {

  constructor(public translate: TranslateService) {}

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
