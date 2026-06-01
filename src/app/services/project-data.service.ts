import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';
import { ActiveProject } from '../interfaces/active-project';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  currentProject: number = 0;

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
    'Angular',
    'TypeScript',
    'Firebase',
    'JavaScript',
    'HTML',
    'SCSS',
    'CSS',
    'Wordpress'
  ];

  techIconArray: string[] = [
    'assets/skill-icons/green/angular.png',
    'assets/skill-icons/green/typescript.png',
    'assets/skill-icons/green/firebase.png',
    'assets/skill-icons/green/javascript.png',
    'assets/skill-icons/green/html.png',
    'assets/skill-icons/green/css.png',
    'assets/skill-icons/green/css.png',
    'assets/skill-icons/white/wordpress.png',
  ];

  projects: { [key: string]: ProjectInterface } = {
    dabubble: {
      number: '01',
      name: 'DABubble',
      dataName: "dabubble",
      description: 'dabubble.description',
      technologies: [0, 1, 5, 4, 2],
      imgUrl: 'assets/img/dabubble.png',
      githubUrl: 'https://github.com/MikeSchauber/DABubbleGr',
      liveTestUrl: 'https://dabubble.mikeschauber.de',
      active: true
    },
    join: {
      number: '02',
      name: 'Join',
      dataName: "join",
      description: 'join.description',
      technologies: [3, 6, 4, 2],
      imgUrl: 'assets/img/join.png',
      githubUrl: 'https://github.com/Jan2810/join',
      liveTestUrl: 'https://join.mikeschauber.de',
      active: true
    },
    sharky: {
      number: '03',
      name: 'Sharky',
      dataName: "sharky",
      description: 'sharky.description',
      technologies: [3, 6, 4],
      imgUrl: 'assets/img/sharky.png',
      githubUrl: 'https://github.com/MikeSchauber/Sharky-2D-Game',
      liveTestUrl: 'https://sharky-game.mikeschauber.de',
      active: true
    },
    martin_rs: {
      number: '04',
      name: 'Martin-rs.de',
      dataName: "martin_rs",
      description: 'pokedex.description',
      technologies: [3, 6, 4, 7],
      imgUrl: 'assets/img/martin-rs.png',
      githubUrl: '',
      liveTestUrl: 'https://martin-rs.de/',
      active: true
    },
    pokedex: {
      number: '05',
      name: 'Pokédex',
      dataName: "pokedex",
      description: 'pokedex.description',
      technologies: [0, 1, 2],
      imgUrl: 'assets/img/pokedex.png',
      githubUrl: 'https://github.com/MikeSchauber/Pokedex',
      liveTestUrl: 'https://mikeschauber.de/pokedex/index.html',
      active: false
    },

  };

  constructor() { }

  /**
   * Sets the project data based on the selected project and updates the current index.
   * @param project - The key of the project to set (e.g., 'join', 'sharky').
   * @param index - The index of the selected project.
   */
  setProjectDataInDialog(project: string, index: number) {
    this.currentProject = index;
    this.setProjectData(project);
  }

  /**
   * Dynamically sets the active project data using the project key.
   * @param project - The key of the project to load.
   */
  setProjectData(project: string) {
    const projectData = this.projects[project];
    if (!projectData) {
      console.warn(`Project "${project}" not found.`);
      return;
    }
    this.activeProject = {
      number: projectData.number,
      name: projectData.name,
      description: projectData.description,
      technologies: [],
      techIconUrl: [],
      imgUrl: projectData.imgUrl,
      githubUrl: projectData.githubUrl,
      liveTestUrl: projectData.liveTestUrl,
    };

    this.setTech(projectData.technologies);
  }

  /**
   * Maps technology indexes to their respective names and icons and updates the active project.
   * @param techNumbers - Array of technology indexes.
   */
  setTech(techNumbers: number[]) {
    this.activeProject.technologies = techNumbers.map(
      (number) => this.technologiesArray[number]
    );
    this.activeProject.techIconUrl = techNumbers.map(
      (number) => this.techIconArray[number]
    );
  }
}
