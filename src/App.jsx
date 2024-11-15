import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Courses from "./pages/Courses/Courses";
import AdminCourses from "./pages/Dashboard/Sections/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";
import PaymentWaysRequestForm from "./pages/RequestForms/Components/PaymentWaysRequestForm";
import RequestForms from "./pages/RequestForms/RequestForms";
import WhatsAppRequestForm from "./pages/RequestForms/Components/WhatsAppRequestForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import DashBoardHome from "./pages/Dashboard/Sections/DashBoardHome/DashBoardHome";
import Chapters from "./pages/Dashboard/Sections/Chapters/Chapters";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const queryClient = new QueryClient();
  function handleOnline() {
    setIsOnline(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOnline);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {isOnline
          ? null
          : toast.error("لا يوجد اتصال بالإنترنت", {
              icon: "🌐",
              position: "top-center",
            })}
        {/*  <Header /> */}
        {/*<div className="m-5">
      <Breadcrumb/>
    </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="course-details/:id" element={<CourseDetails />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/request-form" element={<RequestForms />}>
            <Route path="payment-way" element={<PaymentWaysRequestForm />} />
            <Route path="whats-app" element={<WhatsAppRequestForm />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashBoardHome />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="chapters" element={<Chapters />} />
          </Route>
          <Route element={<PrivateRoute isProtectedRoute={false} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
        <Toaster position="top-right" />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
