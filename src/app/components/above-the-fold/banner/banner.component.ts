import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
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

  positionSpeed: number = 0;
  transform_1: string = 'transformX(0px)';
  transform_2: string = 'transformX(0px)';
  innerWidth: number = 0;

  constructor(public translate: TranslateModule) { 
    this.innerWidth = window.innerWidth;

  }

  ngOnInit(): void {
    this.startBannerMovement();
  }

  startBannerMovement(): void {
    this.transform_1 = this.innerWidth;
    setInterval(() => {
      this.transform_1 -= 10;
      if (this.transform_1 <= -this.innerWidth) {
        this.transform_1 += this.innerWidth * 2;
      }
    }, 1000 / 60);
  }

  getPixel_1(i: number) {
    return this.transform_1
  }

  getPixel_2(i: number) {
    return this.transform_2
  }
}