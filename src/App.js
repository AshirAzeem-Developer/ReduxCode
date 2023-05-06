import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter from './config/AppRouter';
import Store from './Redux/Store/Store';

function App() {
  return (
    <Provider store={Store}>
            <AppRouter/>
    </Provider>
    
  );
}

export default App;
