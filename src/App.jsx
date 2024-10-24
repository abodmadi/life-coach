import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Courses from "./pages/Courses/Courses";
import Sessions from "./pages/Sessions";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import NotFound from "./pages/NotFound";
//import Advertisement from "./pages/Advertisement/Advertisement";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";
import CompaniesForm from "./components/CompaniesForm";
//import Breadcrumb from './components/Breadcrumb'

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
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/form-data" element={<CompaniesForm />} />
        <Route path="course-details/:id" element={<CourseDetails />} />
        <Route element={<PrivateRoute isProtectedRoute={false} />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />}>
            <Route path="sessions" element={<Sessions />} />
          </Route>
        </Route>
        {/* <Route index element={<Advertisement/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
