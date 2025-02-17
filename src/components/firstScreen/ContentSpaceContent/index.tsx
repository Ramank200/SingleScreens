import React from "react";
import styles from "./ContentSpaceContent.module.css";
import Image from "next/image";

const ContentSpaceContainer = () => {
  return (
    <div className={`${styles.ContentSpaceContainer}`}>
      <div className={styles.LeftContainer}>
        <div className={`${styles.ImagePortion}`}>
          <Image
            src={"/Assets/Images/yodamobile.jpg"}
            alt={"yoda"}
            height={400}
            width={300}
            className={`${styles.TheImage}`}
          />
        </div>
        <div className={`${styles.TextPortion}`}>
          <p className={`${styles.TextHeading}`}></p>
        </div>
      </div>
      <div className={styles.RightContainer}>
        <p className={`${styles.TextPortion}`}>
          {" "}
          <p className={`${styles.TextHeading}`}>Master Yoda</p>
        </p>
        <div className={`${styles.DescriptionCard}`}></div>
        <div className={`${styles.TextPortion}`}>
          <p className={`${styles.TextParagraph}`}>
            Master Yoda, one of the most legendary Jedi Masters in the Star Wars
            universe, is a symbol of wisdom, power, and deep connection to the
            Force. Despite his small stature and ancient appearance, Yoda is one
            of the most formidable warriors and strategists in the galaxy. He
            served on the Jedi Council for over 800 years, training generations
            of Jedi, including Luke Skywalker, Obi-Wan Kenobi, and Count Dooku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSpaceContainer;
