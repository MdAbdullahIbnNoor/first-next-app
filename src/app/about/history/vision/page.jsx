import { FaGlobe, FaBrain, FaHandsHelping, FaLightbulb } from 'react-icons/fa'; // Importing icons

export default function Vision() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="m-6 border-4 border-green-700 text-green-700 py-8 rounded-lg">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Our Vision</h1>
                    <p className="mt-4 text-lg">
                        At our school, we envision a future where students are empowered to become global citizens, equipped with
                        the knowledge, skills, and values necessary to make a positive impact on the world. We strive to create a
                        nurturing environment where every student can flourish academically, personally, and socially.
                    </p>
                </div>
            </header>

            {/* Vision Points Section */}
            <section className="container mx-auto py-16 px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Vision 1 */}
                    <div className="flex flex-col items-center">
                        <FaGlobe className="text-green-700 text-6xl mb-4" />
                        <h4 className="text-xl font-bold mb-2">Global Perspective</h4>
                        <p className="text-center">
                            We aim to prepare students to understand, appreciate, and contribute to the global society through exposure
                            to diverse cultures, ideas, and technologies.
                        </p>
                    </div>

                    {/* Vision 2 */}
                    <div className="flex flex-col items-center">
                        <FaBrain className="text-green-700 text-6xl mb-4" />
                        <h4 className="text-xl font-bold mb-2">Innovative Thinking</h4>
                        <p className="text-center">
                            We foster creative and critical thinking skills, encouraging students to think outside the box and solve
                            problems with innovative solutions.
                        </p>
                    </div>

                    {/* Vision 3 */}
                    <div className="flex flex-col items-center">
                        <FaHandsHelping className="text-green-700 text-6xl mb-4" />
                        <h4 className="text-xl font-bold mb-2">Community Engagement</h4>
                        <p className="text-center">
                            We believe in giving back to the community, instilling values of social responsibility, compassion, and
                            service in all our students.
                        </p>
                    </div>

                    {/* Vision 4 */}
                    <div className="flex flex-col items-center">
                        <FaLightbulb className="text-green-700 text-6xl mb-4" />
                        <h4 className="text-xl font-bold mb-2">Lifelong Learning</h4>
                        <p className="text-center">
                            Our vision is to inspire a lifelong love of learning, where students continue to grow and develop in an
                            ever-changing world.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
