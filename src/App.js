import Container from '@mui/material/Container';
import { Header } from "./Components/Header/Header";
import { Helper } from "./Helper/Helper";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <Helper />
      <Header />
      <Container maxWidth="xl">
        <AppRouter />
      </Container>
    </>
  );
}

export default App;