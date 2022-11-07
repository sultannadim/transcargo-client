import React from "react";

const OurWebsite = () => {
  return (
    <section className="bg-dark py-5">
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="our-content text-light">
              <h2 className="mb-3">WELCOME TO OUR WEBSITE!</h2>
              <p>
                Transcargo makes business flow. As one of the world’s leading
                non-asset-based supply chain management companies, we design and
                implement industry-leading solutions in both freight management.
              </p>
              <p>
                Over 42,000 dedicated employees, working in 17 regional clusters
                around the globe, deliver operational excellence — to provide
                viable answers to the most challenging supply chain questions.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://logistics.stylemixthemes.com/wp-content/uploads/2015/10/video_preview.jpg"
              alt="images"
              className="img-fluid mb-lg-0 mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWebsite;
