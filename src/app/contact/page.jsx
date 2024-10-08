import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="m-6 border-4 border-blue-700 text-blue-700 py-8 rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            We're here to help! Get in touch with us through any of the methods below.
          </p>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="container mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Card 1: Phone */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaPhoneAlt className="text-blue-700 text-6xl mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Phone</h4>
            <p className="text-lg">+1 (234) 567-8901</p>
          </div>

          {/* Contact Card 2: Email */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-blue-700 text-6xl mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Email</h4>
            <p className="text-lg">contact@school.edu</p>
          </div>

          {/* Contact Card 3: Address */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="text-blue-700 text-6xl mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Address</h4>
            <p className="text-lg">123 School Road, City, State, Country</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto py-16 px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-8 text-center">Find Us Here</h3>
          {/* Image of map or a placeholder */}
          <Image
            src="/map_image.jpg" // Replace with an actual map image or embed Google Maps
            alt="School location"
            width={1200}
            height={600}
            className="rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-blue-700 text-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Follow Us on Social Media</h3>
          <div className="flex justify-center space-x-12">
            {/* Facebook */}
            <a href="#" className="hover:text-gray-200">
              <FaFacebook className="text-6xl" />
            </a>
            {/* Twitter */}
            <a href="#" className="hover:text-gray-200">
              <FaTwitter className="text-6xl" />
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-gray-200">
              <FaInstagram className="text-6xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h3>
          <form action="#" method="POST" className="space-y-8">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-2 p-4 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 p-4 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-lg font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                className="mt-2 p-4 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Type your message here"
                className="mt-2 p-4 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
