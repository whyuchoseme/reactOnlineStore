import { MainPage } from "./pages/main/component";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme";
import { BlurProvider } from "./contexts/Blur";

export const App = () => {
  return (
    <ThemeProvider>
      <BlurProvider>
        <MainPage />
      </BlurProvider>
    </ThemeProvider>
  );
};
