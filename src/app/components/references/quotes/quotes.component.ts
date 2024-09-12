import { Component } from '@angular/core';
import { QuotesControlService } from '../../../services/quotes-control.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent {
  constructor(public control: QuotesControlService) {}

}
