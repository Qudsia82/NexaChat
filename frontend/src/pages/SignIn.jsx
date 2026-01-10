import { useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import SigninIllustration from "../components/SigninIllustration.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Loader2Icon, LockIcon, MailIcon} from "lucide-react";
const SignIn = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const { signin, isSigningIn } = useAuthStore();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      signin(formData);
    };
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl md:h-[485px] rounded-xl bg-chat-accent">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="h-full md:w-1/2 p-8 flex items-center justify-center bg-chat-accent rounded-xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg"
            >
              <div className="w-full max-w-md">
                <div className="text-center flex items-center justify-center mb-8">
                  <h2 className="text-2xl font-eczar text-chat-dark mb-2">
                    Welcome back
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <div className="relative">
                      <MailIcon className="auth-login-input-icon" />

                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input-login"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <LockIcon className="auth-login-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input-login"
                        placeholder="••••••"
                      />
                    </div>
                  </div>

                  <button
                    className="auth-login-btn"
                    type="submit"
                    disabled={isSigningIn}
                  >
                    {isSigningIn ? (
                      <Loader2Icon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-login-link text-md">
                    Don't have an account? Signup
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="h-full hidden md:block md:w-1/2 items-center justify-center rounded-xl bg-chat-accent">
            <SigninIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn