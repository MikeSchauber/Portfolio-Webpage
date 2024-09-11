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
  constructor(
    public dialogService: DialogDataService,
    public projectData: ProjectServiceService
  ) {}

  openDialog(project: string, index: number) {
    this.dialogService.noScroll = true;
    this.dialogService.openProjects = true;
    setTimeout(() => {
      this.dialogService.opacity = '1';
      this.dialogService.translationX = 'translateX(0px)';
    }, 21);
    this.projectData.currentProject = index;
    this.projectData.setProjectDataInDialog(project, index);
  }

 
}
