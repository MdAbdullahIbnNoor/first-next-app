"use client";
import React from "react";

const ProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Student",
        avatar: "https://i.ibb.co.com/ds98P3n/photo-2024-01-23-15-22-39.jpg", // You can replace this with an actual image path
        bio: "A passionate learner always looking to improve and grow.",
        achievements: [
            "Math Olympiad Winner - 2023",
            "Top 10 in Science Fair - 2022",
            "Excellent Academic Record",
        ],
    };

    return (
        <div className="mt-8 p-8 bg-white shadow-md rounded-lg max-w-5xl mx-auto border-2 border-gray-400">
            <div className="flex items-center space-x-6 mb-8">
                <img
                    src={user.avatar}
                    alt="Profile Picture"
                    className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-700">{user.name}</h1>
                    <p className="text-xl text-gray-600">{user.role}</p>
                    <p className="text-md text-gray-500">{user.email}</p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Bio</h2>
                <p className="text-gray-700">{user.bio}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start gap-36">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Achievements</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {user.achievements.map((achievement, index) => (
                            <li key={index} className="text-lg">
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Account Details</h2>
                    <table className="w-full table-auto text-left text-gray-700">
                        <tbody>
                            <tr>
                                <td className="p-1 font-semibold">Name:</td>
                                <td className="p-1">{user.name}</td>
                            </tr>
                            <tr>
                                <td className="p-1 font-semibold">Email:</td>
                                <td className="p-1">{user.email}</td>
                            </tr>
                            <tr>
                                <td className="p-1 font-semibold">Role:</td>
                                <td className="p-1">{user.role}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
