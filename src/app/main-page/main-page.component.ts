import { Component, inject } from '@angular/core';
import { AboveTheFoldComponent } from '../components/above-the-fold/above-the-fold.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { DialogDataService } from '../services/dialog-data.service';
import { CommonModule } from '@angular/common';
import { SkillSetComponent } from '../components/skill-set/skill-set.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ResponsiveMenuComponent } from '../components/above-the-fold/responsive-menu/responsive-menu.component';
import { ProjectDialogComponent } from '../components/portfolio/project-dialog/project-dialog.component';
import { ReferencesComponent } from '../components/references/references.component';
import { FormularComponent } from '../components/formular/formular.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ResponsiveMenuComponent,
    ProjectDialogComponent,
    FooterComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    PortfolioComponent,
    ReferencesComponent,
    FormularComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  dialogOpen: boolean = false;

  public dialogService = inject(DialogDataService);

  constructor() { }
}
