import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast, Bounce } from "react-toastify";

export const useChatStore = create((set, get) => ({
  allContacts: [],
  chats: [],
  messages: [],
  activeTab: "chats",
  selectedUser: null,
  isUserLoading: false,
  isMessagesLoading: false,

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedUser: (user) => set({ selectedUser: user }),

  getAllContacts: async () => {
    set({ isUserLoading: true });
    try {
      const response = await axiosInstance.get("/message/contacts");
      set({ allContacts: response.data });
    } catch (error) {
        toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
        set({isUserLoading:false})
    }
  },
  getChatPartners: async() => {
    set({isUserLoading:false})
    try {
        const response = await axiosInstance.get("/message/chats");
        set({chats:response.data});
    } catch (error) {
        toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
        set({isUserLoading:false})
    }
  }
}));
