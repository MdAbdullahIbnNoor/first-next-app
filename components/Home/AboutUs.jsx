import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const AboutUs = () => {
    return (
        <section id="about" className="container mx-auto py-16 px-8">
            <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
            
            {/* Main About Us Section */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
                <Image
                    src="/beach_image.jpg"
                    alt="School Building"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                />
                <p className="text-lg text-justify sm:text-left">
                    Our school is committed to providing quality education and holistic
                    development to students. With a dedicated faculty, modern facilities, and
                    a vibrant learning environment, we ensure that every student receives
                    the tools they need to succeed in life. Join us on this journey towards
                    academic excellence and personal growth!
                </p>
            </div>
            
            {/* Mission of Our School Section */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-8">
                <h4 className="text-2xl font-bold mb-4">Mission of Our School</h4>
                <p className="text-lg mb-6">
                    Our mission is to foster a learning environment that empowers students to be
                    responsible, respectful, and confident global citizens, equipped with the
                    skills and knowledge to thrive in an ever-changing world.
                </p>
                <Link href="/about/mission" className="text-blue-600 font-semibold hover:underline">
                    Learn more about our mission &rarr;
                </Link>
            </div>

            {/* History of Our School Section */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold mb-4">History of Our School</h4>
                <p className="text-lg mb-6">
                    Established over 50 years ago, our school has a rich history of academic
                    excellence and community involvement. Learn how we grew from a small institution 
                    into the beacon of education we are today.
                </p>
                <Link href="/about/history" className="text-blue-600 font-semibold hover:underline">
                    Discover our history &rarr;
                </Link>
            </div>
        </section>
    );
};

export default AboutUs;
