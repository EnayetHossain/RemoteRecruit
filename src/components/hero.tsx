import useScrollReveal from "../hooks/useScrollReveal";
import background from "../assets/background.svg";

const Hero: React.FC = () => {
  const contentRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        ref={contentRef}
        className="reveal relative z-10 mx-auto max-w-360 px-4 text-center text-white"
      >
        <h1 className="text-[clamp(2.5rem,3vw,3.3rem)] font-bold">
          RemoteRecruit’s Difference
        </h1>

        <p className="mt-3 max-w-2xl">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
        </p>
      </div>
    </section>
  );
};

export default Hero;
