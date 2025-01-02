import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='sign-up' element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
