import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, useColorModeValue, Button } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { logger } from '../utils/logger'
import { navigateAndScrollTop } from '../utils/navigation'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionSimpleGrid = motion(SimpleGrid)

const ServiceCard = ({ title, description, imageUrl, serviceId }: { 
  title: string
  description: string
  imageUrl: string
  serviceId: string
}) => {
  const navigate = useNavigate()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')

  const handleLearnMore = () => {
    logger.info(`Navigating to service: ${serviceId}`, { serviceId })
    navigateAndScrollTop(navigate, `/services/${serviceId}`)
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
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Box h="200px" overflow="hidden">
        <MotionBox
          as="img"
          src={imageUrl}
          alt={title}
          w="100%"
          h="100%"
          objectFit="cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Box>
      <VStack p={6} align="start" spacing={4} flex="1" justify="space-between">
        <Box>
          <Heading size="md" color={textColor} mb={3}>{title}</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} minH="80px">{description}</Text>
        </Box>
        <Button
          variant="outline"
          colorScheme="blue"
          onClick={handleLearnMore}
          size="sm"
          _hover={{ transform: 'translateX(5px)' }}
          transition="all 0.2s"
          alignSelf="flex-start"
          mt="auto"
        >
          Learn More
        </Button>
      </VStack>
    </MotionBox>
  )
}

const Services = () => {
  const [searchParams] = useSearchParams()
  const servicesRef = useRef<HTMLDivElement>(null)
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')

  const services = [
    {
      title: 'Real Estate Photography',
      description: 'Stunning aerial views of properties that showcase their full potential and surroundings.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      serviceId: 'real-estate'
    },
    {
      title: 'Aerial Videography',
      description: 'Cinematic aerial footage for real estate, events, and commercial projects.',
      imageUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      serviceId: 'videography'
    },
    {
      title: 'Property Mapping',
      description: 'Detailed aerial mapping for construction, agriculture, and land development.',
      imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      serviceId: 'mapping'
    },
    {
      title: 'Garden & Landscape',
      description: 'Beautiful aerial photography of gardens and landscapes to showcase their natural beauty.',
      imageUrl: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      serviceId: 'garden'
    }
  ]

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && servicesRef.current) {
      const element = document.getElementById(category)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 500)
      }
    }
  }, [searchParams])

  logger.debug('Services component rendered', { servicesCount: services.length })

  return (
    <Box
      as="section"
      py={{ base: 16, md: 20 }}
      bg={useColorModeValue('gray.50', 'gray.900')}
      ref={servicesRef}
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
              Our Services
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
            Professional Aerial Photography & Videography Services
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
            We offer a range of aerial photography and videography services to help you capture stunning perspectives from above.
          </MotionText>
        </VStack>

        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 8, md: 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              serviceId={service.serviceId}
            />
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  )
}

export default Services 