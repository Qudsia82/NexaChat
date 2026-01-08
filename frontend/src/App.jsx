import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
import Loader from "./components/Loader.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const { authUser, isLoading, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser);

  if (isLoading) return <Loader/>
  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#4a4e69] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-[#9a8c98] blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-[#c9ada7] blur-[100px]" />
      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/signin"
          element={!authUser ? <SignIn /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to={"/"} />}
        />
      </Routes>
          <ToastContainer />
    </div>
  );
};

export default App;
