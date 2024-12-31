import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
