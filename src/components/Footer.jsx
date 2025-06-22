import { FaDiscord, FaGithub, FaInstagram, FaTwitch } from "react-icons/fa6";
import IconProvider from "./shared/IconProvider";

const Footer = () => {
  const socialLinks = [
    { icon: <FaDiscord />, link: "https://www.discord.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com" },
    { icon: <FaGithub />, link: "https://www.github.com" },
    { icon: <FaTwitch />, link: "https://www.twitch.tv" },
  ];

  return (
    <footer className="bg-violet-300 px-5 py-5 sm:px-12 md:py-3">
      <div className="relative font-general uppercase text-[10px] flex flex-col items-center justify-between gap-3 md:flex-row">
        <p>@ MX 2025. All rights reserved.</p>
        <div className="flex gap-4 md:absolute md:left-1/2 md:translate-x-[-50%]">
          {socialLinks.map((social) => (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              className="cursor-pointer transition-colors duration-500 ease-in-out hover:text-white"
            >
              <IconProvider value={{ size: "0.9rem" }}>
                {social.icon}
              </IconProvider>
            </a>
          ))}
        </div>
        <a
          href="https://www.zentry.com"
          className="hidden md:block cursor-pointer"
        >
          View Original
        </a>
      </div>
    </footer>
  );
};

export default Footer;
