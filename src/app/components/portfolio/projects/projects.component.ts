import { Component, inject } from '@angular/core';
import { DialogDataService } from '../../../services/dialog-data.service';
import { CommonModule } from '@angular/common';
import { ProjectServiceService } from '../../../services/project-data.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showImg: boolean = false;
  imgAnimation: boolean = false;
  imgSrcWhenHover: string = '';
  constructor(
    public dialogService: DialogDataService,
    public projectData: ProjectServiceService
  ) {}

  openDialog(project: string, index: number) {
    this.dialogService.toggleScrollBehav();
    this.dialogService.openProjects = true;
    setTimeout(() => {
      this.dialogService.opacity = '1';
      this.dialogService.translationX = 'translateX(0px)';
    }, 21);
    this.projectData.currentProject = index;
    this.projectData.setProjectDataInDialog(project, index);
  }

  hoverProject(index: number) {
    if (index === 0) {
      this.imgSrcWhenHover = 'assets/img/join.png';
    } else if (index === 1) {
      this.imgSrcWhenHover = 'assets/img/sharky.png';
    } else if (index === 2) {
      this.imgSrcWhenHover = 'assets/img/pokedex.png';
    }
    this.hoverAnimation();
  }

  hoverAnimation() {
    setTimeout(() => {
      this.showImg = true;
      setTimeout(() => {
        this.imgAnimation = true;
      }, 10);
    }, 11);
  }

  leaveProject() {

    setTimeout(() => {
      this.imgAnimation = false;
      setTimeout(() => {
        this.showImg = false;
      }, 1);
    }, 2);
  }
}
