import "./App.css";
import { Container } from "@mui/material";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Page1 />
      <Page2 />
    </Container>
  );
}

export default App;
