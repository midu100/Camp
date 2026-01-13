import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import LayoutOne from './layout/LayoutOne';
import Home from './pages/Home';
import About from "./components/About";
import Vision from "./components/Vision";
import Gallery from "./components/Gallery";
import Advice from "./components/Advice";
import Contact from "./components/Contact";

function App() {
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/vision" element={<Vision/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/advice" element={<Advice/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    )
  );
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
