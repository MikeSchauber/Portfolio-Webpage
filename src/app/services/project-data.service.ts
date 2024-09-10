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
    index: '',
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
    index: "01",
    name: 'Join',
    description: 'join.description',
    technologies: [0, 1, 2, 3],
    imgUrl: 'assets/img/join.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl:
      'https://mike-schauber.developerakademie.net/developer-akademie/join/index.html',
  };

  sharky: ProjectInterface = {
    index: "02",
    name: 'Sharky',
    description: 'sharky.description',
    technologies: [0, 1, 2],
    imgUrl: 'assets/img/sharky.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl:
      'https://mike-schauber.developerakademie.net/developer-akademie/sharky/index.html',
  };

  pokedex: ProjectInterface = {
    index: "03",
    name: 'Pokédex',
    description: 'pokedex.description',
    technologies: [0, 1, 2],
    imgUrl: 'assets/img/pokedex.png',
    githubUrl: 'https://github.com/MikeSchauber',
    liveTestUrl:
      'https://mike-schauber.developerakademie.net/developer-akademie/pokedex/index.html',
  };

  constructor() { }

  setProjectDataInDialog(project: string) {
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
      this.activeProject.technologies.push(
        this.technologiesArray[number]
      );
      this.activeProject.techIconUrl.push(
        this.techIconArray[number]
      );
    }
  }

  SetJoinData() {
    let techNumbers = this.join.technologies;
    this.setTech(techNumbers);
    this.activeProject.index = this['join'].index;
    this.activeProject.name = this['join'].name;
    this.activeProject.description =
      this['join'].description;
    this.activeProject.imgUrl = this['join'].imgUrl;
    this.activeProject.githubUrl =
      this['join'].githubUrl;
    this.activeProject.liveTestUrl =
      this['join'].liveTestUrl;
  }

  setPokedexData() {
    let techNumbers = this.pokedex.technologies;
    this.setTech(techNumbers);
    this.activeProject.index = this['pokedex'].index;
    this.activeProject.name = this['pokedex'].name;
    this.activeProject.description =
      this['pokedex'].description;
    this.activeProject.imgUrl = this['pokedex'].imgUrl;
    this.activeProject.githubUrl =
      this['pokedex'].githubUrl;
    this.activeProject.liveTestUrl =
      this['pokedex'].liveTestUrl;
  }

  setSharkyData() {
    let techNumbers = this.sharky.technologies;
    this.setTech(techNumbers);
    this.activeProject.index = this['sharky'].index;
    this.activeProject.name = this['sharky'].name;
    this.activeProject.description =
      this['sharky'].description;
    this.activeProject.imgUrl = this['sharky'].imgUrl;
    this.activeProject.githubUrl =
      this['sharky'].githubUrl;
    this.activeProject.liveTestUrl =
      this['sharky'].liveTestUrl;
  }
}
