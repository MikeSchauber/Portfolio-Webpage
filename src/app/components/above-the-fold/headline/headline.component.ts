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
  cntTransformX: string = 'translateX(-0px)';
  workTransformX: string = 'translateX(-0px)';
  positionSpeed: number = 0;
  roadPassed: number = 0;
  overWork: boolean = false;
  forward: boolean = false;
  interval: any[] = [];

  animationForward(btn: string) {
    this.forward = true;
    this.setAnimation(btn);
  }

  animationReverse(btn: string) {
    this.forward = false;
    this.setAnimation(btn);
  }

  setAnimation(btn: string) {
    if (btn == "work") {
      if (this.forward) {
        this.mouseOverWork();
      } else {
        this.mouseOutWork();
      }
    } else {
      if (this.forward) {
        this.mouseOverCnt();
      } else {
        this.mouseOutCnt();
      }
    }
  }

  mouseOverWork() {
    let interval = setInterval(() => {
      this.positionSpeed -= 4;
      this.roadPassed += 4;
      this.checkAndSetPosition();
      this.workTransformX = `translateX(${this.positionSpeed}px)`;
    }, 1000 / 60);
    this.interval.push(interval);
  }

  mouseOutWork() {
    this.interval.forEach((e) => {
      clearInterval(e);
    });
    this.positionSpeed = 0;
    this.roadPassed = 0;
    this.workTransformX = `translateX(0px)`;
  }

  mouseOverCnt() {
    let interval = setInterval(() => {
      this.positionSpeed -= 4;
      this.roadPassed += 4;
      this.checkAndSetPosition();
      this.cntTransformX = `translateX(${this.positionSpeed}px)`;
    }, 1000 / 60);
    this.interval.push(interval);
  }

  mouseOutCnt() {
    this.interval.forEach((e) => {
      clearInterval(e);
    });
    this.positionSpeed = 0;
    this.roadPassed = 0;
    this.cntTransformX = `translateX(0px)`;
  }

  checkAndSetPosition() {
    if (this.roadPassed >= 400) {
      this.positionSpeed = 0;
    }
    if (this.positionSpeed <= -200) {
      this.positionSpeed = 200;
    }
  }
}
