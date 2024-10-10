import Image from "next/image";
import { FaSchool, FaChalkboardTeacher, FaBook, FaUsers } from 'react-icons/fa';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="m-6 border-4 border-blue-700 text-blue-700 py-8 rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Discover more about our school, mission, and the dedicated team behind our success.
          </p>
        </div>
      </header>

      {/* History Section */}
      <section className="mx-auto py-12 px-4 lg:w-4/6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for history
              alt="School History"
              width={500}
              height={250}
              className="rounded-lg shadow-lg p-1 border-4 border-blue-500"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-lg text-justify mb-4">
              Established in 1990, our school has a proud history of providing quality education to students from diverse backgrounds.
            </p>
            <a href="/about/history" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              Read More About Our History
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto py-12 px-4 lg:w-4/6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-justify mb-4">
              Our mission is to empower students through comprehensive education, fostering creativity, leadership, and responsibility.
            </p>
            <a href="/about/mission" className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
              Learn More About Our Mission
            </a>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for mission
              alt="School Mission"
              width={500}
              height={250}
              className="rounded-lg shadow-lg p-1 border-4 border-green-500"
            />
          </div>
        </div>
      </section>


      {/* Updated Image Link Section */}
      <section className="bg-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Discover Our School</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Image Link 1 */}
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for the actual image
                alt="School Campus"
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200">
                <a href="#" className="text-white text-xl font-bold">Explore Campus</a>
              </div>
            </div>

            {/* Image Link 2 */}
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for the actual image
                alt="Classroom"
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200">
                <a href="#" className="text-white text-xl font-bold">View Classrooms</a>
              </div>
            </div>

            {/* Image Link 3 */}
            <div className="relative group">
              <Image
                src="https://images.unsplash.com/photo-1596522354505-edd52759a867?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for the actual image
                alt="Library"
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-700 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-200">
                <a href="#" className="text-white text-xl font-bold">Tour Library</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center">
              <FaSchool className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Modern Infrastructure</h4>
              <p className="text-center">
                Our campus is equipped with cutting-edge facilities, including advanced labs, smart classrooms, and sports complexes.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaChalkboardTeacher className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Expert Faculty</h4>
              <p className="text-center">
                Our faculty consists of highly experienced teachers committed to nurturing each student's potential.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaBook className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Comprehensive Curriculum</h4>
              <p className="text-center">
                We offer a curriculum that combines academic rigor with critical thinking skills, preparing students for the future.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaUsers className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Community & Collaboration</h4>
              <p className="text-center">
                Our collaborative environment fosters teamwork and a strong sense of community among students, staff, and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Principal"
              width={200}
              height={200}
              className="rounded-full mx-auto object-cover aspect-square"
            />
            <h4 className="text-xl font-bold mt-4">John Doe</h4>
            <p className="text-blue-700">Principal</p>
            <p>
              John has over 20 years of experience in educational leadership and is passionate about fostering a learning environment that challenges and inspires students.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Teacher"
              width={200}
              height={200}
              className="rounded-full mx-auto object-cover aspect-square"
            />
            <h4 className="text-xl font-bold mt-4">Jane Smith</h4>
            <p className="text-blue-700">Senior Teacher</p>
            <p>
              Jane specializes in mathematics and science, helping students develop a strong foundation in these subjects through engaging lessons.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Counselor"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-bold mt-4">Michael Lee</h4>
            <p className="text-blue-700">Counselor</p>
            <p>
              Michael supports students with academic and personal counseling, helping them navigate challenges and succeed both inside and outside the classroom.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
