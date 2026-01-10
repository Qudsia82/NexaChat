import { useAuthStore } from '../store/authStore';


function ChatPage() {
  const {signout} = useAuthStore();

  return (
    <div className='z-10'>
      <button onClick={signout}>Logout</button>
    </div>
  )
}

export default ChatPage