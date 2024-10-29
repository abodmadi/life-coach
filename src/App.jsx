import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";
import PaymentWaysRequestForm from "./pages/RequestForms/Components/PaymentWaysRequestForm";
import RequestForms from "./pages/RequestForms/RequestForms";
import WhatsAppRequestForm from "./pages/RequestForms/Components/WhatsAppRequestForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
        <Route path="/request-form" element={<RequestForms />} >
          <Route path="payment-way" element={<PaymentWaysRequestForm/>}/>
          <Route path="whats-app" element={<WhatsAppRequestForm/>}/>
        </Route>
        <Route element={<PrivateRoute isProtectedRoute={false} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
