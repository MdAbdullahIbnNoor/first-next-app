import Image from "next/image";

const TeachersPage = () => {

    const teachersData = [
        {
            name: "Oliver Ragfelt",
            department: "Mathematics",
            contact: "oliver@school.com",
            image: "https://i.ibb.co.com/JzCmTqc/oliver-ragfelt-kh-V4f-Ty6-D8-unsplash.jpg",
        },
        {
            name: "Marwan Ahmed",
            department: "Physics",
            contact: "marwan@school.com",
            image: "https://i.ibb.co.com/Lz9M8Zk/marwan-ahmed-m-Vnufl3w-B7-M-unsplash.jpg",
        },
        {
            name: "Kunal Goswami",
            department: "Computer Science",
            contact: "kunal@school.com",
            image: "https://i.ibb.co.com/72yPXs0/kunal-goswami-r-Gs3-RCIctx-Q-unsplash.jpg",
        },
        {
            name: "Erik Lucatero",
            department: "Chemistry",
            contact: "erik@school.com",
            image: "https://i.ibb.co.com/q9sGCSN/erik-lucatero-d2-MSDuj-Jl2g-unsplash.jpg",
        },
        {
            name: "Christopher Sardegna",
            department: "Biology",
            contact: "christopher@school.com",
            image: "https://i.ibb.co.com/QHtwf7B/christopher-sardegna-CMOa3-H1-SXG0-unsplash.jpg",
        },
        {
            name: "Anna Williams",
            department: "Mathematics",
            contact: "anna@school.com",
            image: "https://i.ibb.co.com/ZzHzTVF/new-woman.jpg",
        },
        {
            name: "David Brown",
            department: "Physics",
            contact: "david@school.com",
            image: "https://i.ibb.co.com/RYpzTf4/new-man.jpg",
        },
        {
            name: "Sophia Johnson",
            department: "Computer Science",
            contact: "sophia@school.com",
            image: "https://i.ibb.co.com/FbdyHNP/new-man2.jpg",
        },
        {
            name: "Michael Green",
            department: "Chemistry",
            contact: "michael@school.com",
            image: "https://i.ibb.co.com/ds98P3n/photo-2024-01-23-15-22-39.jpg",
        },
        {
            name: "Emily White",
            department: "Biology",
            contact: "emily@school.com",
            image: "https://i.ibb.co.com/QHtwf7B/christopher-sardegna-CMOa3-H1-SXG0-unsplash.jpg",
        }
    ];

    // Group teachers by departments
    const departments = ["Mathematics", "Physics", "Computer Science", "Chemistry", "Biology"];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Our Teachers</h2>

                {/* Department Sections */}
                {departments.map((department) => (
                    <div key={department} className="mb-12">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{department} Department</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {teachersData
                                .filter((teacher) => teacher.department === department)
                                .map((teacher) => (
                                    <div key={teacher.name} className="bg-gray-100 rounded-lg shadow-md p-6">
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                                        <p className="text-gray-700">Department: {teacher.department}</p>
                                        <p className="text-gray-700">Contact: {teacher.contact}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeachersPage;
