import HorizontalScroll from "./HorizontalScroll";

const Testimonial = () => {
  return (
    <>
      <div
        className="min-h-[150px] bg-transparent container"
        id="testimonial"
      ></div>
      <section>
        {/* <h1 className="text-deep-charcoal text-center my-3 text-3xl w-full max-w-7xl mx-auto container">
          Testimonial
        </h1> */}
        <HorizontalScroll />
      </section>
    </>
  );
};

export default Testimonial;
