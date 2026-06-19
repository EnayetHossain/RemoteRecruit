import useScrollReveal from "../hooks/useScrollReveal";
import reachImage from "../assets/reach.png";
import Badge from "./shared/badge";

const Reach: React.FC = () => {
  const textRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="max-w-360 mx-auto px-4 my-20 flex flex-col lg:flex-row justify-between items-center">
      <div ref={textRef} className="reveal-left mb-10 lg:mb-0">
        <Badge>Global Reach</Badge>

        <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-medium flex-1 my-5">
          The First Fully Global Job <br /> Board, Anywhere, Ever
        </h2>

        <p className="max-w-120 text-text">
          RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
        </p>
      </div>

      <div ref={imageRef} className="reveal-right max-w-120 overflow-hidden">
        <img src={reachImage} alt="Reach illustration" className="w-full h-full object-contain" />
      </div>
    </section>
  );
};

export default Reach;
