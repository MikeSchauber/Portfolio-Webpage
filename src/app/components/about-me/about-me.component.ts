import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  constructor(public translate: TranslateService, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const animElements = this.elRef.nativeElement.querySelectorAll('.animElement');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });
  
    animElements.forEach((element: Element) => {
      if (element instanceof HTMLElement) {  // Sicherstellen, dass das Element ein HTMLElement ist
        observer.observe(element);
      } else {
        console.warn('Ungültiges Element für den Observer:', element);
      }
    });
  }
  
}
