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
export class BannerComponent implements OnInit{
  banners: string[] = [
    'banner.1',
    'banner.2',
    'banner.3',
    'banner.4',
  ];
  positionSpeed: number = -1800;
  transform: string = 'translateX(-0px)';
  bannerWidth: number = 0;
  containerWidth: number = 0;

  constructor(private translate: TranslateModule) {}

  ngOnInit(): void {
    this.startBannerMovement();
  }

  startBannerMovement(): void {
    setInterval(() => {
      this.positionSpeed += 5;
      this.transform = `translateX(${this.positionSpeed}px)`;
      if (this.positionSpeed >= 1800) {
        this.positionSpeed = -1800;
      }
    }, 1000 / 60);
  }

  getTransform(i: number) {
    return this.transform;
  }
}
