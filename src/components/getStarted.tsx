import dashbaord from "../assets/dashboard.png";
import Badge from "./shared/badge";
import { FaArrowRightLong } from "react-icons/fa6";

const GetStarted: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-light-blue to-light-purple flex flex-col before:content-[''] before:absolute before:w-60 before:h-60 before:rounded-full before:bg-primary/30 before:-top-10 before:-left-10 before:z-0 after:content-[''] after:absolute after:w-60 after:h-60 after:rounded-full after:bg-primary/30 after:-top-20 after:-right-20 after:z-0 overflow-hidden">

      <div className="w-15 h-15 rounded-full my-5 bg-linear-to-r from-yellow to-orange relative left-70"></div>

      <div className="flex flex-col lg:flex-row items-center relative z-10">
        <div className="pt-4 pr-4 bg-primary rounded-none sm:rounded-2xl lg:rounded-none lg:rounded-tr-2xl max-w-150 max-h-100 overflow-hidden shadow-2xl shadow-deep-blue/70">
          <img src={dashbaord} alt="Dashboard image" className="rounded-tr-2xl" />
        </div>

        <div className="lg:ml-20 mt-10 mb-10 lg:mb-0">
          <Badge className="bg-transparent text-deep-blue px-0!">Are you ready?</Badge>
          <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-semibold flex-1">
            Help is only a few <br /> clicks away!
          </h2>
          <p className="max-w-120 text-text my-5">
            Click Below to get set up super <br /> quickly and find help now!
          </p>
          <button type="button" className="flex items-center text-deep-blue bg-transparent-blue/20 pl-2 pr-5 py-2 rounded-full">
            <span className="bg-sky-blue p-2 rounded-full mr-2"><FaArrowRightLong className="text-primary" /></span>
            <span>Get Started</span>
          </button>
        </div>
      </div>

      <div className="w-80 h-80 rounded-full bg-primary/30 absolute left-1/2 -bottom-30 -translate-x-3/4"></div>
    </section>
  )
};

export default GetStarted;
