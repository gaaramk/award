import { FaGithub, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";

const links = [
  {
    href: "https://github.com",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    href: "https://twitch.com",
    icon: <FaTwitch />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; 2023 <span className="font-bold">NOBODY</span> | All Rights
          Reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-violet-50"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
