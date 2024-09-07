import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogDataService } from '../../../services/dialog-data.service';

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
    public dialogService: DialogDataService
  ) {}
  handleClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
