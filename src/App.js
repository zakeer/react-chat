import "./App.css";
import Header from "./components/Layout/Header";
import AppRouter from "./services/Router";

function App() {
  return (
    <main>
      <Header />
      <AppRouter />
    </main>
  );
}

export default App;
