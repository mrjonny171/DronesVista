import { Box, Container, SimpleGrid, Stack, Text, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box as="footer" bg={bgColor} py={10}>
      <Container maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Stack spacing={4}>
            <Text fontWeight="bold" fontSize="lg">DroneVista</Text>
            <Text color={textColor}>
              Professional drone photography and videography services for properties and landscapes.
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Text fontWeight="bold">Services</Text>
            <Link as={RouterLink} to="/services?category=real-estate" color={textColor}>
              Real Estate Photography
            </Link>
            <Link as={RouterLink} to="/services?category=garden" color={textColor}>
              Garden & Landscape
            </Link>
            <Link as={RouterLink} to="/services?category=videography" color={textColor}>
              Aerial Videography
            </Link>
            <Link as={RouterLink} to="/services?category=mapping" color={textColor}>
              Property Mapping
            </Link>
          </Stack>

          <Stack spacing={4}>
            <Text fontWeight="bold">Contact</Text>
            <Text color={textColor}>Email: info@dronevista.com</Text>
            <Text color={textColor}>Phone: (555) 123-4567</Text>
            <Text color={textColor}>Address: 123 Drone Street</Text>
          </Stack>

          <Stack spacing={4}>
            <Text fontWeight="bold">Follow Us</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" color={textColor}>
                <Icon as={FaFacebook} w={6} h={6} />
              </Link>
              <Link href="#" color={textColor}>
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>
              <Link href="#" color={textColor}>
                <Icon as={FaXTwitter} w={6} h={6} />
              </Link>
              <Link href="#" color={textColor}>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderColor={textColor} mt={10} pt={6}>
          <Text textAlign="center" color={textColor}>
            © {new Date().getFullYear()} DroneVista. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 