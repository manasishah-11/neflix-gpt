import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { LOGO_URL, USER_AVATAR_URL } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearchClick() {
    navigate("/search");
  }

  function handleBrowseClick() {
    navigate("/browse");
  }

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        if (location.pathname === "/") {
          navigate("/browse");
        } else {
          navigate(location.pathname);
        }
      } else {
        // User is signed out
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen flex justify-between pr-4">
      <img src={LOGO_URL} alt="logo" className="w-40" />
      <div className="flex items-center gap-2">
        {location.pathname === "/browse" ? (
          <button
            className="bg-gray-400/80 hover:bg-gray-400/70 transition-colors duration-200 outline-none px-4 py-1 rounded-md text-sm mr-2 text-white"
            onClick={handleSearchClick}
          >
            ✨ AI Search
          </button>
        ) : (
          <button
            className="bg-gray-400/80 hover:bg-gray-400/70 transition-colors duration-200 outline-none px-4 py-1 rounded-md text-sm mr-2 text-white"
            onClick={handleBrowseClick}
          >
            🌐 Browse
          </button>
        )}
        <button
          className="bg-transparent outline-none flex gap-2 items-center"
          onClick={handleSignout}
        >
          <span className="text-white text-xs">Signout</span>
          <img src={USER_AVATAR_URL} alt="user-icon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
