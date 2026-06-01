import { Component, inject } from '@angular/core';
import { DialogDataService } from '../../../services/dialog-data.service';
import { CommonModule } from '@angular/common';
import { ProjectServiceService } from '../../../services/project-data.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { ProjectInterface } from '../../../interfaces/project-interface';

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
  showArrowArray: boolean[] = [false, false, false];
  imgSrcWhenHover: string = '';
  projectList: ProjectInterface[] = []

  constructor(
    public dialogService: DialogDataService,
    public projectDataService: ProjectServiceService
  ) { }

  ngOnInit() {
    this.projectList = Object.values(this.projectDataService.projects);
  }

  openDialog(project: string, index: number) {
    this.dialogService.toggleScrollBehav();
    this.dialogService.openProjects = true;
    setTimeout(() => {
      this.dialogService.opacity = '1';
      this.dialogService.translationX = 'translateX(0px)';
    }, 21);
    this.projectDataService.currentProject = index;
    this.projectDataService.setProjectDataInDialog(project, index);
  }

  hoverProject(index: number) {
    this.imgSrcWhenHover = this.projectList[index].imgUrl
    this.hoverAnimation(index);

  }

  hoverAnimation(index: number) {
    this.showArrowArray[index] = true;
    setTimeout(() => {
      this.imgAnimation = true;
    }, 1);

  }

  leaveProject() {
    this.imgAnimation = false;
    this.showArrowArray.forEach((boolean, index) => {
      this.showArrowArray[index] = false;
    });
  }
}
