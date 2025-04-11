import { Box, Container, Heading, Text, Button, VStack, HStack, useColorModeValue, Image, Flex, List, ListItem, ListIcon, Icon } from '@chakra-ui/react'
import { FaArrowLeft, FaCheck, FaVideo, FaEdit, FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navigateAndScrollTop } from '../../utils/navigation'

const MotionBox = motion(Box)
const MotionImage = motion(Image)
const MotionText = motion(Text)
const MotionHeading = motion(Heading)

const Videography = () => {
  const navigate = useNavigate()
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const buttonGradient = useColorModeValue(
    'linear-gradient(135deg, blue.400 0%, purple.500 100%)',
    'linear-gradient(135deg, blue.500 0%, purple.600 100%)'
  )
  const glowColor = useColorModeValue('rgba(66, 153, 225, 0.6)', 'rgba(99, 179, 237, 0.6)')

  const handleBackToServices = () => {
    navigateAndScrollTop(navigate, '/services')
  }

  const features = [
    "Cinematic aerial footage for any project",
    "Smooth, professional drone movements",
    "4K high-resolution video quality",
    "Custom editing and post-production",
    "Perfect for events, properties, and marketing",
    "Licensed drone pilots with years of experience"
  ]

  const handleGetQuote = () => {
    navigateAndScrollTop(navigate, '/contact')
  }

  return (
    <Box
      as="section"
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg={useColorModeValue('gray.50', 'gray.900')}
      pt={{ base: 4, md: 6 }}
      pb={{ base: 12, md: 16 }}
    >
      <Container maxW="1200px">
        <Flex
          minH="calc(100vh - 80px)"
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
        >
          {/* Left Content */}
          <VStack
            align="start"
            spacing={{ base: 10, lg: 8 }}
            maxW={{ base: '100%', lg: '50%' }}
            textAlign="left"
            px={{ base: 4, lg: 0 }}
          >
            <Button
              leftIcon={<FaArrowLeft />}
              variant="ghost"
              onClick={handleBackToServices}
              alignSelf="flex-start"
              mb={{ base: 2, lg: 0 }}
            >
              Back to Services
            </Button>

            <VStack spacing={{ base: 6, lg: 4 }} align="start">
              <MotionText
                color={accentColor}
                fontWeight="bold"
                fontSize={{ base: "lg", md: "xl" }}
                textTransform="uppercase"
                letterSpacing="wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Aerial Videography
              </MotionText>
              <MotionHeading
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color={textColor}
                lineHeight="1.2"
                fontWeight="bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                textAlign="left"
              >
                Cinematic Aerial Videos That Tell Your Story
              </MotionHeading>
              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="600px"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                textAlign="left"
                px={{ base: 0, lg: 0 }}
              >
                Our aerial videography service provides stunning cinematic footage that captures the essence of your property, event, or project from breathtaking perspectives.
              </MotionText>
            </VStack>

            <List spacing={4} w="100%" px={{ base: 0, lg: 0 }}>
              {features.map((feature, index) => (
                <MotionListItem 
                  key={index} 
                  display="flex" 
                  alignItems="center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  justifyContent="flex-start"
                >
                  <ListIcon as={FaCheckCircle} color={accentColor} mr={3} />
                  <Text color={textColor} textAlign="left">{feature}</Text>
                </MotionListItem>
              ))}
            </List>

            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              w={{ base: '100%', lg: 'auto' }}
              px={{ base: 0, lg: 0 }}
            >
              <Button
                size="lg"
                colorScheme="blue"
                onClick={handleGetQuote}
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
          </VStack>

          {/* Right Content - Animated Image */}
          <MotionBox
            position="relative"
            w={{ base: '100%', lg: '40%' }}
            h={{ base: '300px', lg: '500px' }}
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            mt={{ base: 8, lg: 0 }}
          >
            <MotionImage
              src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Aerial Videography"
              objectFit="cover"
              w="100%"
              h="100%"
              borderRadius="xl"
              boxShadow="lg"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6,
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
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.05, 0.1]
              }}
              transition={{ 
                duration: 5,
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

const MotionListItem = motion(ListItem)

export default Videography 