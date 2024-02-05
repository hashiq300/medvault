import { auth } from "@/config/firebase";
import userStore from "@/store/userStore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function GettingStartedPage() {
  const { user, isLoaded } = userStore();
  const navigate = useNavigate();
  async function handleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Handle successful sign-in
      navigate("/");
    } catch (error) {
      // Handle sign-in error
      console.error(error);
    }
  }

  useEffect(() => {
    if (isLoaded && user !== null) {
      navigate("/");
    }
  }, [user, navigate, isLoaded])

  if (user !== null) {
    return null
  }

  return (
    <main className="flex flex-col items-center  justify-between min-h-screen bg-gettingstarted object-cover px-6 pt-10 pb-8">
      <div className="space-y-[1.38rem]">
        <img
          className="block mx-auto"
          src="/images/logo-large.svg"
          alt="logo"
        />
        <h1 className="font-light text-3xl">
          Med<span className="font-medium">Vault.</span>
        </h1>
      </div>
      <div className="space-y-5">
        <h2 className="text-2.5xl font-inter">
          Welcome to your secure health hub.
        </h2>
        <button
          onClick={handleLogin}
          className="inline-flex gap-2.5 justify-center items-center bg-white text-black w-full py-5 rounded-[0.625rem] active:bg-white/90 transition-colors"
        >
          <FcGoogle size={32} />
          <span className="text-black">Sign in with Google</span>
        </button>
      </div>
    </main>
  );
}

export default GettingStartedPage;
