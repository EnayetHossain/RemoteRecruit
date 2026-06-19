import CTA from "./cta"
import footer from "../assets/footer.png"
import footerLogo from "../assets/footer-logo.png"
import icon from "../assets/icon.png"
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col min-h-120 items-center justify-center overflow-y-visible overflow-x-clip mt-80 before:content=[''] before:absolute before:top-0 before:-right-10 before:w-70 before:h-70 before:bg-primary/15 before:z-1 before:rounded-full">
      <img
        src={footer}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      <div className="absolute top-[-25%] z-2">
        <CTA />
      </div>

      <div className="flex items-center justify-between w-full max-w-4xl px-4 mx-auto mt-180 xs:mt-140 md:mt-30 mb-40 md:mb-0 flex-col xs:flex-row">
        <div className="w-30 overflow-hidden">
          <img src={footerLogo} alt="footer logo" className="w-full object-contain" />
        </div>

        <div className="flex flex-wrap mt-10 xs:mt-0">
          <button type="button" className="p-2 bg-primary/20 rounded-full mx-1" aria-label="Facebook">
            <ImFacebook className="text-primary" />
          </button>
          <button type="button" className="p-2 bg-primary/20 rounded-full mx-1" aria-label="Instagram">
            <FaInstagram className="text-primary" />
          </button>
          <button type="button" className="p-2 bg-primary/20 rounded-full mx-1" aria-label="Twitter">
            <FaXTwitter className="text-primary" />
          </button>
          <button type="button" className="p-2 bg-primary/20 rounded-full mx-1" aria-label="Twitter">
            <FaTwitter className="text-primary" />
          </button>
          <button type="button" className="p-2 bg-primary/20 rounded-full mx-1" aria-label="Linkedin">
            <FaLinkedinIn className="text-primary" />
          </button>
          <button type="button" className="p-2 bg-primary/20 rounded-full mx-1" aria-label="Snapchat">
            <FaSnapchatGhost className="text-primary" />
          </button>
        </div>
      </div>

      <hr className="absolute bottom-18 w-full border-primary/30" />

      <div className="absolute bottom-5">
        <img src={icon} alt="footer icon" className="w-full object-contain" />
      </div>
    </footer>
  )
}

export default Footer
