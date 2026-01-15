import { useRef, useState } from 'react'
import { useChatStore } from '../store/chatStore';
import { ImageIcon, SendIcon, XIcon } from 'lucide-react';

const Input = () => {

  const [text,setText] = useState("");
  const [img, setImg] = useState(null);

  const {sendMessage} = useChatStore();

  const fileInputRef = useRef();
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !img) return;

    sendMessage({
      text: text.trim(),
      image: img,
    });
    setText("");
    setImg("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImg(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImg(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  
  return (
    <div className="p-2 border-t border-chat-accent/20 bg-gradient-to-t from-chat-dark to-chat-secondary backdrop-blur-sm">
      {img && (
        <div className="max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-3 bg-chat-secondary/60 rounded-xl p-2 border border-chat-accent/30 backdrop-blur-md shadow-lg">
            <div className="relative group">
              <img
                src={img}
                alt="Preview"
                className="w-16 h-16 object-cover rounded-lg border-2 border-chat-highlight/40 shadow-md"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-chat-accent shadow-lg flex items-center justify-center text-chat-light hover:bg-chat-highlight transition-all duration-200 hover:scale-110"
                type="button"
              >
                <XIcon className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-xs text-chat-highlight font-medium"></span>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 bg-chat-secondary/60 rounded-2xl p-2 border border-chat-accent/30 backdrop-blur-md shadow-xl transition-all duration-300 focus-within:border-chat-highlight/50 focus-within:shadow-2xl">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-chat-light placeholder:text-chat-highlight/50 text-sm"
            placeholder="Type your message..."
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
              img 
                ? "bg-chat-accent text-chat-light shadow-md" 
                : "bg-chat-dark/50 text-chat-highlight/70 hover:text-chat-highlight hover:bg-chat-dark/70"
            }`}
          >
            <ImageIcon className="w-5 h-5" />
          </button>
          
          <button
            type="submit"
            disabled={!text.trim() && !img}
            className="bg-gradient-to-br from-chat-accent to-chat-highlight text-chat-light rounded-xl px-6 py-3 font-medium shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
          >
            <SendIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input
