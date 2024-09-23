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

  constructor(public translate: TranslateModule) { }

  
}