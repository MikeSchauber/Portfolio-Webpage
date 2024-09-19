import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  banners: string[] = [
    'banner.1', 
    'banner.2', 
    'banner.3', 
    'banner.4',
    'banner.5',
    'banner.6',
    'banner.7',
    'banner.8'
  ];
  
  // positionSpeed: number = 0;
  // transform: string = 'translateX(0px)';
  // bannerWidth: number = 0;
  // containerWidth: number = 0;

  constructor(public translate: TranslateModule) { }

  // ngOnInit(): void {
  //   this.getInnerWidth();
  //   this.startBannerMovement();
  // }

  // getInnerWidth(): void {
  //   if (window.innerWidth <= 1100) {
  //     this.containerWidth = window.innerWidth * 2;
  //     this.positionSpeed = window.innerWidth;
  //   } else {
  //     this.containerWidth = window.innerWidth;
  //     this.positionSpeed = window.innerWidth;
  //   }
  // }

  // startBannerMovement(): void {
  //   setInterval(() => {
  //     this.positionSpeed -= 5;
  //     this.transform = `translateX(${this.positionSpeed}px)`;

  //     if (this.positionSpeed <= -this.containerWidth) {
  //       this.positionSpeed += this.containerWidth * 2;
  //     }
  //   }, 1000 / 60);
  // }



  // getTransform(i: number) {
  //   return this.transform;
  // }
}