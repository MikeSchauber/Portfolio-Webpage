import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';
import { ActiveProject } from '../interfaces/active-project';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  currentProject: number = 0;
  availableProjects: string[] = ['join', 'sharky', 'pokedex'];

  activeProject: ActiveProject = {
    number: '',
    name: '',
    description: '',
    technologies: [],
    techIconUrl: [],
    imgUrl: '',
    githubUrl: '',
    liveTestUrl: '',
  };

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
    number: '01',
    name: 'Join',
    description: 'join.description',
    technologies: [0, 1, 2, 3],
    imgUrl: 'assets/img/join.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl: 'https://mikeschauber.de/join/index.html',
  };

  sharky: ProjectInterface = {
    number: '02',
    name: 'Sharky',
    description: 'sharky.description',
    technologies: [0, 1, 2],
    imgUrl: 'assets/img/sharky.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl: 'https://mikeschauber.de/sharky/index.html',
  };

  pokedex: ProjectInterface = {
    number: '03',
    name: 'Pokédex',
    description: 'pokedex.description',
    technologies: [0, 1, 2],
    imgUrl: 'assets/img/pokedex.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl: 'https://mikeschauber.de/pokedex/index.html',
  };

  constructor() {}

  setProjectDataInDialog(project: string, index: number) {
    this.currentProject = index;
    if (project === 'join') {
      this.SetJoinData();
    } else if (project === 'sharky') {
      this.setSharkyData();
    } else if (project === 'pokedex') {
      this.setPokedexData();
    }
  }

  setTech(techNumbers: number[]) {
    for (let i = 0; i < techNumbers.length; i++) {
      const number: number = techNumbers[i];
      this.activeProject.technologies.push(this.technologiesArray[number]);
      this.activeProject.techIconUrl.push(this.techIconArray[number]);
    }
  }

  SetJoinData() {
    let techNumbers = this.join.technologies;
    this.setTech(techNumbers);
    this.activeProject.number = this['join'].number;
    this.activeProject.name = this['join'].name;
    this.activeProject.description = this['join'].description;
    this.activeProject.imgUrl = this['join'].imgUrl;
    this.activeProject.githubUrl = this['join'].githubUrl;
    this.activeProject.liveTestUrl = this['join'].liveTestUrl;
  }

  setPokedexData() {
    let techNumbers = this.pokedex.technologies;
    this.setTech(techNumbers);
    this.activeProject.number = this['pokedex'].number;
    this.activeProject.name = this['pokedex'].name;
    this.activeProject.description = this['pokedex'].description;
    this.activeProject.imgUrl = this['pokedex'].imgUrl;
    this.activeProject.githubUrl = this['pokedex'].githubUrl;
    this.activeProject.liveTestUrl = this['pokedex'].liveTestUrl;
  }

  setSharkyData() {
    let techNumbers = this.sharky.technologies;
    this.setTech(techNumbers);
    this.activeProject.number = this['sharky'].number;
    this.activeProject.name = this['sharky'].name;
    this.activeProject.description = this['sharky'].description;
    this.activeProject.imgUrl = this['sharky'].imgUrl;
    this.activeProject.githubUrl = this['sharky'].githubUrl;
    this.activeProject.liveTestUrl = this['sharky'].liveTestUrl;
  }
}
