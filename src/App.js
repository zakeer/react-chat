import "./App.css";
import Header from "./components/Layout/Header";
import AppRouter from "./components/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { RoomProvider } from "./contexts/RoomContext";

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
      <main>
        <Header />
        <AppRouter />
      </main>
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;
