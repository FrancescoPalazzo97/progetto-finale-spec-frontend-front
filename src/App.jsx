import { Route, Routes, BrowserRouter } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
