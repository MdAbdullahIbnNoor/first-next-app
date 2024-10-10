import Image from 'next/image';
import Link from 'next/link';

const History = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Our School's History</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
            {/* Placeholder Image */}
            <Image 
              src="https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="History Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our school was founded with the vision of providing students with the tools they need to succeed in life. 
              Over the years, we have grown from a small community school into a respected institution known for its excellence in education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a legacy of over 50 years, our school has produced many successful alumni who have gone on to make a 
              positive impact in various fields. Our history is a testament to the dedication and hard work of our faculty, staff, and students.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are proud of the rich heritage and traditions that have been passed down through generations, and we continue to build on that legacy today.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/about/mission">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Learn About Our Mission
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default History;
