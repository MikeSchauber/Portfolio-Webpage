import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [QuotesComponent, NavigationComponent, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent implements AfterViewInit {
  constructor(public translate: TranslateService, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const animElements =
      this.elRef.nativeElement.querySelectorAll('.animElement');
    const observer = new IntersectionObserver((entries) => {
      this.setClassesWhenViewed(entries);
    });
    this.observeElement(animElements, observer);
  }

  setClassesWhenViewed(entries: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }

  observeElement(animElements: any, observer: any) {
    animElements.forEach((element: Element) => {
      if (element instanceof HTMLElement) {
        observer.observe(element);
      } else {
        console.warn('Ungültiges Element für den Observer:', element);
      }
    });
  }
}
