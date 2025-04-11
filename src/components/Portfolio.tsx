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

const PortfolioCard = ({ title, description, imageUrl, category, cardGradient }: { 
  title: string
  description: string
  imageUrl: string
  category: string
  cardGradient: string
}) => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')
  const buttonGradient = useColorModeValue(
    'linear-gradient(135deg, blue.400 0%, purple.500 100%)',
    'linear-gradient(135deg, blue.500 0%, purple.600 100%)'
  )
  const glowColor = useColorModeValue('rgba(66, 153, 225, 0.6)', 'rgba(99, 179, 237, 0.6)')

  const handleViewDetails = () => {
    navigateAndScrollTop(navigate, `/portfolio/${category}`)
  }

  return (
    <Box
      key={category}
      p={6}
      borderRadius="xl"
      bgGradient={cardGradient}
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      h="100%"
      display="flex"
      flexDirection="column"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: useColorModeValue(
          'radial-gradient(circle at 20% 20%, rgba(66, 153, 225, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(159, 122, 234, 0.05) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 20%, rgba(66, 153, 225, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(159, 122, 234, 0.1) 0%, transparent 50%)'
        ),
        zIndex: 0,
      }}
    >
      <Box flex="1" position="relative" zIndex={1}>
        <Image
          src={imageUrl}
          alt={title}
          borderRadius="lg"
          mb={4}
          objectFit="cover"
          w="100%"
          h="200px"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.02)',
          }}
        />
        <Heading size="lg" mb={4} color={textColor}>
          {title}
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')} mb={6}>
          {description}
        </Text>
      </Box>
      <Button
        onClick={handleViewDetails}
        size="sm"
        alignSelf="flex-start"
        mt="auto"
        bgGradient={buttonGradient}
        color="white"
        _hover={{
          bgGradient: 'linear-gradient(135deg, blue.500 0%, purple.600 100%)',
          transform: 'translateX(5px)',
          boxShadow: `0 0 15px ${glowColor}`,
          opacity: 0.9
        }}
        _active={{
          bgGradient: 'linear-gradient(135deg, blue.600 0%, purple.700 100%)',
          transform: 'translateX(0)'
        }}
        transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
        position="relative"
        zIndex={1}
      >
        View Details
      </Button>
    </Box>
  )
}

const Portfolio = () => {
  const navigate = useNavigate()
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const buttonGradient = useColorModeValue(
    'linear-gradient(135deg, blue.400 0%, purple.500 100%)',
    'linear-gradient(135deg, blue.500 0%, purple.600 100%)'
  )
  const glowColor = useColorModeValue('rgba(66, 153, 225, 0.6)', 'rgba(99, 179, 237, 0.6)')
  const cardGradient = useColorModeValue(
    'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
    'linear-gradient(180deg, rgba(26,32,44,1) 0%, rgba(23,25,35,1) 100%)'
  )
  const sectionGradient = useColorModeValue(
    'linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 50%, #E0F2FE 100%)',
    'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1E3A8A 100%)'
  )

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
            Get a Quote
          </Button>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Portfolio 