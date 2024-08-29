import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

window.onload = () => {
  const cursor = document.querySelector('.mover') as HTMLElement | null;

  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      let x = e.pageX;
      let y = e.pageY;
      setTimeout(() => {
        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
        cursor.style.display = 'block';
      }, 100);
    });

    document.addEventListener('mouseout', () => {
      setTimeout(() => {
        cursor.style.display = 'none';
      }, 101);
    });
  } else {
    console.error("cursor with class 'mover' is not supported");
  }
};
