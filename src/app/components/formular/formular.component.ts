import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';
import { FormularFeedbackService } from '../../services/formular-feedback.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [InputComponent, TextComponent, CommonModule, TranslateModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss',
})
export class FormularComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef,
    public feedback: FormularFeedbackService,
    public translate: TranslateService
  ) {}

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
