import { BrowserRouter, Route } from 'react-router-dom';
import { Home, NewSala } from '~/pages';
import { AuthContextProvider } from './contexts/AuthContext';

export const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Route path="/rooms/new" component={NewSala} />
      <Route path="/" exact component={Home} />
    </AuthContextProvider>
  </BrowserRouter>
);
