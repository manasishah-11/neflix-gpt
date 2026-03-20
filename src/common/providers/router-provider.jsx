import React, { useEffect } from "react";
import Auth from "../../features/auth/components/Auth";
import { createBrowserRouter, RouterProvider } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser, unsetUser } from "../store/userSlice";
import Browse from "../../features/browse/Browse";

function AppRouterProvider() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(unsetUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
}

export default AppRouterProvider;
