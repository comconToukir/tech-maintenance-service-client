import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AddService from "../../Pages/AddService/AddService";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from './../../Layout/Main';
import SignUp from './../../Pages/SignUp/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/my-reviews"
        element={<PrivateRoute><MyReviews /></PrivateRoute>}
      />
      <Route
        path="/add-service"
        element={<PrivateRoute><AddService /></PrivateRoute>}
      />
    </Route>
  )
)

export default router;