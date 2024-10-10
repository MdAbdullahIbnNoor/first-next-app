import React from 'react'
import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about" className="container mx-auto py-16 px-8">
            <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
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
        </section>
    )
}

export default AboutUs