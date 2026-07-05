import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../services/dialog-data.service';
import { ProjectServiceService } from '../../../services/project-data.service';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectInterface } from '../../../interfaces/project-interface';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss',
})
export class ProjectDialogComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  constructor(
    public translate: TranslateService,
    public dialogService: DialogDataService,
    public projectData: ProjectServiceService
  ) { }

  scrollToTop(): void {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    }
  }

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  nextProject() {
    const projects = this.projectArray;
    const length = projects.length;

    let startIndex = this.projectData.currentProject;

    for (let i = 1; i <= length; i++) {
      const nextIndex = (startIndex + i) % length;
      const nextProject = projects[nextIndex];

      if (nextProject?.active) {
        this.projectData.currentProject = nextIndex;
        this.moveProjectContainer(nextIndex);
        return;
      }
    }

    console.warn("No next Project exists!");
  }

  get projectArray(): ProjectInterface[] {
    return Object.values(this.projectData.projects);
  }

  moveProjectContainer(index: number) {
    this.dialogService.translationX = 'translateX(-150%)';
    this.movingAnimation(index);
  }

  movingAnimation(index: number) {
    setTimeout(() => {
      this.dialogService.containerOpacity = '0';
      setTimeout(() => {
        this.dialogService.translationX = 'translateX(150%)';
        setTimeout(() => {
          this.dialogService.containerOpacity = '1';
          this.dialogService.disableActiveProjects();
          this.checkAndSetProject(index);
          setTimeout(() => {
            this.dialogService.translationX = 'translateX(0%)';
          }, 75);
        }, 75);
      }, 75);
    }, 75);
  }

  checkAndSetProject(index: number) {

    const project = this.projectArray[index];

    if (!project) {
      console.error('Project not found at index', index);
      return;
    }

    this.projectData.setProjectDataInDialog(project.dataName, index);
    this.scrollToTop();
  }
}
