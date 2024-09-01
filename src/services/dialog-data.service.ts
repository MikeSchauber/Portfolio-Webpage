import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogDataService {
  open: boolean = false;
  translationX: string = "translateY(-150%)"
  opacity: string = "0";

  constructor() { }

}
