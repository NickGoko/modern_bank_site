import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden " /> in few easy
        steps.
        {/*Using sm:block hidden means the br element is hidden  */}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Save money on your credit card with our easy-to-use tools.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
