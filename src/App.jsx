import "./index.css";
import { MainPage } from "./pages/main/component";
import { ThemeProvider } from "./contexts/Theme";
import { UserAuthorizationProvider } from "./contexts/UserAuthorization";
import { BlurProvider } from "./contexts/Blur";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserAuthorizationProvider>
          <BlurProvider>
            <MainPage />
          </BlurProvider>
        </UserAuthorizationProvider>
      </ThemeProvider>
    </Provider>
  );
};
