import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      React Chat App
      <Signup />

      <hr />

      <Login />
    </Layout>
  );
}

export default App;
