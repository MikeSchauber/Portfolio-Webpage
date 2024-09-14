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

  previousQuote() {
    if (!this.control.controlActive) {
      this.control.controlActive = true;
      if (this.control.realQuotes.length > 1) {
        this.control.activeQuote--;
        if (this.control.activeQuote === -1) {
          this.control.activeQuote = this.control.realQuotes.length - 1;
        }
      } else {
        this.control.activeQuote = 0;
      }
      console.log(this.control.activeQuote);
      
      this.animatePrevious();
    }
  }

  nextQuote() {
    if (!this.control.controlActive) {
      this.control.controlActive = true;
      if (this.control.realQuotes.length > 1) {
        this.control.activeQuote++;
        let index = this.control.activeQuote % this.control.realQuotes.length;
        this.control.activeQuote = index;
      } else {
        this.control.activeQuote = 0;
      }
      console.log(this.control.activeQuote);
      
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
