import React from 'react';
import { Box, Container, VStack, Text, Button, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { navigateAndScrollTop } from '../../utils/navigation';
import PortfolioCard from '../../components/PortfolioCard';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionSimpleGrid = motion(SimpleGrid);

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface PortfolioPageProps {
  category: string;
  projects: Project[];
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ category, projects }) => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');
  const buttonGradient = useColorModeValue(
    'linear-gradient(135deg, blue.400 0%, purple.500 100%)',
    'linear-gradient(135deg, blue.500 0%, purple.600 100%)'
  );
  const glowColor = useColorModeValue('rgba(66, 153, 225, 0.6)', 'rgba(99, 179, 237, 0.6)');
  const cardGradient = useColorModeValue(
    'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
    'linear-gradient(180deg, rgba(26,32,44,1) 0%, rgba(23,25,35,1) 100%)'
  );

  const handleStartProject = () => {
    navigateAndScrollTop(navigate, '/contact');
  };

  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg="white"
      position="relative"
    >
      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={{ base: 12, md: 16 }} align="center" mb={{ base: 12, md: 16 }}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text
              color={accentColor}
              fontWeight="bold"
              fontSize={{ base: "lg", md: "xl" }}
              textTransform="uppercase"
              letterSpacing="wider"
              textAlign="center"
              bgGradient={buttonGradient}
              bgClip="text"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Portfolio
            </Text>
          </MotionBox>
          <MotionHeading
            size={{ base: "2xl", md: "3xl" }}
            color={textColor}
            textAlign="center"
            maxW="800px"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {category === 'real-estate' && 'Luxury Real Estate Photography'}
            {category === 'commercial' && 'Commercial Property Videography'}
            {category === 'garden' && 'Landscape Garden Photography'}
            {category === 'mapping' && 'Property Mapping Services'}
          </MotionHeading>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue('gray.600', 'gray.300')}
            textAlign="center"
            maxW="800px"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {category === 'real-estate' && 'Explore our stunning aerial photography of luxury properties and estates.'}
            {category === 'commercial' && 'Discover our professional aerial videography services for commercial properties.'}
            {category === 'garden' && 'View our beautiful aerial photography of meticulously designed landscape gardens.'}
            {category === 'mapping' && 'Learn about our detailed aerial mapping services for property development.'}
          </MotionText>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 8, md: 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              category={project.category}
              cardGradient={cardGradient}
            />
          ))}
        </MotionSimpleGrid>

        <MotionBox
          mt={{ base: 12, md: 16 }}
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            size="lg"
            colorScheme="blue"
            onClick={handleStartProject}
            px={8}
            py={6}
            fontSize="lg"
            bgGradient={buttonGradient}
            color="white"
            _hover={{
              bgGradient: 'linear-gradient(135deg, blue.500 0%, purple.600 100%)',
              transform: 'translateY(-2px)',
              boxShadow: `0 0 20px ${glowColor}`
            }}
            _active={{
              bgGradient: 'linear-gradient(135deg, blue.600 0%, purple.700 100%)',
              transform: 'translateY(0)'
            }}
            transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
          >
            Start Your Project
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default PortfolioPage; 