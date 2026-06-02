import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class QuotesControlService {
  /**
   * Quotes are doubled because of the Animation
   * Quote String comes out of i18n
   */
  quotes: Quote[] = [
    {
      position: 9,
      quote: 'quotes.quote_1',
      autor: 'Jan Steiner - Frontend Developer',
    },
    {
      position: 8,
      quote: 'quotes.quote_2',
      autor: 'Kai Schulz - Freelance Webdesigner',
    },
    {
      position: 7,
      quote: 'quotes.quote_3',
      autor: 'Ertugrul K. - Frontend Developer',
    },
    {
      position: 6,
      quote: 'quotes.quote_4',
      autor: 'Roman Kabukov - Frontend Developer',
    },
    {
      position: 5,
      quote: 'quotes.quote_5',
      autor: 'Elias Martin - Lokführer',
    },
    {
      position: 4,
      quote: 'quotes.quote_1',
      autor: 'Jan Steiner - Frontend Developer',
    },
    {
      position: 3,
      quote: 'quotes.quote_2',
      autor: 'Kai Schulz - Freelance Webdesigner',
    },
    {
      position: 2,
      quote: 'quotes.quote_3',
      autor: 'Ertugrul K. - Frontend Developer',
    },
    {
      position: 1,
      quote: 'quotes.quote_4',
      autor: 'Roman Kabukov - Frontend Developer',
    },
    {
      position: 0,
      quote: 'quotes.quote_5',
      autor: 'Elias Martin - Lokführer',
    },
  ];


  /**
   * Put more dots into this array if more quotes comes into it
   */
  realQuotes: number[] = [0, 1, 2, 3, 4];

  /**
   * Put more of the 240% values into the array if more quotes comes into it
   */
  transform: string[] = [
    'translateX(-240%) scale(0.8)',
    'translateX(-120%) scale(0.8)',
    'translateX(0%)',
    'translateX(120%) scale(0.8)',
    'translateX(240%) scale(0.8)',
    'translateX(240%) scale(0.8)',
    'translateX(240%) scale(0.8)',
    'translateX(240%) scale(0.8)',
    'translateX(240%) scale(0.8)',
    'translateX(240%) scale(0.8)',
  ];

  /**
   * Put more booleans into this array if more quotes comes into it
   */
  hide: boolean[] = [false, false, false, false, false, false, false, false, false];

  activeQuote: number = 0;

  controlActive: boolean = false;

  constructor() { }
}
