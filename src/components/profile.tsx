import profileImage from "../assets/profile.png";
import Badge from "./shared/badge";

const Profile: React.FC = () => {
  return (
    <section className="max-w-360 mx-auto px-4 my-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="mb-10 lg:mb-0">
        <Badge>Custom Profile</Badge>

        <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-medium flex-1 my-5">
          Showcase Your Talents
        </h2>

        <p className="max-w-120 text-text">
          Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
        </p>
      </div>

      <div className="max-w-120 overflow-hidden">
        <img src={profileImage} alt="Profile illustration" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default Profile;
