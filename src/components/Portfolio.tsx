import { useState } from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Image, VStack, HStack, Button, useColorModeValue, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCamera, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { navigateAndScrollTop } from '../utils/navigation'
import { keyframes } from '@emotion/react'

const MotionBox = motion(Box)
const MotionSimpleGrid = motion(SimpleGrid)
const MotionFlex = motion(Flex)
const MotionText = motion(Text)
const MotionImage = motion(Image)
const MotionHeading = motion(Heading)

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const PortfolioCard = ({ title, description, imageUrl, category }: { 
  title: string
  description: string
  imageUrl: string
  category: string
}) => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')

  const handleViewDetails = () => {
    navigateAndScrollTop(navigate, `/portfolio/${category}`)
  }

  return (
    <MotionBox
      bg={bgColor}
      borderRadius="xl"
      overflow="hidden"
      boxShadow={`0 4px 20px ${shadowColor}`}
      _hover={{ transform: 'translateY(-5px)', boxShadow: `0 8px 30px ${shadowColor}` }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box h="250px" overflow="hidden">
        <MotionImage
          src={imageUrl}
          alt={title}
          w="100%"
          h="100%"
          objectFit="cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Box>
      <VStack p={6} align="start" spacing={4}>
        <Heading size="md" color={textColor}>{title}</Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>{description}</Text>
        <Button
          variant="outline"
          colorScheme="blue"
          onClick={handleViewDetails}
          size="sm"
          rightIcon={<FaArrowRight />}
          _hover={{ transform: 'translateX(5px)' }}
          transition="all 0.2s"
        >
          View Details
        </Button>
      </VStack>
    </MotionBox>
  )
}

const Portfolio = () => {
  const navigate = useNavigate()
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')

  const handleStartProject = () => {
    navigateAndScrollTop(navigate, '/contact')
  }

  const projects = [
    {
      title: 'Luxury Real Estate',
      description: 'Aerial photography showcasing a stunning luxury property with expansive grounds.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'real-estate'
    },
    {
      title: 'Commercial Property',
      description: 'Aerial videography of a commercial property highlighting its strategic location.',
      imageUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'commercial'
    },
    {
      title: 'Landscape Garden',
      description: 'Beautiful aerial photography of a meticulously designed landscape garden.',
      imageUrl: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'garden'
    },
    {
      title: 'Property Mapping',
      description: 'Detailed aerial mapping of a large property for development planning.',
      imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      category: 'mapping'
    }
  ]

  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container maxW="1200px">
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
            >
              Our Portfolio
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
            Stunning Aerial Photography & Videography
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
            Explore our portfolio of aerial photography and videography projects showcasing properties, landscapes, and commercial spaces.
          </MotionText>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
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
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
            transition="all 0.2s"
          >
            Start Your Project
          </Button>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Portfolio 