import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class QuotesControlService {
  quotes: Quote[] = [
    {
      position: 5,
      quote: 'quotes.quote_1',
      autor: 'Jan Steiner - Frontend Developer'
    },
    {
      position: 4,
      quote: 'quotes.quote_2',
      autor: 'Kai Schulz - Freelance Webdesigner'
    },
    {
      position: 3,
      quote: 'quotes.quote_3',
      autor: 'Ertugrul K. - Frontend Developer'
    },
    {
      position: 2,
      quote: 'quotes.quote_1',
      autor: 'Jan Steiner - Frontend Developer'
    },
    {
      position: 1,
      quote: 'quotes.quote_2',
      autor: 'Kai Schulz - Freelance Webdesigner'
    },
    {
      position: 0,
      quote: 'quotes.quote_3',
      autor: 'Ertugrul K. - Frontend Developer'
    }
  ];
  
  


  realQuotes: number[] = [0, 1, 2];

  transform: string[] = [
    'translateX(-240%) scale(0.8)',
    'translateX(-120%) scale(0.8)',
    'translateX(0%)',
    'translateX(120%) scale(0.8)',
    'translateX(240%) scale(0.8)',
    'translateX(360%) scale(0.8)',
  ];

  hide: boolean[] = [false, false, false, false, false, false];

  activeQuote: number = 0;

  controlActive: boolean = false;

  constructor() { }
}
