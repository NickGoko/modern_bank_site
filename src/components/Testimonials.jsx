import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[70%] rounded-full white__gradient bottom-40" />
    {/* -right-[70%] is using the negative value  */}

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[0]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us 
        {/* sm:black hidden means the position will be block for sizes larger than 640px then hidden on smaller screens hiding the br combining the two split texts*/}
      </h2>
      <div className="w-full md:mt-0 mt-6 ">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
