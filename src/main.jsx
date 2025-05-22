import { createRoot } from "react-dom/client";
import Navbar from "./nav";
import Example from "./home";
import Product from "./product";

createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <Example />
  </div>
);
