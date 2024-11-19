import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayuot";
import Home from "./pages/Home";

const App = () => {

  return (
    <Routes>

      <Route path="/" element={<DefaultLayout />}>

        {/* Rotta Home */}
        <Route index element={<Home />} />

      </Route>

    </Routes>
  )

}

export default App;