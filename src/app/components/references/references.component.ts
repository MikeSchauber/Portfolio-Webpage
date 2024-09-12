import { Component } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [QuotesComponent, NavigationComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
