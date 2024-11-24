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
import DashboardHome from "./pages/Dashboard/Sections/DashboardHome/DashBoardHome";
import Chapters from "./pages/Dashboard/Sections/Chapters/Chapters";
import { useSelector } from "react-redux";
import Error from "./components/Error";
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
  const { currentUser } = useSelector((state) => state.user);
  console.log("vvvvvvv", currentUser);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {isOnline
          ? null
          : toast.error("لا يوجد اتصال بالإنترنت", {
              icon: "🌐",
              position: "top-center",
            })}
        {currentUser && currentUser.user.role === "STUDENT"}
        <Header />
        {/*<div className="m-5">
      <Breadcrumb/>
    </div> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route
            element={
              <PrivateRoute
                isProtectedRoute={!currentUser}
                to={currentUser?.user?.role === "STUDENT" ? "/" : "/dashboard"}
              />
            }
          >
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="/courses" element={<Courses />}>
            <Route path="course-details/:id" element={<CourseDetails />} />
          </Route>
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Users Routes */}
          <Route
            element={
              <PrivateRoute
                isProtectedRoute={
                  currentUser && currentUser?.user?.role === "STUDENT"
                }
                to={"/sign-in"}
              />
            }
          >
            <Route path="/request-form" element={<RequestForms />}>
              <Route path="payment-way" element={<PaymentWaysRequestForm />} />
              <Route path="whats-app" element={<WhatsAppRequestForm />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* Admin Routes */}
          <Route
            element={
              <PrivateRoute
                isProtectedRoute={
                  currentUser && currentUser?.user?.role === "ADMIN"
                }
                to={"/"}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="chapters" element={<Chapters />} />
            </Route>
          </Route>
          {/* Not Found Route */}
          <Route path="*" element={<Error code={404} title={"خطأ"} message={"لم يتم العثور على الصفحة"} />} />
        </Routes>
        <Footer />
        {currentUser && currentUser?.user?.role === "STUDENT"}
        <Toaster position="top-right" />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
