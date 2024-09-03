import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  constructor(public translate: TranslateService) {}

  transformX: string = 'translateX(-0px)';
  positionSpeed: number = 0;
  roadPassed: number = 0;
  overWork: boolean = false;
  forward: boolean = false;
  interval: any[] = [];
  mind: boolean = false;

  hover(movement: string) {
    if (movement == "in") {
      this.mind = true;
    } else {
      this.mind = false;
    }

  }

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
      this.positionSpeed -= 4;
      this.roadPassed += 4;
      this.checkAndSetPosition();
      this.transformX = `translateX(${this.positionSpeed}px)`;
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

  checkAndSetPosition() {
    if (this.roadPassed >= 300) {
      this.positionSpeed = 0;
    }
    if (this.positionSpeed <= -150) {
      this.positionSpeed = 150;
    }
  }
}
