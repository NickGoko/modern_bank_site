import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  
  // Set up a functional react component of FeatureCard that defines the markup and behavior of a single feature 
  // that is used in Business component.
  // Flex row for all three in feature card icon, title and contnet
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  // if index not equal not the last index margin-bottom is 6 else last index has margin-bottom of 0
  ><div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  // contains all business content the h2, p, button and feature cards
  // Inside section element from layout.section section is md:flex-row and flex-col on <md breakpoints
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}
    //flex-col on h2,p,& button with flex-1 =(shrink 1, grow 1 and basis 1)
    >
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money.
      </p>

      <Button styles={`mt-10`} />
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} 
          // map through the features object the key being the features.id
          // In features.map((feature, index)) index comes automatically from using map the features and capturing the index.
          // Then in FeatureCard we set the index prop from features component to index from features.map
        />
      ))}
    </div>
  </section>
);

export default Business;
