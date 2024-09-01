import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../components/above-the-fold/above-the-fold.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { DialogComponent } from '../components/dialog/dialog.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FooterComponent, AboveTheFoldComponent, AboutMeComponent, DialogComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
