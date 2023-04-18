import { ToastContainer } from "react-toastify";
import Wrapper from "./components/Wrapper";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from "./utils";
import WrapperProvider from "./components/WrapperContext";
export default function App() {
  return (
    <div className="App center">
      <WrapperProvider>
        <Wrapper />
      </WrapperProvider>
      <ToastContainer {...toastOptions} />
    </div>
  );
}
