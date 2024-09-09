import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../services/dialog-data.service';
import { ProjectServiceService } from '../../../services/project-data.service';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss',
})
export class ProjectDialogComponent {
  constructor(
    public translate: TranslateService,
    public dialogService: DialogDataService,
    public projectData: ProjectServiceService
  ) {}

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  nextProject() {
    this.projectData.currentProject++;
    this.dialogService.closeDialog();
    let project =
      this.projectData.availableProjects[this.projectData.currentProject];
    this.openDialog(project, this.projectData.currentProject);
  }

  openDialog(project: string, index: number) {
    this.dialogService.toggleScrollBehav();
    this.dialogService.openProjects = true;
    setTimeout(() => {
      this.dialogService.opacity = '1';
      this.dialogService.translationX = 'translateX(0px)';
    }, 21);
    this.projectData.currentProject = index;
    this.projectData.setProjectDataInDialog(project);
  }
}
