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
import logo from "../../public/img/about-us/logo new.jpg";
import aboutUs from "../../public/img/about-us/About us New.png";
import location from "../../public/img/about-us/location-icon.png";
import products from "../../public/img/bannern1.png";
import contact from "../../public/img/about-us/contact-icon.png";
import Card from "./Card";

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Bait Al Kuwait</title>
      </Head>
      <div>
        {/* <div className="container mx-auto max-w-7xl"> */}
        <div>
          <div>
            <Image src={aboutUs} alt="About Us" />
          </div>
          <div
            className=" flex flex-col bg-grey"
            style={{ margin: "20px 10px" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Who are We
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <Card
                title="Our Story"
                imageSrc={logo.src}
                content="Bait al Kuwait was founded with the vision of creating a cleaner, healthier environment for everyone. What began as a small venture has grown into a leading supplier of cleaning products in the region. Our commitment to excellence and customer satisfaction has driven our growth and continues to inspire us every day."
              />
              <Card
                title=" Location"
                imageSrc={location.src}
                content="Discover our sole store, conveniently situated in the heart of Kuwait. Our location at Street 33, Plot 250, Unit 25, Shuwaikh Industrial 3, Block C is designed to provide you with easy access to all our products. Visit us at 73256 Kuwait for exceptional service and quality."
              />
              <Card
                title="Products & Services"
                content="Shop eco-friendly and top-brand cleaning solutions for home and commercial needs, available in-store and online."
                imageSrc={products.src}
              />
              <Card
                title="Contact and Help"
                content="If you have a question about Bait al Kuwaitor a shopping experience, please visit baitalkwt.com/contact-us to reach the right team."
                imageSrc={contact.src}
                // link="router.push("/about-us")"
              />
            </div>
          </div>
          <div className="flex  items-center text-center p-5 bg-gray-50 rounded-lg">
            <Image
              src={aboutUs}
              alt="About Us"
              className="max-w-full h-auto rounded-lg mb-4"
              width={500}
              height={300}
            />

            <div className="ml-10 text-left">
              <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-5 text-lg space-y-2">
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
          </div>

          <div className="flex flex-col m-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Our Commitment
            </h2>
            <p className="text-lg">
              At Bait al Kuwait, we believe in the power of clean. A clean
              environment not only enhances the aesthetic appeal but also
              promotes health and well-being. We are dedicated to helping you
              achieve and maintain this standard of cleanliness with our
              superior products and services.
            </p>
            <div className="flex justify-between mt-6">
              <Image
                src={image1}
                alt="Image1"
                className="max-w-full h-auto rounded-lg mb-4"
                width={500}
                height={200}
              />
              <Image
                src={image2}
                alt="Image2"
                className="max-w-full h-auto rounded-lg mb-4"
                width={500}
                height={200}
              />
              <Image
                src={image3}
                alt="Image3"
                className="max-w-full h-auto rounded-lg mb-4"
                width={500}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
