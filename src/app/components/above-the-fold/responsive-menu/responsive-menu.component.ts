import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../../services/dialog-data.service';

@Component({
  selector: 'app-responsive-menu',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './responsive-menu.component.html',
  styleUrl: './responsive-menu.component.scss'
})
export class ResponsiveMenuComponent {
  isGerman: boolean = false;
  about: boolean = false;
  skills: boolean = false;
  projects: boolean = false;

  public dialogService = inject(DialogDataService);

  constructor(public translate: TranslateService) {
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

  stopProp(event: Event) {
    event.stopPropagation();
  }

}
