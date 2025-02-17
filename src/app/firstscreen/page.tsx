import React from "react";
import styles from "./Screen.module.css";
import Sidebar from "@components/components/firstScreen/Sidebar";
import Contentspace from "@components/components/firstScreen/ContentSpace";

const page = () => {
  return (
    <div className={`${styles.primitiveParent}`}>
      <div className={`${styles.ParentHolder}`}>
        <Sidebar />
        <Contentspace />
      </div>
    </div>
  );
};

export default page;
