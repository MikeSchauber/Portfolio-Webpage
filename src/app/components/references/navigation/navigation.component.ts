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
  constructor(public control: QuotesControlService) { }

  moveToQuote(index: number) {
    this.control.activeQuote = index;
  }

  previousQuote() {
    this.control.activeQuote--;
    if (this.control.activeQuote === -1) {
      this.control.activeQuote = this.control.quotes.length - 1;
    }
    this.animatePrevious();
  }

  nextQuote() {
    this.control.activeQuote++;
    let index = this.control.activeQuote % this.control.quotes.length;
    this.control.activeQuote = index;
    this.animateNext();
  }

  animateNext() {
    this.control.quotes.forEach((quote) => {
      if (quote.position > 0) {
        quote.position--;
      } else if (quote.position === 0) {
        quote.position = this.control.quotes.length - 1;
        this.control.hide[quote.position] = true;
        setTimeout(() => {
          this.control.hide[quote.position] = false;
        }, 300);
      } else {
        quote.position = this.control.quotes.length -1;
      }
      console.log(quote.position);
    });
  }

  animatePrevious() {
    this.control.quotes.forEach((quote) => {
      quote.position++;
      if (quote.position >= this.control.quotes.length) {
        quote.position = 0;
      }
    });
  }
}
