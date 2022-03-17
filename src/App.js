import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contract from "./components/pages/Contract";
import LoginReg from "./components/pages/auth/LoginReg";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contract" element={<Contract />} />
      <Route path="Login" element={<LoginReg/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
