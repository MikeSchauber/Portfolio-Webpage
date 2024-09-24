import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent implements AfterViewInit {
  constructor(public translate: TranslateService, private elRef: ElementRef) {}

  transformX: string = 'translateX(-0px)';
  positionSpeed: number = 0;
  roadPassed: number = 0;
  overWork: boolean = false;
  forward: boolean = false;
  interval: any[] = [];
  mind: boolean = false;

  hover(movement: string) {
    if (movement == 'in') {
      this.mind = true;
    } else {
      this.mind = false;
    }
  }

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
