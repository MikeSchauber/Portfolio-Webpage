import { Injectable, OnChanges, Renderer2, RendererFactory2, SimpleChanges } from '@angular/core';
import { ProjectServiceService } from './project-data.service';

@Injectable({
  providedIn: 'root',
})
export class DialogDataService {
  open: boolean = false;
  openProjects: boolean = false;
  noScroll: boolean = false;
  translationY: string = 'translateY(-150%)';
  translationX: string = 'translateX(150%)';
  opacity: string = '0';
  containerOpacity: string = "";
  private renderer: Renderer2;

  constructor(
    public rendererFactory: RendererFactory2,
    public projectData: ProjectServiceService
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleScrollBehav() {
    if (!this.noScroll) {
      this.noScroll = true;
      this.renderer.addClass(document.documentElement, 'noScroll');
    } else {
      this.noScroll = false;
      this.renderer.removeClass(document.documentElement, 'noScroll');
    }
  }

  closeDialog() {
    this.toggleScrollBehav();
    this.translationY = 'translateY(-150%)';
    this.translationX = 'translateX(-150%)';
    this.opacity = '0';
    setTimeout(() => {
      this.open = false;
      this.openProjects = false;
      this.translationX = 'translateX(150%)';
    }, 125);
    this.disableActiveProjects();
  }

  disableActiveProjects() {
    this.projectData.activeProject = {
      number: '',
      name: '',
      description: '',
      technologies: [],
      techIconUrl: [],
      imgUrl: '',
      githubUrl: '',
      liveTestUrl: '',
    };
  }
}
