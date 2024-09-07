import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  technologiesArray: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Firebase',
    'TypeScript',
    'Angular',
  ];

  techIconArray: string[] = [
    'assets/skill-icons/green/html.png',
    'assets/skill-icons/green/css.png',
    'assets/skill-icons/green/javascript.png',
    'assets/skill-icons/green/firebase.png',
    'assets/skill-icons/green/typescript.png',
    'assets/skill-icons/green/angular.png',
  ];

  join: ProjectInterface = {
    name: 'Join',
    description: 'join.description',
    technologies: [0, 1, 2, 3],
    techIcons: [0, 1, 2, 3],
    imgUrl: 'assets/img/join.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl:
      'https://mike-schauber.developerakademie.net/developer-akademie/join/index.html',
  };

  sharky: ProjectInterface = {
    name: 'Sharky',
    description: 'sharky.description',
    technologies: [0, 1, 2],
    techIcons: [0, 1, 2],
    imgUrl: 'assets/img/sharky.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl:
      'https://mike-schauber.developerakademie.net/developer-akademie/sharky/index.html',
  };

  pokedex: ProjectInterface = {
    name: 'Join',
    description: 'pokedex.description',
    technologies: [0, 1, 2],
    techIcons: [0, 1, 2],
    imgUrl: 'assets/img/pokedex.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl:
      'https://mike-schauber.developerakademie.net/developer-akademie/pokedex/index.html',
  };

  constructor() {}
}
