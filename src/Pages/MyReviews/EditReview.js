import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditReview = () => {
  const router = useParams();
  const [review, setReview] = useState({});
  const { id } = router;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://server-alpha-lake.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data.data);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      review: e.target.review.value,
      rating: e.target.rating.value,
    };

    fetch(`https://server-alpha-lake.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review successfully updated!");
        navigate("/reviews");
      });
    // .catch((err) => toast.error(err.message));
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    navigate("/reviews");
  };

  return (
    <div className="container mx-auto justify-items-center max-w-4xl text-center py-6 bg-slate-200">
      
      <form onSubmit={handleSubmit} className="py-6 px-24">
        <input
          type="text"
          name="review"
          placeholder="Write your review here"
          defaultValue={review?.review}
          className="w-96 h-24 mb-4 text-center"
          required
        />
        <br />
        <input
          type="text"
          name="rating"
          className="w-96 text-center"
          placeholder="Give your rating between 0 to 5 here"
          defaultValue={review?.rating}
          required
        />
        <br />
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary mt-5 mr-3">
            Submit
          </button>
          <button
            onClick={handleCancel}
            type="submit"
            className="btn btn-secondary mt-5"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
