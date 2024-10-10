import Image from 'next/image';
import Link from 'next/link';

const Mission = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Our School's Mission</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          {/* Placeholder Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <Image 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Mission Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At our school, we are committed to fostering a safe and inclusive learning environment. 
              Our mission is to provide a high-quality education that encourages students to reach their fullest potential, 
              both academically and personally. We believe in nurturing curiosity, creativity, and critical thinking 
              to prepare our students for a bright future.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our dedicated teachers and staff work tirelessly to instill values such as respect, integrity, 
              and perseverance in our students, shaping them into responsible global citizens.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/about/history">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Learn About Our History
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;
