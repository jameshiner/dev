import {
  Accordion,
  UnorderedList,
  ListItem,
  Box,
  Container,
  Heading,
  Text,
  Image,
  Tag,
  WrapItem,
  Flex,
  Wrap,
} from '@chakra-ui/react';
import Section from '../components/Section';
import WorkItem from '../components/WorkItem';
import { JOBS, SKILLS } from '../data';

const About = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Image src="/img/banner.jpeg" borderRadius="lg" alt="banner"></Image>
      </Section>
      <Section delay={0.2}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              James Hiner
            </Heading>
            <p>Frontend Web Developer</p>
            <p>Denver, CO</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
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
        <Text style={{ textIndent: 20 }}>Hello, I'm JJ.</Text>
      </Section> */}
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <Accordion defaultIndex={[]} allowMultiple>
          {JOBS.map((job, i) => (
            <WorkItem
              company={job.company}
              role={job.role}
              date={job.date}
              location={job.location}
              key={i}
            >
              <UnorderedList pt={1}>
                {job.bullets.map((bullet, i) => (
                  <ListItem key={i} pb={2}>
                    {bullet}
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
        <Box display={{ md: 'flex' }} pl={4} pr={6}>
          <Box flexGrow={1}>
            <Text fontWeight="bold">University of Delaware</Text>
            <Text>Bachelor Of Science in Computer Science</Text>
          </Box>
          <Box flexShrink={0} textAlign="right">
            <Text as="i">May 2015</Text>
            <br />
            <Text as="i">Newark, DE</Text>
          </Box>
        </Box>
      </Section>
      <Section delay={0.6}>
        <Heading variant="section-title" pb={3}>
          Languages & Technologies
        </Heading>
        <Wrap spacing={2} justify="flex-start" wrap={true}>
          {SKILLS.map((skill) => (
            <WrapItem>
              <Flex>
                <Tag size={'md'} variant={'solid'} colorScheme={skill.color}>
                  {skill.value}
                </Tag>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </Section>
    </Container>
  );
};

export default About;
