import * as motion from "motion/react-client";

const AboutCard = ({ i, about }) => {
  const background = `linear-gradient(306deg, hsl(0, 4%, 15%), hsl(36, 33%, 89%))`;

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
  };

  const splash = {
    position: "absolute",
    width: 450,
    height: 100,
    borderRadius: 10,
    bottom: 0,
    zIndex: 2,
  };

  const card = {
    fontSize: 24,
    width: 400,
    height: 300,
    display: "flex",
    justifyContent: "center",
    borderRadius: 20,
    background: "#eee5da",
    boxShadow:
      "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
  };

  return (
    <motion.div
      className={`card-container-${i} flex-grow basis-[45%] backdrop-filter backdrop-blur-sm`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        style={card}
        variants={cardVariants}
        drag
        className="card p-10 about-card-detail cursor-pointer"
      >
        {about}
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
