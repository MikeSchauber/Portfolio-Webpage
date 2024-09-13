import { Component } from '@angular/core';
import { QuotesControlService } from '../../../services/quotes-control.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  quotes: number;
  constructor(public control: QuotesControlService) {
    this.quotes = this.control.quotes.length - 1;
  }

  moveToQuote(index: number) {
    this.control.activeQuote = index;
  }

  previousQuote() {
    if (!this.control.controlActive) {
      this.control.controlActive = true;
      this.control.activeQuote--;
      if (this.control.activeQuote === -1) {
        this.control.activeQuote = this.control.quotes.length - 1;
      }
      this.animatePrevious();
    }
  }

  nextQuote() {
    if (!this.control.controlActive) {
      this.control.controlActive = true;
      this.control.activeQuote++;
      let index = this.control.activeQuote % this.control.quotes.length;
      this.control.activeQuote = index;
      this.animateNext();
    }
  }

  animateNext() {
    this.control.quotes.forEach((quote) => {
      if (quote.position > 0) {
        quote.position--;
      } else if (quote.position === 0) {
        quote.position = this.quotes;
        this.control.hide[quote.position] = true;
        setTimeout(() => {
          this.control.hide[quote.position] = false;
          this.control.controlActive = false;
        }, 300);
      } else {
        quote.position = this.quotes;
      }
    });
  }

  animatePrevious() {
    this.control.quotes.forEach((quote) => {
      if (quote.position < this.quotes) {
        quote.position++;
      } else if (quote.position === this.quotes) {
        quote.position = 0;
        this.control.hide[quote.position] = true;
        setTimeout(() => {
          this.control.hide[quote.position] = false;
          this.control.controlActive = false;
        }, 300);
      } else {
        quote.position = 0;
      }
    });
  }
}
