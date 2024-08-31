import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent {
  transformX: string = 'translateX(-0px)';
  positionSpeed: number = 0;
  roadPassed: number = 0;
  overWork: boolean = false;
  forward: boolean = false;
  interval: any[] = [];

  animationForward() {
    this.forward = true;
    this.setAnimation();
  }

  animationReverse() {
    this.forward = false;
    this.setAnimation();
  }

  setAnimation() {
    if (this.forward) {
      this.mouseOver();
    } else {
      this.mouseOut();
    }
  }

  mouseOver() {
    let interval = setInterval(() => {
      this.positionSpeed += 4;
      this.roadPassed += 4;
      if (this.roadPassed >= 400) {
        this.positionSpeed = 0;
      }
      if (this.positionSpeed >= 200) {
        this.positionSpeed -= 400;
      }
      this.transformX = `translateX(${this.positionSpeed}px)`;
      console.log(this.positionSpeed);
    }, 1000 / 60);
    this.interval.push(interval);
  }

  mouseOut() {
    this.interval.forEach((e) => {
      clearInterval(e);
    });
    this.positionSpeed = 0;
    this.roadPassed = 0;
    this.transformX = `translateX(0px)`;
  }
}
