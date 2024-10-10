import React from 'react'
import Image from "next/image";

const Banner = () => {
    return (
        <section id="home" className="relative">
            <Image
                src="/banner_img.jpg"
                alt="School Banner"
                width={1920}
                height={500}
                className="w-full h-[700px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-4xl text-white font-bold">Welcome to Our School</h2>
            </div>
        </section>
    )
}

export default Banner