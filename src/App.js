import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </Router>
  );
};

export default App;
