import * as motion from "motion/react-client";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="service-card p-3 flex justify-center items-stretch bg-deep-charcoal text-light-almond my-3 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25 }}
    >
      {service}
    </motion.div>
  );
};

export default ServiceCard;
