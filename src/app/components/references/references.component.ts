import { Component } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [QuotesComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
