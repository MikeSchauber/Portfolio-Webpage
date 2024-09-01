import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogDataService {
  open: boolean = false;
  translationX: string = "translateY(-150%)";
  opacity: string = "0";
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleScrollBehav() {
    if (this.open) {
      this.renderer.addClass(document.body, 'noScroll');
    } else {
      this.renderer.removeClass(document.body, 'noScroll');
    }
  }

  closeDialog() {
    this.translationX = "translateY(-150%)";
    this.opacity = "0";
    setTimeout(() => {
      this.open = false;
      this.toggleScrollBehav();
    }, 125);
  }
}
