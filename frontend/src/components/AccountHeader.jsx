import { useState, useRef } from "react";
import { useAuthStore } from "../store/authStore.js";
import { LogOut, Camera, Loader2Icon } from "lucide-react";
const AccountHeader = () => {
  const { authUser, signout, updateProfile, isUpdatingProfile } =
    useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);
  const fileInputRef = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ userprofilepic: base64Image });
    };
  };
  return (
    <div
      className="p-6 border-b"
      style={{
        borderColor: "#4A4E69",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="relative">
            <button
              disabled={isUpdatingProfile}
              className="size-14 rounded-full relative transition-all duration-300 flex items-center justify-center disabled:opacity-60"
            >
              {isUpdatingProfile ? (
                <Loader2Icon className="w-6 h-6 animate-spin text-white z-10" />
              ) : (
                <img
                  src={selectedImg || authUser.userprofilepic || "/avatar.png"}
                  alt="User image"
                  className="size-full object-cover transition-transform duration-300 rounded-full cursor-default"
                />
              )}
            </button>

            {/* Camera icon indicator */}
            <div
              className="absolute bottom-0 right-0 size-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
              onMouseEnter={() => setIsHoveringAvatar(true)}
              onMouseLeave={() => setIsHoveringAvatar(false)}
              style={{
                backgroundColor: isHoveringAvatar ? "#C9ADA7" : "#4A4E69",
                transform: isHoveringAvatar ? "scale(1.1)" : "scale(1)",
              }}
            >
              <Camera
                className="size-3"
                onClick={() => fileInputRef.current.click()}
                style={{
                  color: "#22223B",
                }}
              />
            </div>

            {/* Online indicator */}
            <div
              className="absolute top-1 right-0 size-3 rounded-full"
              style={{
                backgroundColor: "#6a994e",
              }}
            />

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* USERNAME & ONLINE TEXT */}
          <div>
            <h3
              className="font-medium text-base max-w-[180px] truncate"
              style={{
                color: "#F2E9E4",
              }}
            >
              {authUser.username}
            </h3>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          className="p-2.5 rounded-lg transition-all duration-200 group"
          style={{
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4A4E69";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          onClick={signout}
        >
          <LogOut
            className="size-5 transition-colors duration-200"
            style={{
              color: "#9A8C98",
            }}
          />
        </button>
      </div>
    </div>
  );
};
export default AccountHeader;
