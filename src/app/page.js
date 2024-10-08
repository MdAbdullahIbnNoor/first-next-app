import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      

      {/* Banner Section */}
      <section id="home" className="relative">
        <Image
          src="/banner_img.jpg"
          alt="School Banner"
          width={1920}
          height={600}
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-4xl text-white font-bold">Welcome to Our School</h2>
        </div>
      </section>

      {/* About Us Section */}
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

      
    </div>
  );
}
