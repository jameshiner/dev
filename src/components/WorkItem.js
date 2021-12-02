import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';

const WorkItem = ({ company, role, location, date, children }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Text fontWeight="bold">{role}</Text>
            <Text>{company}</Text>
          </Box>
          <Box textAlign="right" pr={5}>
            <Text as="i">{date}</Text>
            <br />
            <Text as="i">{location}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} pl={5}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default WorkItem;
