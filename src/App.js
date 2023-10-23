import "./App.css";
import Header from "./components/Layout/Header";
import AppRouter from "./components/Navigation/Router";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <main>
        <Header />
        <AppRouter />
      </main>
    </AuthProvider>
  );
}

export default App;
