import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class QuotesControlService {
  quotes: Quote[] = [
    {
      position: 4,
      quote: "4",
      autor: 'Jan Steiner - Frontend Developer',
    },
    {
      position: 3,
      quote: "3",
      autor: 'Max Mustermann - Friend',
    },
    {
      position: 2,
      quote: "2",
      autor: 'Günther Margit - Mentor',
    },
    {
      position: 1,
      quote: "1",
      autor: 'Heinrich Friedhelm - Mentor',
    },
    {
      position: 0,
      quote: "0",
      autor: 'Erika Musterfrau - Mentor',
    },

  ];

  transform: string[] = [
    'translateX(-240%) scale(0.8)',
    'translateX(-120%) scale(0.8)',
    'translateX(0%)',
    'translateX(120%) scale(0.8)',
    'translateX(240%) scale(0.8)',
  ];

  transtionStyle: string = "transform 0.3s ease-in-out";

  hide: boolean[] = [false, false, false, false, false];

  activeQuote: number = 0;

  controlActive: boolean = false;

  constructor() { }
}
