import { MainPage } from "./pages/main/component";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme";
import { BlurProvider } from "./contexts/Blur";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BlurProvider>
          <MainPage />
        </BlurProvider>
      </ThemeProvider>
    </Provider>
  );
};
