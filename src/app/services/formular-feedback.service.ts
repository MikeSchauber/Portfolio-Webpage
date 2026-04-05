import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormularFeedbackService {
  submitSuccess: boolean = false;
  responseSuccess: boolean = false;

  constructor() {}
}
