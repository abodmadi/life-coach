import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/state_slices/user/user_slice.js";
import GoogleAuth from "../components/GoogleAuth.jsx";

export default function SignIn() {
  const [dataForm, setDataForm] = useState({});
  const { currentUser, isLoading, error } = useSelector((state) => state.user);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handel text changes:
  const handelChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.id]: e.target.value,
    });
  };

  // Handel submit data:
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const responseBody = await response.json();
      if (responseBody.success === false) {
        dispatch(signInFailure(responseBody.message));
        return;
      }
      console.log("rr",responseBody)
      dispatch(signInSuccess(responseBody));
      console.log("nnn",currentUser);
      responseBody?.user?.role === "ADMIN"
        ? navigate("/dashboard")
        : navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  // Handel show and hide the password:
  const handelClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-slate-800 font-bold sm:text-3xl">
            Welcome Back! 👋
          </h1>

          <p className="mt-4 text-slate-500">we are glad you are here.</p>
        </div>

        <form
          onSubmit={handelSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                id="email"
                onChange={handelChange}
                className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={isHidden ? "text" : "password"}
                id="password"
                onChange={handelChange}
                className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-slate-400"
                  fill="none"
                  cursor={"pointer"}
                  onClick={handelClick}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                  {isHidden ? null : (
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  )}
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Don't have an account?
              <Link to={"/sign-up"}>
                <a className="underline font-bold"> Sign up</a>
              </Link>
            </p>

            <button
              disabled={isLoading}
              className="inline-block rounded bg-slate-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-slate-500"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </div>
          <GoogleAuth />
          <div className="text-center">
            {error && <p className="text-red-400">{error}</p>}
          </div>
        </form>
      </div>
    </>
  );
}
