import React from "react";
import ourProduct from "@/public/img/category/trolly.jpg";
import Image from "next/image";
import Container from "../components/Container";
import Link from "next/link";
import Head from "next/head";
import image1 from "@/public/img/about-us/WhatsApp Image 2024-07-02 at 22.07.28_07938457.jpg";
import image2 from "@/public/img/about-us/WhatsApp Image 2024-07-02 at 22.07.30_062653af.jpg";
import image3 from "@/public/img/about-us/WhatsApp Image 2024-07-02 at 22.07.30_9d6acab6.jpg";
import image4 from "@/public/img/about-us/WhatsApp Image 2024-07-02 at 22.07.31_09e99f4b.jpg";
import image5 from "@/public/img/about-us/WhatsApp Image 2024-07-02 at 22.07.31_0b46708f.jpg";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Head>About Us -Bait Al Kuwait</Head>
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
                src={image1}
                alt="Our Story"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <Image
                src={image2}
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
                src={image3}
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

          <div>
            <Image
              src={image4}
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Image
              src={image5}
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="text-justify">
            <h2 className="text-xl  my-4">
              You can contact us{" "}
              <Link
                href={"/contact-us"}
                className="underline text-blue-700 cursor-pointer"
              >
                here
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
