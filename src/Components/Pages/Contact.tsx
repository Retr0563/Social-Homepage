import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    href: "https://twitter.com/@mikael563",
    label: "X",
    icon: <FaXTwitter className="h-6 w-6 text-gray-800" />,
  },
  {
    href: "https://linkedin.com/@retr0563",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="h-6 w-6 text-blue-600" />,
  },
  {
    href: "https://github.com/Retr0563",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    href: "https://instagram.com/Retr0563",
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Contact Me
        </h2>
        <div className="flex items-center">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener nereferrer"
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-8"
            >
              {link.icon}
              <span className="text-lg">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;
