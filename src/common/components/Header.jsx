import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="w-screen flex justify-between pr-4">
      <img
        src="https:help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-40"
      />
      <div className="flex items-center gap-2">
        <button
          className="bg-transparent outline-none flex gap-2 items-center"
          onClick={handleSignout}
        >
          <span className="text-white text-xs">Signout</span>
          <img
            src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
            alt="user-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
