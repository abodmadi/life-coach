import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
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
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
//import Advertisement from "./pages/Advertisement/Advertisement";
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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/courses" element={<Courses />} />
        <Route element={<PrivateRoute isProtectedRoute={false} />}>
          <Route path="/about" element={<About />} />
          
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />}>
            
            <Route path="sessions" element={<Sessions />} />
            <Route path="course-details/:id" element={<CourseDetails />} />
          </Route>
        </Route>
        {/* <Route index element={<Advertisement/>} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
