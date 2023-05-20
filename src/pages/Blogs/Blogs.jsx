const BlogPage = () => {
  return (
    <div className="blogs m-5">
      <div className="blog">
        <h2 className="mb-4">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p>
          A Web Token is a common type of access token that is used for
          authentication and authorization. It allows usage of restricted
          resources on an API. Refresh tokens are durable tokens that can be
          used to get fresh access tokens without having to reauthenticate the
          user.
        </p>
        <p>
          Access tokens are often temporary and kept locally by the client,
          frequently in memory or local storage. Access tokens kept locally,
          however, may be subject to cross-site scripting (XSS) attacks. Tokens
          for refreshes should be securely saved, perhaps in an HTTP-only
          cookie.
        </p>
      </div>

      <div className="blog">
        <h2 className="mb-4">Compare SQL and NoSQL databases?</h2>
        <p>
          SQL (Structured Query Language) databases employ tables with rows and
          columns and are based on a structured schema. They also contain
          predefined schemas. They support sophisticated queries and have great
          consistency, although they can be less versatile.
        </p>
        <p>
          Contrarily, NoSQL databases either lack or have flexible schemas. They
          are made to deal with semi- or unstructured data. High levels of
          scalability, availability, and performance are provided by NoSQL
          databases, however, some consistency guarantees may be lost.
        </p>
      </div>

      <div className="blog">
        <h2 className="mb-4">What is Express.js? What is Nest.js?</h2>
        <p>
          A well-liked web application framework for Node.js is called
          Express.js. It offers a straightforward and condensed method for
          creating web servers and APIs. Express.js is renowned for its
          adaptability, ecosystem of middleware, and simplicity of usage.
        </p>
        <p>
          Built on top of Node.js, Nest.js is a progressive, TypeScript-based
          online application framework. It leverages decorators, dependency
          injection, and other concepts from object-oriented programming and is
          greatly influenced by Angular. Modularity, extensibility, and
          maintainability are the key emphasis of Nest.js.
        </p>
      </div>

      <div className="blog">
        <h2 className="mb-4">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          A strong framework for carrying out data aggregation operations is
          MongoDB aggregate. It enables you to use a pipeline of phases to
          process and convert data.
        </p>
        <p>
          There are numerous phases in the aggregate pipeline, including $match,
          $group, $project, $sort, etc. The data is subjected to a certain
          operation at each stage, and the output from one stage serves as the
          input for the stage after it.
        </p>
        <p>
          You can carry out complicated queries, filtering, grouping, sorting,
          joining, and other operations by connecting and combining these steps.
          Data retrieval and analysis from MongoDB are made flexible and
          effective by the aggregate framework.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
