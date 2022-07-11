import {
  Accordion,
  UnorderedList,
  ListItem,
  Box,
  Container,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
// import { NAV_BG_LIGHT } from '../constants/colors';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';

const jobs = [
  {
    company: 'Square',
    role: 'Software Engineer',
    date: 'Mar 2022 – Present',
    location: 'Remote',
    bullets: [
      'Frontend Engineer on the RST Growth and Engagement Team'
    ],
  }, {
    company: 'Wellsky',
    role: 'Software Engineer III',
    date: 'Mar 2019 – Feb 2022',
    location: 'Remote',
    bullets: [
      'Designed layouts and built frontend logic to implement enhancements and bug fixes for the financial module of Wellsky’s Specialty Care Application to be pushed out at the end of each two week sprint',
      'Worked closely with backend developers and product managers to determine the best solution to implement in order to improve client experience',
      'Developed self-guided curriculum to be used during onboarding that goes over setting up a local development environment and learning ExtJS',
    ],
  },
  {
    company: 'HCS (acquired by Wellsky)',
    role: 'Frontend Web Developer',
    date: 'Oct 2017 - Mar 2019',
    location: 'Wall, NJ',
    bullets: [
      'Created/maintained options for HCS’s modern web application using ExtJS',
      'Designed and coded an online Patient Portal proof of concept deployed on a MERN stack',
      'Leveraged the JIRA and Tempo APIs to create scripts that updated data to new standards',
    ],
  },
  {
    company: 'CSols Inc.',
    role: 'Junior LIMS Consultant',
    date: 'Sept 2015 – Sept 2017',
    location: 'Newark, DE',
    bullets: [
      'Master data loading using database staging tables and SQL Transformations.',
      'Created end-user development presentation to train new employees on SampleManager LIMS',
    ],
  },
];

const About = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Image src="/img/banner.jpeg" borderRadius="lg" alt="banner"></Image>
      </Section>
      <Section delay={0.2}>
        {/* <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue(NAV_BG_LIGHT, 'whiteAlpha.100')}
        >
          Hello - I&apos;m a frontend developer currently based in New Jersey!
        </Box> */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              James Hiner
            </Heading>
            <p>Frontend Web Developer</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/img/portrait.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
      </Section>
      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Text style={{ textIndent: 20 }}></Text>
      </Section> */}
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <Accordion defaultIndex={[]} allowMultiple>
          {jobs.map((r, i) => (
            <WorkItem company={r.company} role={r.role} date={r.date} location={r.location} key={i}>
              <UnorderedList pt={1}>
                {r.bullets.map((r, i) => (
                  <ListItem key={i} pb={2}>
                    {r}
                  </ListItem>
                ))}
              </UnorderedList>
            </WorkItem>
          ))}
        </Accordion>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <Box display={{ md: 'flex' }} px={4}>
          <Box flexGrow={1}>
            <Text fontWeight="bold">University of Delaware</Text>
            <Text>Bachelor Of Science in Computer Science</Text>
          </Box>
          <Box flexShrink={0} textAlign="center">
            <Text as="i">May 2015</Text>
            <br />
            <Text as="i">Newark, DE</Text>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};

export default About;
