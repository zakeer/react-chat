import "./App.css";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";
import AppRouter from "./components/Router";

function App() {
  return (
    <main>
      <Header />
      <AppRouter />
      <Modal/>
    </main>
  );
}

export default App;
