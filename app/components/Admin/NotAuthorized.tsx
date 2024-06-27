import React from "react";

const NotAuthorized = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              401
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              You are not Authorized !
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              Sorry, we cannott find that page. You will find lots to explore on
              the home page.
            </p>
            <a
              href="/"
              className="inline-flex text-slate-800 bg-primary-600 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center placeholder:2xl my-4   border-2 border-slate-800"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotAuthorized;
