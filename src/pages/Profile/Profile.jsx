import React, { useState } from 'react';
import { Camera } from 'react-feather';

const Profile = ({ user, onUpdateProfile }) => {
    const [profilePicture, setProfilePicture] = useState(user.profilePicture || '/placeholder-user.jpg');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
                onUpdateProfile({ ...user, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Profile</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center mb-6">
                    <div className="relative">
                        <img src={profilePicture} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
                        <label htmlFor="profile-picture" className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 cursor-pointer">
                            <Camera size={20} />
                        </label>
                        <input
                            type="file"
                            id="profile-picture"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
                {/* Add more profile fields here */}
            </div>
        </div>
    );
};

export default Profile;

