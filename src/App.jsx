import { Header } from "./Components/header";
import {Form} from "./Components/form.jsx"
import { createRoot } from "react-dom/client";
import App from "./practice";

const root = createRoot(document.getElementById("root"))

root.render(
  <>
  <Header />
  <Form/> 
  {/* <App/> */}
  
  </>
)