import { useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { ChatIllustration } from "../components/ChatIllustration";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Loader2Icon, LockIcon, MailIcon, UserIcon } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(formData);
  };
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl md:h-[485px] rounded-xl bg-chat-dark">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="h-full md:w-1/2 p-8 flex items-center justify-center bg-chat-dark rounded-xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg"
            >
              <div className="w-full max-w-md">
                <div className="text-center flex items-center justify-center mb-8">
                  <h2 className="text-2xl font-eczar text-chat-accent mb-2">
                    Create Account
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />

                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                        className="input"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />

                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="••••••"
                      />
                    </div>
                  </div>

                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <Loader2Icon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Create account"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signin" className="auth-link text-md">
                    Already have an account? Signin
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="h-full hidden md:block md:w-1/2 p-10 items-center justify-center md:border-r rounded-r-xl bg-chat-light">
            <ChatIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
