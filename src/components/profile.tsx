import useScrollReveal from "../hooks/useScrollReveal";
import profileImage from "../assets/profile.png";
import Badge from "./shared/badge";
import LazyImage from "./shared/lazyImage";

const Profile: React.FC = () => {
  const textRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="max-w-360 mx-auto px-4 my-20 flex flex-col lg:flex-row justify-between items-center">
      <div ref={textRef} className="reveal-left mb-10 lg:mb-0">
        <Badge>Custom Profile</Badge>

        <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-medium flex-1 my-5">
          Showcase Your Talents
        </h2>

        <p className="max-w-120 text-text">
          Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
        </p>
      </div>

      <div ref={imageRef} className="reveal-right max-w-120 overflow-hidden">
        <LazyImage src={profileImage} alt="Profile illustration" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default Profile;
