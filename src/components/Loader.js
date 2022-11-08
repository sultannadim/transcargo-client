import React from "react";

const Loader = () => {
  return (
    <div className="bg-dark loader-spinner d-flex">
      <div className="container d-flex justify-content-center">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
