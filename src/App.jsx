import AppRouter from "./routes/AppRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <div className=" min-h-screen max-h-screen">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthContextProvider>
    </div>
  );
}

export default App;
