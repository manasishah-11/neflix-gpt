import { useState } from "react";
import AuthForm from "./AuthForm";

function Auth() {
  const [showSignInForm, setShowSignInForm] = useState(true);

  function toggleShowSignInForm() {
    setShowSignInForm((prev) => !prev);
  }

  return (
    <div className="relative h-screen w-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative h-full z-20 flex flex-col">
        <img
          src="https:help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44"
        />
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
