import { Box, Flex, Text, Icon, useColorModeValue, VStack, HStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface DiagramStepProps {
  icon: IconType
  title: string
  description: string
  isLast?: boolean
}

const DiagramStep = ({ icon, title, description, isLast = false }: DiagramStepProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('blue.200', 'blue.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('blue.500', 'blue.300')

  return (
    <Flex direction="column" align="center" position="relative" flex="1">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        bg={bgColor}
        p={6}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow="md"
        w="100%"
        maxW="300px"
        textAlign="center"
      >
        <Icon as={icon} w={10} h={10} color={accentColor} mb={4} />
        <Text fontWeight="bold" fontSize="lg" color={textColor} mb={2}>
          {title}
        </Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {description}
        </Text>
      </MotionBox>
      
      {!isLast && (
        <Box
          position="absolute"
          top="50%"
          right="-50%"
          w="100%"
          h="2px"
          bg={borderColor}
          zIndex={0}
        />
      )}
    </Flex>
  )
}

interface ServiceDiagramProps {
  steps: {
    icon: IconType
    title: string
    description: string
  }[]
}

const ServiceDiagram = ({ steps }: ServiceDiagramProps) => {
  return (
    <Flex 
      direction={{ base: "column", md: "row" }} 
      gap={8} 
      w="100%" 
      justify="space-between"
      position="relative"
    >
      {steps.map((step, index) => (
        <DiagramStep 
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </Flex>
  )
}

export default ServiceDiagram 