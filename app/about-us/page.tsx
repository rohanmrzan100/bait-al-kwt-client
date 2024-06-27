import React from "react";
import ourProduct from "@/public/img/category/trolly.jpg";
import Image from "next/image";
import Container from "../components/Container";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <div className="py-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Welcome to <strong>Bait al Kuwait</strong>, your one-stop
            destination for all your cleaning product needs. We pride ourselves
            on being a comprehensive supplier, dedicated to providing
            high-quality cleaning solutions for both residential and commercial
            spaces. Our mission is to make every home and workplace sparkle with
            cleanliness and hygiene.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-lg">
                Bait al Kuwait was founded with the vision of creating a
                cleaner, healthier environment for everyone. What began as a
                small venture has grown into a leading supplier of cleaning
                products in the region. Our commitment to excellence and
                customer satisfaction has driven our growth and continues to
                inspire us every day.
              </p>
            </div>
            <div>
              <Image
                src={ourProduct}
                alt="Our Story"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <Image
                src={ourProduct}
                alt="Our Products"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>
                  <strong>Household Cleaners</strong>: From kitchen and bathroom
                  cleaners to floor and window solutions, we have everything you
                  need to keep your home spotless.
                </li>
                <li>
                  <strong>Commercial Cleaning Supplies</strong>:
                  High-performance products designed for office buildings,
                  schools, hospitals, and other commercial spaces.
                </li>
                <li>
                  <strong>Eco-Friendly Options</strong>: We are committed to
                  sustainability and offer a variety of eco-friendly cleaning
                  products that are safe for both you and the environment.
                </li>
                <li>
                  <strong>Specialty Items</strong>: Including industrial-grade
                  cleaners, sanitizers, and more.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>
                  <strong>Quality Assurance</strong>: We source our products
                  from trusted manufacturers to ensure top-notch quality and
                  effectiveness.
                </li>
                <li>
                  <strong>Competitive Pricing</strong>: Our goal is to provide
                  excellent products at affordable prices, making top-tier
                  cleaning solutions accessible to all.
                </li>
                <li>
                  <strong>Exceptional Customer Service</strong>: Our team is
                  always ready to assist you with any questions or concerns. We
                  believe in building long-term relationships with our customers
                  through trust and reliability.
                </li>
                <li>
                  <strong>Fast and Reliable Delivery</strong>: We understand the
                  importance of timely deliveries and strive to get your orders
                  to you as quickly as possible.
                </li>
              </ul>
            </div>
            <div>
              <Image
                src={ourProduct}
                alt="Why Choose Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="text-justify mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-lg mx-auto">
              At Bait al Kuwait, we believe in the power of clean. A clean
              environment not only enhances the aesthetic appeal but also
              promotes health and well-being. We are dedicated to helping you
              achieve and maintain this standard of cleanliness with our
              superior products and services.
            </p>
          </div>

          <div className="text-justify">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg mb-2">
              We love hearing from our customers! Whether you have a question,
              need assistance, or want to provide feedback, feel free to reach
              out to us.
            </p>
            <p className="text-lg mb-2">
              <strong>Email</strong>:{" "}
              <a
                href="mailto:support@baitalkuwait.com"
                className="text-blue-500 hover:text-blue-700"
              >
                support@baitalkuwait.com
              </a>
            </p>
            <p className="text-lg mb-2">
              <strong>Phone</strong>: +965 1234 5678
            </p>
            <p className="text-lg mb-2">
              <strong>Address</strong>: 123 Clean Street, Kuwait City, Kuwait
            </p>
            <p className="text-lg mt-6">
              Thank you for choosing Bait al Kuwait. Together, lets create a
              cleaner, healthier world.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
