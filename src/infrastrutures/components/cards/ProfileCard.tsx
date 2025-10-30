import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Assuming you have react-icons installed
import { MdEmail } from 'react-icons/md';

const ProfileCard = () => {
  return (

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full mx-auto md:max-w-4xl mt-5">
        <div className="md:flex-col p-8 items-center text-center">
          {/* Profile Image with Purple Border */}
          <div className="flex justify-center mb-4">
            <div className="relative w-28 h-28 rounded-full bg-purple-600 flex items-center justify-center p-1">
              {/* Placeholder for the actual image. Replace with an <img> tag pointing to your image source */}
              {/* For now, a placeholder div or a simple icon can be used if no image is available */}
              <img
                  className="h-full w-full object-cover rounded-full"
                  src="../../../assets/image.jpg" // Replace with your image URL
                  alt="Profile Avatar"
              />
              {/* If you want to use the exact avatar from the image (programmer with binary background), you'd need that specific image file. */}
              {/* Example of how you might include it if you had the image: */}
              {/* <img src="/path/to/your/avatar.png" alt="Profile Avatar" className="h-full w-full object-cover rounded-full" /> */}
            </div>
          </div>

          {/* Name */}
          <div className="uppercase tracking-wide text-2xl text-gray-800 font-bold mb-1">
            TOURE KATINAN
          </div>

          {/* Title */}
          <p className="block mt-1 text-lg leading-tight font-medium text-gray-600 mb-2">
            Ingénieur Développement d'Applications Web
          </p>

          {/* Technologies */}
          <p className="text-gray-500 text-sm mb-6">
            Spring Boot • Java • React.js • Next.js
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              <FaGithub className="mr-2" /> GitHub
            </button>
            <button className="flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              <FaLinkedinIn className="mr-2" /> LinkedIn
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              <MdEmail className="mr-2" /> Contact
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProfileCard;