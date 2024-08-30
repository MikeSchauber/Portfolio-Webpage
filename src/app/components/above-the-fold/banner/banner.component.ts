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
  banners: string[] = ['banner.1', 'banner.2', 'banner.3', 'banner.4', 'banner.1', 'banner.2', 'banner.3', 'banner.4'];
  positionSpeed: number = -2500;
  transform: string = 'translateX(-0px)';
  containerWidth: number = 1920;

  constructor(private translate: TranslateModule) {}

  ngOnInit(): void {
    this.startBannerMovement();
  }

  startBannerMovement(): void {
    setInterval(() => {
      this.positionSpeed += 0.8;
      this.transform = `translateX(${this.positionSpeed}px)`;
      if (this.positionSpeed === this.containerWidth) {
        this.positionSpeed = -1600;
      }
    }, 1000 / 60);
  }

  getTransform(i: number) {
    return this.transform;
  }
}
