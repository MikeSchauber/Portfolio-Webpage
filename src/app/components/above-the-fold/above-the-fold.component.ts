import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineComponent } from './headline/headline.component';
import { SocialsAndNavComponent } from './socials-and-nav/socials-and-nav.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [BannerComponent ,SocialsAndNavComponent ,NavbarComponent, HeadlineComponent ,CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  isGerman: boolean = false

  constructor(public translate: TranslateService) {}

}
