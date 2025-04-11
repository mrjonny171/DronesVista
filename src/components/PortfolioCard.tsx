import React from 'react';
import { Box, Image, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { navigateAndScrollTop } from '../utils/navigation';

const MotionBox = motion(Box);

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  cardGradient: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  category,
  cardGradient 
}) => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonGradient = useColorModeValue(
    'linear-gradient(135deg, blue.400 0%, purple.500 100%)',
    'linear-gradient(135deg, blue.500 0%, purple.600 100%)'
  );
  const glowColor = useColorModeValue('rgba(66, 153, 225, 0.6)', 'rgba(99, 179, 237, 0.6)');

  const handleViewDetails = () => {
    navigateAndScrollTop(navigate, `/portfolio/${category}`);
  };

  return (
    <Box
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
  );
};

export default PortfolioCard; 