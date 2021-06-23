import { BrowserRouter, Route } from 'react-router-dom';
import { Home, NewSala } from '~/pages';

export const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewSala} />
  </BrowserRouter>
);
