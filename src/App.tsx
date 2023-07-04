import { BrowserRouter } from "react-router-dom";
import { AppThemeContext, DrawerProvider } from "./shared/context";
import { MenuTop } from "./shared/components";
import { AppRouter } from "./routes";
import {Box} from "@mui/material"

function App() {
  return (
    <AppThemeContext>
      <DrawerProvider>
        <BrowserRouter>
          <MenuTop>
            <AppRouter/>
          </MenuTop>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeContext>
  );
}

export default App;
