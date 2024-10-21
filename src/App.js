import About from './About';
import './App.css';
import Home from './Home';
import Layout from './Layout';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Layout >

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  );
}

export default App;
