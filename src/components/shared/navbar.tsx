import logo from "../../assets/logo.png"
import { Button } from "./button";

const Navbar: React.FC = () => {
  return (
    <nav className="max-w-360 mx-auto px-4 py-4 flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full">
      <div className="w-[7.7rem] h-[3.3rem] overflow-hidden">
        <img src={logo} alt="Remote Recruit logo" className="w-full h-full object-contain" />
      </div>

      <div>
        <Button variant="ghost" className="mr-2 relative group">
          <span className="relative inline-flex overflow-hidden">
            {"Sign In".split("").map((char, i) => {
              const isSpace = char === " "

              return (
                <span
                  key={i}
                  className="relative inline-block overflow-hidden"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >

                  {/* TOP */}
                  <span
                    className="block transition-transform duration-500 ease-out group-hover:-translate-y-full"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {isSpace ? "\u00A0" : char}
                  </span>

                  {/* BOTTOM */}
                  <span
                    className="absolute left-0 top-full block transition-transform duration-500 ease-out group-hover:-translate-y-full"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {isSpace ? "\u00A0" : char}
                  </span>

                </span>
              )
            })}
          </span>
        </Button>

        <Button className="relative group">
          <span className="relative inline-flex overflow-hidden">
            {"Sign In".split("").map((char, i) => {
              const isSpace = char === " "

              return (
                <span
                  key={i}
                  className="relative inline-block overflow-hidden"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >

                  {/* TOP */}
                  <span
                    className="block transition-transform duration-500 ease-out group-hover:-translate-y-full"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {isSpace ? "\u00A0" : char}
                  </span>

                  {/* BOTTOM */}
                  <span
                    className="absolute left-0 top-full block transition-transform duration-500 ease-out group-hover:-translate-y-full"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {isSpace ? "\u00A0" : char}
                  </span>

                </span>
              )
            })}
          </span>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar;
