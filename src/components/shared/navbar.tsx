import logo from "../../assets/logo.png"

const Navbar: React.FC = () => {
  return (
    <nav className="max-w-360 mx-auto px-4 py-4 flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full">
      <div className="w-[7.7rem] h-[3.3rem] overflow-hidden">
        <img src={logo} alt="Remote Recruit logo" className="w-full h-full object-contain" />
      </div>

      <div>
        <button type="button" className="text-primary px-4 py-2 rounded-xl font-semibold mr-2">Sign In</button>
        <button type="button" className="bg-button text-primary px-4 py-2 rounded-xl font-semibold">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar;
