import { Component, inject } from '@angular/core';
import { AboveTheFoldComponent } from '../components/above-the-fold/above-the-fold.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogDataService } from '../../services/dialog-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule  , FooterComponent, AboveTheFoldComponent, AboutMeComponent, DialogComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  dialogOpen: boolean = false

  public dialogData = inject(DialogDataService);

  constructor() {
  
  }

closeDialog() {
  this.dialogData.translationX = "translateY(-150%";
  this.dialogData.opacity = "0";
  setTimeout(() => {
    this.dialogData.open = false;
  }, 125);
}

}
