import Link from 'next/link';
import { FaChalkboardTeacher, FaBookOpen, FaMedal } from 'react-icons/fa';

const Teacher = () => {
  return (
    <div className='container mx-auto flex gap-20'>
      {/* Enhanced Teacher Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Meet Our Teachers</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Our experienced and highly qualified teachers are here to mentor and guide you in every step of your educational journey.
            Disfill our faculty and find the perfect teacher for you.
          </p>

          {/* Teacher Qualities Section */}
          <div className="flex flex-col lg:flex-row justify-around lg:gap-2 items-baseline mb-12">
            {/* Type of Teachers */}
            <div className="flex flex-col items-center mb-8 lg:mb-0">
              <FaChalkboardTeacher className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Mentors</h3>
              <p className="text-gray-600 max-w-sm">
                Our teachers are experienced educators to providing you.
              </p>
            </div>

            {/* Courses Covered */}
            <div className="flex flex-col items-center mb-8 lg:mb-0">
              <FaBookOpen className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Knowledge</h3>
              <p className="text-gray-600 max-w-sm">
                We offer teachers with deep expertise in multiple fields.
              </p>
            </div>

            {/* Teacher Excellence */}
            <div className="flex flex-col items-center mb-8 lg:mb-0">
              <FaMedal className="text-2xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Award-Winning Faculty</h3>
              <p className="text-gray-600 max-w-sm">
                Our teachers have been recognized for their contributions to education.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <Link href="/teacher">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700">
              View Full Teacher List
            </button>
          </Link>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-white py-16 w-1/2">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-2">
            {/* Teacher Images */}
            <div>
              <img src="https://i.ibb.co/JzCmTqc/oliver-ragfelt-kh-V4f-Ty6-D8-unsplash.jpg" alt="Teacher 1" className="rounded-lg shadow-lg h-44 w-full object-cover object-center" />
            </div>
            <div>
              <img src="https://i.ibb.co/Lz9M8Zk/marwan-ahmed-m-Vnufl3w-B7-M-unsplash.jpg" alt="Teacher 2" className="rounded-lg shadow-lg h-44 w-full object-cover object-center" />
            </div>
            <div>
              <img src="https://i.ibb.co/72yPXs0/kunal-goswami-r-Gs3-RCIctx-Q-unsplash.jpg" alt="Teacher 3" className="rounded-lg shadow-lg h-44 w-full object-cover object-center" />
            </div>
            <div>
              <img src="https://i.ibb.co/q9sGCSN/erik-lucatero-d2-MSDuj-Jl2g-unsplash.jpg" alt="Teacher 4" className="rounded-lg shadow-lg h-44 w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teacher;
