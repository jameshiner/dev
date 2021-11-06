import { Heading, SimpleGrid, Center } from '@chakra-ui/react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'A* Grid Traversal',
    alt: 'A* Grid Traversal',
    img: '/img/projects/astar.png',
    gif: '/img/projects/astar.gif',
    url: 'https://jameshiner.github.io/AStarSearch/',
    sourceUrl:
      'https://github.com/jameshiner/jameshiner.github.io/tree/master/AStarSearch',
    description:
      'Agent uses the A* Search pathfinding algorithm to find the shortest path between two corners of a grid.',
  },
  {
    title: 'Smart Rockets',
    alt: 'Smart Rockets',
    img: '/img/projects/smartrockets.png',
    gif: '/img/projects/smartrockets.gif',
    url: 'https://jameshiner.github.io/SmartRockets6/',
    sourceUrl:
      'https://github.com/jameshiner/jameshiner.github.io/tree/master/SmartRockets6',
    description:
      '"Rockets" use machine learning in the form of a genetic algorithm to reach the goal destination.',
  },
  {
    title: 'Evolutionary Steering',
    alt: 'Evolutionary Steering',
    img: '/img/projects/evolutionarysteering.png',
    gif: '/img/projects/evolutionarysteering.gif',
    url: 'https://jameshiner.github.io/EvolutionarySteering/',
    sourceUrl:
      'https://github.com/jameshiner/jameshiner.github.io/tree/master/EvolutionarySteering',
    description:
      'Agents learn to survive by eating food and avoiding poison using a genetic algorithm.',
  },
  {
    title: 'Enigma Emulator',
    alt: 'Enigma Emulator',
    img: '/img/projects/enigma.png',
    gif: '/img/projects/enigma.gif',
    url: 'https://jameshiner.github.io/Enigma/',
    sourceUrl:
      'https://github.com/jameshiner/jameshiner.github.io/tree/master/Enigma',
    description:
      'Web app simulation of the machine that was used to encode messages during WW2.',
  },
  {
    title: 'Maze Generator',
    alt: 'Maze Generator',
    img: '/img/projects/maze.png',
    gif: '/img/projects/maze.gif',
    url: 'https://jameshiner.github.io/MazeGenerator/',
    sourceUrl:
      'https://github.com/jameshiner/jameshiner.github.io/tree/master/MazeGenerator',
    description:
      'Agent uses depth-first search and backtracking to traverse a grid and create a maze.',
  },
  {
    title: 'Impossible Game AI',
    alt: 'Impossible Game AI',
    img: '/img/projects/impossible.png',
    gif: '/img/projects/impossible.gif',
    url: 'https://jameshiner.github.io/Impossible/',
    sourceUrl:
      'https://github.com/jameshiner/jameshiner.github.io/tree/master/Impossible',
    description:
      'Agents attempt to complete levels of the "Impossible Game" using a genetic algorithm.',
  },
];

const renderProjects = () => {
  return projects.map((project, i) => {
    return <div key={i}>{ProjectCard(project)}</div>;
  });
};

const Projects = () => {
  return (
    <div>
      <Section delay={0.1}>
        <Center>
          <Heading pb={5}>Projects</Heading>
        </Center>
      </Section>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          {renderProjects()}
        </SimpleGrid>
      </Section>
    </div>
  );
};

export default Projects;
