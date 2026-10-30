import type { StaticImageData } from 'next/image';
import astar from '../../public/img/projects/astar.png';
import enigma from '../../public/img/projects/enigma.png';
import evolutionarySteering from '../../public/img/projects/evolutionarysteering.png';
import impossible from '../../public/img/projects/impossible.png';
import maze from '../../public/img/projects/maze.png';
import smartRockets from '../../public/img/projects/smartrockets.png';

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  sourceUrl: string;
  /** Shown on the home page. */
  featured?: boolean;
};

const SOURCE = 'https://github.com/jameshiner/jameshiner.github.io/tree/master';

export const projects: Project[] = [
  {
    title: 'A* Grid Traversal',
    description:
      'A* Search pathfinding algorithm to find the shortest path between two corners of a grid.',
    image: astar,
    url: 'https://jameshiner.github.io/AStarSearch/',
    sourceUrl: `${SOURCE}/AStarSearch`,
    featured: true,
  },
  {
    title: 'Smart Rockets',
    description:
      '"Rockets" use machine learning in the form of a genetic algorithm to reach the goal destination.',
    image: smartRockets,
    url: 'https://jameshiner.github.io/SmartRockets6/',
    sourceUrl: `${SOURCE}/SmartRockets6`,
  },
  {
    title: 'Evolutionary Steering',
    description:
      'Agents learn to survive by eating food and avoiding poison using a genetic algorithm.',
    image: evolutionarySteering,
    url: 'https://jameshiner.github.io/EvolutionarySteering/',
    sourceUrl: `${SOURCE}/EvolutionarySteering`,
    featured: true,
  },
  {
    title: 'Enigma Emulator',
    description: 'Web app simulation of the machine that was used to encode messages during WW2.',
    image: enigma,
    url: 'https://jameshiner.github.io/Enigma/',
    sourceUrl: `${SOURCE}/Enigma`,
  },
  {
    title: 'Maze Generator',
    description:
      'Agent uses depth-first search and backtracking to traverse a grid and create a maze.',
    image: maze,
    url: 'https://jameshiner.github.io/MazeGenerator/',
    sourceUrl: `${SOURCE}/MazeGenerator`,
  },
  {
    title: 'Impossible Game AI',
    description:
      'Agents attempt to complete levels of the "Impossible Game" using a genetic algorithm.',
    image: impossible,
    url: 'https://jameshiner.github.io/Impossible/',
    sourceUrl: `${SOURCE}/Impossible`,
    featured: true,
  },
];
