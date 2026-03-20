import { Link, useNavigate } from "react-router";
import { validateAuthForm } from "../utils/validate";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../common/utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../../common/store/userSlice";

function AuthForm({ showSignInForm, toggleShowSignInForm }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const fullNameInput = useRef(null);

  const [formErrors, setFormErrors] = useState([]);
  const [submitError, setSubmitError] = useState("");

  function handleToggleShowSignInForm() {
    toggleShowSignInForm();
    setFormErrors([]);

    if (emailInput.current) emailInput.current.value = "";
    if (passwordInput.current) passwordInput.current.value = "";
    if (fullNameInput?.current) fullNameInput.current.value = "";
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const errors = validateAuthForm(
      showSignInForm,
      emailInput.current.value,
      passwordInput.current.value,
      fullNameInput?.current?.value,
    );
    if (typeof errors === "boolean" && !!errors) {
      setFormErrors([]);
      if (showSignInForm) {
        //sign in
        signInWithEmailAndPassword(
          auth,
          emailInput.current.value,
          passwordInput.current.value,
        )
          .then((userCredential) => {
            // Signed in
            navigate("/browse");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setSubmitError(errorMessage);
          });
      } else {
        //sign up
        createUserWithEmailAndPassword(
          auth,
          emailInput.current.value,
          passwordInput.current.value,
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullNameInput.current.value,
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName } = auth.currentUser;
                dispatch(setUser({ uid, email, displayName }));
                navigate("/browse");
              })
              .catch((error) => {
                const errorMessage = error.message;
                setSubmitError(errorMessage);
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setSubmitError(errorMessage);
          });
      }
    } else {
      setFormErrors(errors);
    }
  }

  return (
    <div className="bg-black/80 w-[350px] px-8 py-10 rounded-lg">
      <form onSubmit={handleFormSubmit}>
        <div className="space-y-8">
          <h1 className="text-white font-semibold text-2xl">
            {showSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="space-y-3">
            {!showSignInForm && (
              <div className="space-y-1">
                <input
                  ref={fullNameInput}
                  type="text"
                  placeholder="Full name"
                  className="w-full text-xs p-2 rounded-sm outline-none focus:scale-[1.02] focus:border-2 focus:border-white transition-transform duration-200 bg-gray-500/70 text-white placeholder:text-gray-400"
                />
                {formErrors.length > 0 && !!formErrors[2] && (
                  <p className="text-[10px] text-red-600">{formErrors[2]}</p>
                )}
              </div>
            )}
            <div className="space-y-1">
              <input
                ref={emailInput}
                type="text"
                placeholder="Email or phone number"
                className="w-full text-xs p-2 rounded-sm outline-none focus:scale-[1.02] focus:border-2 focus:border-white transition-transform duration-200 bg-gray-500/70 text-white placeholder:text-gray-400"
              />
              {formErrors.length > 0 && !!formErrors[0] && (
                <p className="text-[10px] text-red-600">{formErrors[0]}</p>
              )}
            </div>
            <div className="space-y-1">
              <input
                ref={passwordInput}
                type="password"
                placeholder="Password"
                className="w-full text-xs p-2 rounded-sm outline-none focus:scale-[1.02] focus:border-2 focus:border-white transition-transform duration-200 bg-gray-500/70 text-white placeholder:text-gray-400"
              />
              {formErrors.length > 0 && !!formErrors[1] && (
                <p className="text-[10px] text-red-600">{formErrors[1]}</p>
              )}
            </div>
          </div>
          <div className="space-y-1.5">
            {!!submitError && (
              <p className="text-xs font-medium text-red-600">{submitError}</p>
            )}
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 focus:border-2 focus:border-white text-white rounded-sm text-xs font-semibold px-3 py-2 transition-colors duration-200 w-full outline-none"
            >
              {showSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="outline-none accent-gray-500 focus:ring-2 focus:ring-white"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-400 text-[11px] cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link className="text-gray-400 text-[11px] outline-none focus:ring-2 focus:ring-white hover:underline transition-all duration-200">
                Need help?
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-xs">
            {showSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="text-white font-medium cursor-pointer hover:underline transition-all duration-200"
              onClick={handleToggleShowSignInForm}
            >
              {showSignInForm ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
