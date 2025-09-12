import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <span className="hidden sm:block">
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 bg-white p-3 rounded-full shadow-lg">
            <a
                href="https://www.linkedin.com/in/tanya-rodrigues-2382381b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/TanyaRod22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black text-2xl"
            >
                <FaGithub />
            </a>
        </div>
    </span>
    
  );
}
