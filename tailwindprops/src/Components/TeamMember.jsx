// src/components/TeamMember.jsx
import React from 'react';

const TeamMember = ({ name, role, description, image, linkedin, twitter, email }) => {
    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex space-x-4">
                        {linkedin && (
                            <a href={linkedin} className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        )}
                        {twitter && (
                            <a href={twitter} className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                                <i className="fas fa-envelope"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <p className="text-indigo-600 font-medium">{role}</p>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default TeamMember;
