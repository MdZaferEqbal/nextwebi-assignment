import * as motion from "motion/react-client";

const AboutCard = ({ i, about, title }) => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={`card-container-${i} card-container flex-grow`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="splash flex justify-center items-center font-bold text-light-almond">
        {title}
      </div>
      <motion.div
        variants={cardVariants}
        drag
        className="about-card card bg-light-almond p-10 about-card-detail cursor-pointer"
      >
        {about}
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
