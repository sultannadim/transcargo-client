import React from "react";

const Blog = () => {
  return (
    <section className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-naswer-box p-4 bg-light rounded-4 mb-4">
              <h2>1. Difference between SQL and NoSQL</h2>
              <p>
                SQL databases defines and manipulates data based structured
                query language (SQL). Seeing from a side this language is
                extremely powerful. SQL is one of the most versatile and
                widely-used options available which makes it a safe choice
                especially for great complex queries. But from other side it can
                be restrictive. SQL requires you to use predefined schemas to
                determine the structure of your data before you work with it.
                Also all of your data must follow the same structure. This can
                require significant up-front preparation which means that a
                change in the structure would be both difficult and disruptive
                to your whole system. A NoSQL database has dynamic schema for
                unstructured data. Data is stored in many ways which means it
                can be document-oriented, column-oriented, graph-based or
                organized as a KeyValue store. This flexibility means that
                documents can be created without having defined structure first.
                Also each document can have its own unique structure. The syntax
                varies from database to database, and you can add fields as you
                go.
              </p>
            </div>
            <div className="single-naswer-box p-4 bg-light rounded-4 mb-4">
              <h2>2. What is JWT, and how does it work?</h2>
              <p>
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                transmitting information between parties as JSON object. It is
                compact, readable and digitally signed using a private key/ or a
                public key pair by the Identity Provider(IdP). So the integrity
                and authenticity of the token can be verified by other parties
                involved. The purpose of using JWT is not to hide data but to
                ensure the authenticity of the data. JWT is signed and encoded,
                not encrypted. JWT is a token based stateless authentication
                mechanism. Since it is a client-side based stateless session,
                server doesn't have to completely rely on a datastore(database)
                to save session information.
              </p>
            </div>
            <div className="single-naswer-box p-4 bg-light rounded-4 mb-4">
              <h2>3. What is the difference between javascript and NodeJS?</h2>
              <p>
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                transmitting information between parties as JSON object. It is
                compact, readable and digitally signed using a private key/ or a
                public key pair by the Identity Provider(IdP). So the integrity
                and authenticity of the token can be verified by other parties
                involved. The purpose of using JWT is not to hide data but to
                ensure the authenticity of the data. JWT is signed and encoded,
                not encrypted. JWT is a token based stateless authentication
                mechanism. Since it is a client-side based stateless session,
                server doesn't have to completely rely on a datastore(database)
                to save session information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
