import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../components/above-the-fold/above-the-fold.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AboveTheFoldComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
