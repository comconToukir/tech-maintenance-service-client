import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AddService from "../../Pages/AddService/AddService";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from './../../Layout/Main';
import SignUp from './../../Pages/SignUp/SignUp';
import ServiceDetails from './../../Pages/ServiceDetails/ServiceDetails';
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import BlogDetails from "../../Pages/Blogs/Blogs/BlogDetails/BlogDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Main />}
      errorElement={<ErrorPage />}
    >
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route
        path="/my-reviews"
        element={<PrivateRoute><MyReviews /></PrivateRoute>}
      />
      <Route
        path="/add-service"
        element={<PrivateRoute><AddService /></PrivateRoute>}
      />
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
)

export default router;