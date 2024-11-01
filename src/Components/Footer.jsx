import logo from "../assets/images/logo.png";
import linkedinIcon from "../assets/images/linkedin.svg";
import GitLogo from "../assets/images/github.svg";
import EmailLogo from "../assets/images/email.svg";
import xIcon from "../assets/images/twitter-x.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#111] pb-10 flex flex-col items-center">
        <p className="text-xs text-gray-300">Satyam Maurya © 2024</p>
        <div class="black-logo my-4">
          <img className="h-[50px] w-[50px]" src={logo} alt="" />
        </div>
        <ul className="flex gap-6">
          <a href="https://www.linkedin.com/in/thesatyammaurya">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img
                className="w-6 sm:w-6 lg:w-7"
                src={linkedinIcon}
                alt="LinkedIn"
              />
            </li>
          </a>
          <a href="https://x.com/sa9451736205">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img className="w-6 sm:w-6 lg:w-7" src={xIcon} alt="Twitter/X" />
            </li>
          </a>

          <a href="mailto:sa9451736205@gmail.com">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img className="w-6 sm:w-6 lg:w-7" src={EmailLogo} alt="Email" />
            </li>
          </a>
          <a href="https://github.com/SatyamMauryakit">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img className="w-6 sm:w-6 lg:w-7" src={GitLogo} alt="GitHub" />
            </li>
          </a>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
