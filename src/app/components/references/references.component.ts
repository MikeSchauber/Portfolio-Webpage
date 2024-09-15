import { Component } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [QuotesComponent, NavigationComponent, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  constructor(public translate: TranslateService) {

  }

}
