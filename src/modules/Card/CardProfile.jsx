import React from "react";

const CardProfile = ({ name, role, image, bio }) => {
  return (
    <div className="max-w-xs w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 object-cover"
        src={image}
        alt={`${name}'s profile`}
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
        {name}
      </h2>
      <p className="text-sm text-blue-500 dark:text-blue-400">{role}</p>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{bio}</p>

      <div className="mt-4 flex justify-center gap-3">
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Message
        </a>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Follow
        </a>
      </div>

      <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        View Profile
      </button>
    </div>
  );
};

export default CardProfile;
