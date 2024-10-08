import Image from "next/image";
import { FaSchool, FaChalkboardTeacher, FaBook, FaUsers } from 'react-icons/fa'; // Importing icons

export default function page() {
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

      {/* About Us Section */}
      <section className="container mx-auto py-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Image on the left */}
          <div>
            <Image
              src="/banner_img.jpg" // Reusing previous image
              alt="Our School"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* About Us Text on the right */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-justify mb-4">
              Our school is dedicated to providing an exceptional education that empowers
              students to achieve academic excellence and personal growth. With state-of-the-art
              facilities, experienced educators, and a nurturing environment, we ensure every student
              is prepared for the challenges of the future.
            </p>
            <p className="text-lg text-justify">
              We believe in a holistic approach to education, where students not only excel in academics
              but also develop leadership, teamwork, and problem-solving skills through extracurricular
              activities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <FaSchool className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Modern Infrastructure</h4>
              <p className="text-center">
                Our campus is equipped with cutting-edge facilities, including advanced labs, smart classrooms,
                and sports complexes, ensuring a well-rounded learning experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <FaChalkboardTeacher className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Expert Faculty</h4>
              <p className="text-center">
                Our faculty consists of highly experienced teachers who are committed to
                nurturing each student's individual potential.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <FaBook className="text-blue-700 text-6xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Comprehensive Curriculum</h4>
              <p className="text-center">
                We offer a curriculum that combines academic rigor with creative and critical thinking skills, preparing students for the future.
              </p>
            </div>

            {/* Feature 4 */}
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
              src="/beach_image.jpg" // Reusing previous image
              alt="Principal"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-bold mt-4">John Doe</h4>
            <p className="text-blue-700">Principal</p>
            <p>
              John has over 20 years of experience in educational leadership and is passionate
              about fostering a learning environment that challenges and inspires students.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <Image
              src="/beach_image.jpg"
              alt="Teacher"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-bold mt-4">Jane Smith</h4>
            <p className="text-blue-700">Senior Teacher</p>
            <p>
              Jane specializes in mathematics and science, helping students develop a strong foundation
              in these subjects through engaging and interactive lessons.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <Image
              src="/beach_image.jpg"
              alt="Counselor"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
            <h4 className="text-xl font-bold mt-4">Michael Lee</h4>
            <p className="text-blue-700">Counselor</p>
            <p>
              Michael supports students with academic and personal counseling, helping them navigate challenges
              and succeed both inside and outside the classroom.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
