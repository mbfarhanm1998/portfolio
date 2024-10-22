// import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

// import logo from "../assets/farhan-logo.webp";
// const Navbar = () => {
//   return (
//     <nav className="flex item-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <a href="/" aria-label="Home">
//           <img src={logo} className="mx-2" width={50} height={33} />
//         </a>
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a
//           href="https://www.linkedin.com/in/muhammad-farhan-shaukat-44398b243/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//         >
//           <FaLinkedin />
//         </a>

//         <a
//           href="https://www.github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="GitHub"
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://www.github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Instagram"
//         >
//           <FaInstagram />
//         </a>
//         <a
//           href="https://www.twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Twitter"
//         >
//           <FaTwitter />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




























// import { useState } from "react";
// import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Link } from "react-scroll"; // For smooth scrolling
// import logo from "../assets/farhan-logo.webp";
// import './Styles/Nav.css'
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State for mobile menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <nav className="flex items-center justify-between py-2 bg-black fixed top-0 left-0 right-0 z-10 px-4 lg:px-16">
//       {/* Logo */}
//       <div className="flex items-center">
//         <a href="/" aria-label="Home">
//           <img src={logo} alt="Logo" className="mx-2" width={50} height={33} />
//         </a>
//       </div>

//       {/* Section Links with Neon Glow */}
//       <ul className="flex items-center space-x-8 text-white">
//         <li>
//           <Link
    
//             to="Hero"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={100}
//             className="neon-nav-link"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="Technologies"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={100}
//             className="neon-nav-link"
//           >
//             Technologies
//           </Link>
//         </li>
//         <li>
//           <Link
//           to="Projects"
          
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={100}
//             className="neon-nav-link"
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="Experiences"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={100}
//             className="neon-nav-link"
//           >
//             Experience
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="Contacts"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={100}
//             className="neon-nav-link"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Social Icons */}
//       <div className="flex items-center justify-center gap-4 text-2xl text-white">
//         <a
//           href="https://www.linkedin.com/in/muhammad-farhan-shaukat-44398b243/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//         >
//           <FaLinkedin />
//         </a>

//         <a
//           href="https://www.github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="GitHub"
//         >
//           <FaGithub />
//         </a>

//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Instagram"
//         >
//           <FaInstagram />
//         </a>

//         <a
//           href="https://www.twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Twitter"
//         >
//           <FaTwitter />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
































import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll"; // For smooth scrolling
import { useState } from "react";
import logo from "../assets/farhan-logo.webp";
import './Styles/Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 bg-black fixed top-0 left-0 right-0 z-10 px-4 lg:px-16 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" width={50} height={33} />
        </a>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden lg:flex items-center space-x-8 text-white">
        <li>
          <Link
            to="Hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={400}
            className="neon-nav-link cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="Technologies"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="neon-nav-link cursor-pointer"
          >
            Technologies
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="neon-nav-link cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Experiences"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="neon-nav-link cursor-pointer"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="Contacts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="neon-nav-link cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons for both desktop and mobile */}
      <div className="hidden lg:flex items-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/muhammad-farhan-shaukat-44398b243/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center absolute top-16 left-0 right-0 bg-black text-white py-6 space-y-4">
          <li>
            <Link
              to="Hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={400}
              className="neon-nav-link cursor-pointer"
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="Technologies"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
              className="neon-nav-link cursor-pointer"
              onClick={toggleMenu}
            >
              Technologies
            </Link>
          </li>
          <li>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
              className="neon-nav-link cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="Experiences"
              spy={true}
              smooth={true}
              offset={-120}
              duration={400}
              className="neon-nav-link cursor-pointer"
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="Contacts"
              spy={true}
              smooth={true}
              offset={-50}
              duration={400}
              className="neon-nav-link cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

