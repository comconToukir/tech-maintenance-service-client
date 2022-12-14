import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Spinner from "../../Shared/Spinner/Spinner";
import AddReview from "../AddReview/AddReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import ErrorPage from './../../ErrorPage/ErrorPage';

const ServiceReviews = ({ id, serviceName }) => {
  const { isLoading, data, isError } = useQuery([`reviews-${id}`], () => {
    return axios.get(`https://service-review-server-side-omega.vercel.app/reviews/${id}`);
  });

  if (!!isLoading) return <Spinner />;

  if (!!isError) return <ErrorPage />;

  const reviews = data.data;

  return (
    <div className="mt-16">
      <h2 className="text-2xl border-b-2 border-base-100 pb-3">All Reviews</h2>
      <AddReview id={id} serviceName={serviceName} />
      {reviews.length === 0 ? (
        "No reviews found"
      ) : (
        <>
          {reviews.map((reviewData) => (
            <ReviewCard key={reviewData._id} reviewData={reviewData} />
          ))}
        </>
      )}
    </div>
  );
};

export default ServiceReviews;
