import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements AfterViewInit {
  banners: string[] = [
    'banner.1',
    'banner.2',
    'banner.3',
    'banner.4',
    'banner.5',
  ];

  @ViewChild('copy1') copy1!: ElementRef;
  @ViewChild('track') track!: ElementRef;

ngAfterViewInit() {
  setTimeout(() => {
    const w = this.copy1.nativeElement.offsetWidth;
    console.log('copy width:', w);
    this.track.nativeElement.style.setProperty('--copy-width', `${w}px`);
  }, 500);
}
}