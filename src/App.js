import logo from './logo.svg';
import './App.css';
import MainScreen from './components/MainScreen';
import { Box } from '@chakra-ui/react';
import bgImage from './images/Rectangle 9398.png'


function App() {
  return (
    <Box className="App" bgImage={bgImage} bgRepeat={'no-repeat'} backgroundSize={'100%'} height={'100vh'}>
      <Box bg="rgba(0, 0, 0, 0.5)">
      <MainScreen/>
      </Box>
    </Box>
  );
}

export default App;
