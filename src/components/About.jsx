import AboutCard from "./AboutCard";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <>
      <div className="min-h-[150px] bg-transparent container" id="about"></div>
      <section className="w-full max-w-7xl mx-auto container">
        <h1 className="text-deep-charcoal flex justify-center text-center text-3xl">
          <span className="text-center">Why choose us</span>
          <motion.span
            whileInView={{ rotate: 360 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            &nbsp;?
          </motion.span>
        </h1>
        <div className="flex justify-between flex-wrap gap-11">
          <AboutCard
            i={0}
            title="End-to-End Expertise"
            about="We specialize in both front-end and back-end development."
          />
          <AboutCard
            i={1}
            title="Scalable & Secure Solutions"
            about="Our team builds robust, scalable, and secure applications."
          />
          <AboutCard
            i={2}
            title="Cutting-Edge Technologies"
            about="We leverage the latest frameworks and tools."
          />
          <AboutCard
            i={3}
            title="Client-Centric Approach"
            about="Your vision is our priority!"
          />
        </div>
      </section>
    </>
  );
};

export default About;
