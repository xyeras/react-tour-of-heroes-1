import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppRouter />
      </Router>
    </GlobalProvider>
  );
};

export default App;
