import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [InputComponent, TextComponent],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
export class FormularComponent {

}
