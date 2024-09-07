import { Component } from '@angular/core';
import { DialogDataService } from '../../../../services/dialog-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(public dialogService: DialogDataService) {}

  openDialog() {
    this.dialogService.openProjects = true;
    this.dialogService.toggleScrollBehav();
  }
}
