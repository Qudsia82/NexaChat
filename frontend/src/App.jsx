import { Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return(
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#3a5a40] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-[#588157] blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-[#a3b18a] blur-[100px]" />
    <Routes>
      <Route path="/" element={<ChatPage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
  )
};

export default App;
