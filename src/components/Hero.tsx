import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Button, VStack, HStack, useColorModeValue, Image, Flex } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { navigateAndScrollTop } from '../utils/navigation'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

const images = [
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Drone in action"
  },
  {
    src: "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Aerial view of landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Drone photography"
  }
]

const Hero = () => {
  const navigate = useNavigate()
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')
  const buttonGradient = useColorModeValue(
    'linear-gradient(135deg, blue.400 0%, purple.500 100%)',
    'linear-gradient(135deg, blue.500 0%, purple.600 100%)'
  )
  const glowColor = useColorModeValue('rgba(66, 153, 225, 0.6)', 'rgba(99, 179, 237, 0.6)')

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleContactClick = () => {
    navigateAndScrollTop(navigate, '/contact')
  }

  const handlePortfolioClick = () => {
    navigateAndScrollTop(navigate, '/portfolio')
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 5000)
    return () => clearInterval(timer)
  }, [])

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

            <HStack spacing={{ base: 3, lg: 4 }} w={{ base: '100%', lg: 'auto' }} justify={{ base: 'center', lg: 'flex-start' }}>
              <Button
                size={{ base: "md", md: "lg" }}
                onClick={handleContactClick}
                px={{ base: 4, md: 8 }}
                py={{ base: 5, md: 6 }}
                fontSize={{ base: "sm", md: "lg" }}
                bgGradient={buttonGradient}
                color="white"
                flexBasis={{ base: '50%', lg: 'auto' }}
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
                Get in Touch
              </Button>
              <Button
                size={{ base: "md", md: "lg" }}
                onClick={handlePortfolioClick}
                px={{ base: 4, md: 8 }}
                py={{ base: 5, md: 6 }}
                fontSize={{ base: "sm", md: "lg" }}
                flexBasis={{ base: '50%', lg: 'auto' }}
                bg="white"
                color="transparent"
                bgClip="text"
                bgGradient={buttonGradient}
                borderWidth="2px"
                borderColor="transparent"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  borderRadius: 'md',
                  padding: '2px',
                  bgGradient: buttonGradient,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: `0 0 20px ${glowColor}`,
                  bgGradient: 'linear-gradient(135deg, blue.500 0%, purple.600 100%)',
                  _before: {
                    bgGradient: 'linear-gradient(135deg, blue.500 0%, purple.600 100%)',
                  }
                }}
                _active={{
                  transform: 'translateY(0)',
                  bgGradient: 'linear-gradient(135deg, blue.600 0%, purple.700 100%)',
                  _before: {
                    bgGradient: 'linear-gradient(135deg, blue.600 0%, purple.700 100%)',
                  }
                }}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                View Portfolio
              </Button>
            </HStack>
          </VStack>

          {/* Right Content - Image Carousel */}
          <MotionBox
            position="relative"
            w={{ base: '100%', lg: '40%' }}
            h={{ base: '300px', lg: '500px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            mt={{ base: 8, lg: 0 }}
          >
            <AnimatePresence mode="wait">
              <MotionImage
                key={currentImageIndex}
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="xl"
                boxShadow="lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Dots Indicator */}
            <HStack
              position="absolute"
              bottom={4}
              left="50%"
              transform="translateX(-50%)"
              spacing={2}
            >
              {images.map((_, index) => (
                <Box
                  key={index}
                  w={2}
                  h={2}
                  borderRadius="full"
                  bg={index === currentImageIndex ? accentColor : "white"}
                  opacity={index === currentImageIndex ? 1 : 0.5}
                  cursor="pointer"
                  onClick={() => setCurrentImageIndex(index)}
                  transition="all 0.2s"
                  _hover={{ opacity: 1 }}
                />
              ))}
            </HStack>

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