import Container from "../components/Container";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <Container>
      <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 ">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-800 dark:text-slate-800">
                Got a technical issue? Need details about our Business plan? Let
                us know.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-slate-800 dark:text-slate-800">
                  Bait Al Kuwait is a company specializing in non-food products
                  for central markets. It is located in Shuwaikh Industrial,
                  Kuwait,The company emphasizes quality and customer service in
                  its offerings.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-200 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-black">
                        Our Address
                      </h3>
                      <p className="text-slate-800 dark:text-slate-800">
                        Capital-Shuwaikh industrial
                      </p>
                      <p className="text-slate-800 dark:text-slate-800">
                        (3)-Block (C) Street (33)-Plot (250)
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-200 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-black ">
                        Contact
                      </h3>
                      <p className="text-slate-800 dark:text-slate-800">
                        Phone: (+965) 24910311 | (+965) 50700785 - 50996106
                      </p>
                      <p className="text-slate-800 dark:text-slate-800">
                        Mail: info@baitalkwt.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-200 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-black ">
                        Bait Al Kuwait
                      </h3>
                      <p className="text-slate-800 dark:text-slate-800">
                        Unit No (25) - P.O.Box : 34536
                      </p>
                      <p className="text-slate-800 dark:text-slate-800">
                        Post Code : 73256 - Kuwait
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-black">
                  Ready to Get Started?
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
