import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root',
})
export class QuotesControlService {
  quotes: Quote[] = [
    {
      position: 2,
      quote:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur praesentium dignissimos eius! Recusandae et, error ratione quisquam ipsum tempora velit, cupiditate unde optio expedita quaerat porro consectetur, ipsa eaque itaque.',
      autor: 'Jan Steiner - Frontend Developer',
    },
    {
      position: 1,
      quote:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur praesentium dignissimos eius! Recusandae et, error ratione quisquam ipsum tempora velit, cupiditate unde optio expedita quaerat porro consectetur, ipsa eaque itaque.',
      autor: 'Max Mustermann - Friend',
    },
    {
      position: 0,
      quote:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur praesentium dignissimos eius! Recusandae et, error ratione quisquam ipsum tempora velit, cupiditate unde optio expedita quaerat porro consectetur, ipsa eaque itaque.',
      autor: 'Erika Musterfrau - Mentor',
    },
  ];

  transform: string[] = [
    'translateX(-120%)',
    'translateX(0%)',
    'translateX(120%)',
  ];

  activeQuote: number = 0;

  constructor() {}
}
