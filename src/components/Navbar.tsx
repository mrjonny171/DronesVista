import { Box, Container, HStack, Button, IconButton, useColorModeValue, useDisclosure, VStack, CloseButton, Text } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { navigateAndScrollTop } from '../utils/navigation'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigation = (to: string) => {
    // Close mobile menu if open
    if (isOpen) {
      onClose()
    }
    // Navigate and scroll to top
    navigateAndScrollTop(navigate, to)
  }

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to
    return (
      <Button
        variant="ghost"
        color={isActive ? accentColor : textColor}
        fontWeight={isActive ? "bold" : "normal"}
        borderBottom={isActive ? `2px solid ${accentColor}` : "none"}
        _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.200') }}
        onClick={() => handleNavigation(to)}
        size="sm"
        px={3}
      >
        {children}
      </Button>
    )
  }

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={bgColor}
      boxShadow="sm"
      zIndex={1000}
      top={0}
    >
      <Container maxW="1200px">
        <HStack justify="space-between" h="60px">
          <Text
            fontSize="lg"
            fontWeight="bold"
            color={accentColor}
            _hover={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={() => handleNavigation('/')}
          >
            DroneVista
          </Text>

          {/* Desktop Navigation */}
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            icon={<FaBars />}
            variant="ghost"
            aria-label="Open menu"
            size="sm"
          />
        </HStack>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box
            display={{ base: 'block', md: 'none' }}
            position="fixed"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bg={bgColor}
            zIndex={1001}
            p={4}
          >
            <HStack justify="flex-end" mb={4}>
              <CloseButton onClick={onClose} size="sm" />
            </HStack>
            <VStack spacing={3} align="stretch">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Navbar 