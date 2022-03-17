import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contract from "./components/pages/Contract";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contract" element={<Contract />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
