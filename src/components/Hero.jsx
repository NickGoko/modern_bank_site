import styles from "../style";
import { discount, hero1 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}
    // this section contains id of home so navbar home link will lead here. 
    // Both (3) discount, text and hero image are on flex-col and flex-row on med breakpoint
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      // this div puts (2) discount and text on flex-col xl breakpoint with padding 0
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        //this div puts the discount img and text on flex-row and using bg-discount-gradient found in index.css
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>Receive{" "}
            <span className="text-white">5%</span> Bonus For{" "}
            <span className="text-white">New</span> Accounts
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full"
        // flex-row so that The Next text and Get started circle is in row display
        // ss:text-[72px] is breakpoint for screens 620px and greater found in tailwind.config.cjs
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex  md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Bank Account.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses A.I. to identify the credit cards
          most likely to fit your needs and predict future expenses. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero1} alt="hero" className="w-[60%] h-[90%] relative z-[20] overflow-hidden rounded-sm mx-5" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
