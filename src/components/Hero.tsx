import { Box, Container, Heading, Text, Button, VStack, HStack, useColorModeValue, Image, Flex } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCamera, FaVideo, FaMapMarkedAlt, FaLeaf } from 'react-icons/fa'
import { navigateAndScrollTop } from '../utils/navigation'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

const Hero = () => {
  const navigate = useNavigate()
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')

  const handleContactClick = () => {
    navigateAndScrollTop(navigate, '/contact')
  }

  const handlePortfolioClick = () => {
    navigateAndScrollTop(navigate, '/portfolio')
  }

  return (
    <Box
      as="section"
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg={useColorModeValue('gray.50', 'gray.900')}
      py={{ base: 20, lg: 0 }}
    >
      <Container maxW="1200px">
        <Flex
          minH="100vh"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 12, lg: 0 }}
        >
          {/* Left Content */}
          <VStack
            align={{ base: 'center', lg: 'start' }}
            spacing={{ base: 12, lg: 8 }}
            maxW={{ base: '100%', lg: '50%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <VStack spacing={6} align={{ base: 'center', lg: 'start' }}>
              <Text
                color={accentColor}
                fontWeight="bold"
                fontSize={{ base: "lg", md: "xl" }}
                textTransform="uppercase"
                letterSpacing="wider"
              >
                DroneVista
              </Text>
              <Heading
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color={textColor}
                lineHeight="1.2"
                fontWeight="bold"
              >
                Aerial Photography for Real Estate & Gardens
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="600px"
              >
                Professional drone photography services that showcase properties and landscapes from stunning aerial perspectives.
              </Text>
            </VStack>

            <HStack spacing={{ base: 6, lg: 4 }} w={{ base: '100%', lg: 'auto' }} justify={{ base: 'center', lg: 'flex-start' }}>
              <Button
                size="lg"
                colorScheme="blue"
                onClick={handleContactClick}
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                transition="all 0.2s"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                color={textColor}
                borderColor={textColor}
                _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.200') }}
                onClick={handlePortfolioClick}
                px={{ base: 6, lg: 8 }}
                py={{ base: 7, lg: 6 }}
                fontSize="lg"
                w={{ base: '100%', lg: 'auto' }}
              >
                View Portfolio
              </Button>
            </HStack>
          </VStack>

          {/* Right Content - Animated Drone Image */}
          <MotionBox
            position="relative"
            w={{ base: '100%', lg: '40%' }}
            h={{ base: '300px', lg: '500px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            mt={{ base: 8, lg: 0 }}
          >
            <MotionImage
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Drone"
              objectFit="cover"
              w="100%"
              h="100%"
              borderRadius="xl"
              boxShadow="lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <MotionBox
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="80%"
              h="80%"
              borderRadius="full"
              bg={accentColor}
              opacity={0.1}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.05, 0.1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero 