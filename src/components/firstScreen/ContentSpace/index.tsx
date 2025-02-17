import React from "react";
import styles from "./ContentSpace.module.css";
import Navbar from "@components/components/firstScreen/Navbar";
import ContentSpaceContainer from "../ContentSpaceContent";

const Contentspace = () => {
  return (
    <div className={`${styles.ContentSpace}`}>
      <Navbar />
      <ContentSpaceContainer />
    </div>
  );
};

export default Contentspace;
