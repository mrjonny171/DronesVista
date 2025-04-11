import { Box, Container, Heading, Text, VStack, HStack, Input, Textarea, Button, useColorModeValue, Icon, SimpleGrid, Flex, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { logger } from '../utils/logger'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionText = motion(Text)

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const iconBg = useColorModeValue('blue.50', 'blue.900')
  const iconColor = useColorModeValue('blue.500', 'blue.300')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const inputBg = useColorModeValue('white', 'gray.700')

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@dronevista.com',
      link: 'mailto:info@dronevista.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#'
    }
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    logger.debug('Form submission attempted', { formData })
    
    if (!validateForm()) {
      logger.warn('Form validation failed', { errors })
      return
    }

    setIsSubmitting(true)
    logger.info('Submitting contact form', { formData })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      logger.info('Form submitted successfully')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (error) {
      logger.error('Form submission failed', { error })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <Box
      as="section"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      bg={useColorModeValue('gray.50', 'gray.900')}
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={useColorModeValue('blue.100', 'blue.900')}
        opacity="0.3"
        filter="blur(60px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <MotionBox
        position="absolute"
        bottom="10%"
        left="5%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg={useColorModeValue('purple.100', 'purple.900')}
        opacity="0.3"
        filter="blur(60px)"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container maxW="1200px" h="100%">
        <VStack spacing={12} align="center" justify="center" h="100%">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            w="100%"
          >
            <Text
              color={accentColor}
              fontWeight="bold"
              fontSize="lg"
              mb={2}
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Get in Touch
            </Text>
            <Heading
              size="2xl"
              color={textColor}
              mb={4}
            >
              Contact Us
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue('gray.600', 'gray.400')}
              maxW="2xl"
              mx="auto"
              mb={8}
            >
              Ready to capture your property from above? Contact us today to discuss your project
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                as="form"
                onSubmit={handleSubmit}
                p={8}
                bg={bgColor}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="xl"
              >
                <VStack spacing={6}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      size="lg"
                      bg={inputBg}
                      _hover={{ borderColor: accentColor }}
                      _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      size="lg"
                      bg={inputBg}
                      _hover={{ borderColor: accentColor }}
                      _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone (optional)</FormLabel>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      size="lg"
                      bg={inputBg}
                      _hover={{ borderColor: accentColor }}
                      _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                    />
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      size="lg"
                      minH="150px"
                      bg={inputBg}
                      _hover={{ borderColor: accentColor }}
                      _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="100%"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    rightIcon={<FaArrowRight />}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </MotionBox>

            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <VStack spacing={8} align="start">
                {contactInfo.map((info, index) => (
                  <MotionBox
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    w="100%"
                  >
                    <Box
                      p={6}
                      bg={bgColor}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="lg"
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                      transition="all 0.2s"
                    >
                      <HStack spacing={4}>
                        <Box
                          p={3}
                          bg={iconBg}
                          borderRadius="lg"
                        >
                          <Icon as={info.icon} boxSize={6} color={iconColor} />
                        </Box>
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="bold" color={textColor}>
                            {info.title}
                          </Text>
                          <Text
                            color={useColorModeValue('gray.600', 'gray.400')}
                            as="a"
                            href={info.link}
                            _hover={{ color: accentColor }}
                          >
                            {info.content}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  </MotionBox>
                ))}

                {/* Additional Information */}
                <Box
                  p={6}
                  bg={bgColor}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor={borderColor}
                  boxShadow="lg"
                  w="100%"
                >
                  <VStack align="start" spacing={4}>
                    <Heading size="md" color={textColor}>
                      Office Hours
                    </Heading>
                    <VStack align="start" spacing={2}>
                      <Text color={useColorModeValue('gray.600', 'gray.400')}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </Text>
                      <Text color={useColorModeValue('gray.600', 'gray.400')}>
                        Saturday: 10:00 AM - 4:00 PM
                      </Text>
                      <Text color={useColorModeValue('gray.600', 'gray.400')}>
                        Sunday: Closed
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 