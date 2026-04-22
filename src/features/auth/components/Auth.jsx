import { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router";
import { LOGO_URL } from "../../../common/utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../common/utils/firebase";

function Auth() {
  const navigate = useNavigate();

  const [showSignInForm, setShowSignInForm] = useState(true);

  function toggleShowSignInForm() {
    setShowSignInForm((prev) => !prev);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative h-screen w-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative h-full z-20 flex flex-col">
        <img src={LOGO_URL} alt="logo" className="w-44" />
        <div className="flex-1 flex justify-center items-center">
          <AuthForm
            showSignInForm={showSignInForm}
            toggleShowSignInForm={toggleShowSignInForm}
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;
