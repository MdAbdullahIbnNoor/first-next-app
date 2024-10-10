import Banner from "../../components/Home/Banner";
import AboutUs from "../../components/Home/AboutUs";
import Teacher from "../../components/Home/Teacher";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Banner Section */}
      <Banner />
      {/* About Us Section */}
      <AboutUs />
      {/* Teacher Section */}
      <Teacher/>
    </div>
  );
}
