import "./App.css";
import Header from "./components/Layout/Header";
import AppRouter from "./components/Navigation/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { RoomProvider } from "./contexts/RoomContext";

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
        <main className="ui-page">
          <Header />
          <section className="ui-page-container">
            <AppRouter />
          </section>
        </main>
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;
