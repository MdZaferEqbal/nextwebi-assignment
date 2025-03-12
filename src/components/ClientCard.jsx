import { Tilt } from "react-tilt";
import * as motion from "motion/react-client";

const ClientCard = ({ src, alt, desc }) => {
  return (
    <Tilt
      options={{ reverse: true, max: 45, scale: 1, speed: 450 }}
      className="flex-grow flex"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="client-card p-3 z-0 rounded-lg backdrop-filter backdrop-blur-sm"
      >
        <img className="client-logo" src={src} alt={alt} />
        <div className="client-desc bg-deep-charcoal w-52 p-3 rounded-lg text-light-almond drop-shadow-xs mt-2">
          <p>{desc}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ClientCard;
