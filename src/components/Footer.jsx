import { logo } from "../assets";

const Footer = () => {
  return (
    <>
      <footer className="bg-deep-charcoal p-6">
        <div className="w-full max-w-7xl mx-auto container">
          <div className="text-light-almond flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <img src={logo} alt="Nextwebi Logo" className="w-12 h-12" />© 2025
            Nextwebi. All Rights Reserved. | Empowering Innovation, One Line of
            Code at a Time.
          </div>
          <div className="flex justify-between text-light-almond mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
              <p>&copy;Copyright. All rights reserved.</p>
            </div>
            <p className="cursor-pointer">Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
