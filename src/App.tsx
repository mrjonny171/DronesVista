import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import RealEstate from './pages/services/RealEstate'
import Videography from './pages/services/Videography'
import Mapping from './pages/services/Mapping'
import Garden from './pages/services/Garden'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box as="main" flex="1" pt="60px">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <Portfolio />
                  <Contact />
                </>
              } />
              <Route path="/services" element={<Services />} />
              <Route path="/services/real-estate" element={<RealEstate />} />
              <Route path="/services/videography" element={<Videography />} />
              <Route path="/services/mapping" element={<Mapping />} />
              <Route path="/services/garden" element={<Garden />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
