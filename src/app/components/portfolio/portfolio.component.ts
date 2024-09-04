import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { HeadlineComponent } from './headline/headline.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, HeadlineComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
