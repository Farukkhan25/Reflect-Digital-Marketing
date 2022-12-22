import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  useTitle("My Reviews");
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`https://server-alpha-lake.vercel.app/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`https://server-alpha-lake.vercel.app/myreviews/${id}`, {
        method: "DELETE",
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("reflect-token")}`,
        //   },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Successfully deleted!");
          const remaining = myReviews.filter((rev) => rev._id !== id);
          setMyReviews(remaining);
        });
    }
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/myreview/edit/${id}`);
  };

  return (
    <div className="container text-center py-5">
      <h1>My Reviews</h1>
      <h3>My total reviews: {myReviews.length}</h3>
      <div className="container mx-auto my-5 py-16 max-w-4xl bg-base-100">
        {myReviews.length > 0 ? (
          <>
            {myReviews.map((myReview) => (
              <MyReviewsCard
                key={myReview.id}
                myReview={myReview}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              ></MyReviewsCard>
            ))}
          </>
        ) : (
          "No review were added."
        )}
      </div>
    </div>
  );
};

export default MyReviews;
