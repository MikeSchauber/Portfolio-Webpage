import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  constructor(
    public translate: TranslateService,
    public dialogService: DialogDataService,
    public projectData: ProjectServiceService
  ) {}

  scrollToTop(): void {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    }
  }

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  nextProject() {
    this.projectData.currentProject++;
    let index =
      this.projectData.currentProject %
      this.projectData.availableProjects.length;
    this.projectData.currentProject = index;
    this.moveProjectContainer(this.projectData.currentProject);
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
    index === 0
      ? this.projectData.setProjectDataInDialog('join', index)
      : index === 1
      ? this.projectData.setProjectDataInDialog('sharky', index)
      : index === 2
      ? this.projectData.setProjectDataInDialog('pokedex', index)
      : console.error('No next Project exists!');
    this.scrollToTop();
  }
}
