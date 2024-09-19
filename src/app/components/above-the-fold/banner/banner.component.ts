import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  banners = [
    'banner.1',
    'banner.2',
    'banner.3',
    'banner.4',
    'banner.5',
    'banner.6',
    'banner.7',
    'banner.8',
  ];

  position_1: number = 0;
  position_2: number = 0;
  innerWidth!: number;

  constructor(public translate: TranslateModule) {
    this.innerWidth = window.innerWidth;
    
  }

  ngOnInit(): void {
    this.position_1 = this.innerWidth;
    this.position_2 = this.innerWidth * 2;
    this.startBannerMovement();
  }

  startBannerMovement(): void {
    const speed = 10;
    setInterval(() => {
      this.position_1 -= speed;
      this.position_2 -= speed;
      if (this.position_1 < -this.innerWidth) {
        this.position_1 = this.innerWidth;
      }
      if (this.position_2 < -this.innerWidth) {
        this.position_2 = this.innerWidth;
      }
    }, 1000 / 60);
  }
}
