import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import { GamesProvider } from "./contexts/products/GamesContext";
import { DefaultLayout, GamesLayout } from "./layout";
import Homepage from "./pages/Homepage";
import GameDetails from "./pages/GameDetails";
import Compare from "./pages/Compare";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={
            <GamesProvider>
              <GamesLayout />
            </GamesProvider>
          }>
            <Route index Component={Homepage} />
            <Route path="/game/:id" Component={GameDetails} />
            <Route path="/compare" Component={Compare} />
            <Route path="/favorites" Component={Favorites} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
