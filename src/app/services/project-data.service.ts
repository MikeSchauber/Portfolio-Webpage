import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {

  techIconArray: string[] = ['assets/icons'];

  join: ProjectInterface = {
    name: 'Join',
    description: '"projects.description"',
    technologies: [],
    techIcons: [],
    imgUrl: 'assets/img/join.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl: '',
  };

  constructor() {}
}
