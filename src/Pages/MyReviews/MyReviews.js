import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ReviewTable from "./ReviewTable";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        autorization: `Bearear ${localStorage.getItem("cargo-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("cargo-token");
          toast.error(`something wrong. error ${res.status}`);
          return logOut();
        }
        return res.json();
      })
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  useTitle("My Reviews");
  //   delete review
  const handelDelete = (review) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this review"
    );
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error("Review Deleted");
            const remainingReviews = myReviews.filter(
              (remainingReview) => remainingReview._id !== review._id
            );
            setMyReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <section className="bg-dark py-5">
      <div className="container">
        <div className="row no-review">
          {myReviews.length <= 0 ? (
            <div className="col-lg-12 no-review d-flex align-items-center justify-content-center">
              <h1 className="text-light fw-bold">No reviews were added</h1>
            </div>
          ) : (
            myReviews.map((myReview) => (
              <ReviewTable
                key={myReview._id}
                myReview={myReview}
                handelDelete={handelDelete}
              ></ReviewTable>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MyReviews;
