import React from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Sidebar = () => {
  return (
    <div className={`${styles.Sidebar}`}>
      <div className={`${styles.LogoContainer}`}>
        <Image
          src={"/Assets/Images/RTrimLogo.png"}
          alt="Image"
          width={40}
          height={40}
        />
      </div>
      <div className={`${styles.SidebarFooter}`}>
        <div className={`${styles.TextParagraph}`}>
          <h2>Hola! Wassup</h2>
          <p>Welcome to this page, a place to share your thoughts</p>
          <p>
            You believe it we shape it together and see your idea come a reality
          </p>
        </div>
        <div className={`${styles.ContactIcons}`}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={`${styles.IconContainer}`}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={`${styles.IconContainer}`}
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={`${styles.IconContainer}`}
          >
            <EmailOutlinedIcon style={{ margin: 0 }} />
          </a>
        </div>
        <div className={`${styles.ExtendedBracket}`}>
          <div className={`${styles.SliderTrack}`}>
            <div className={`${styles.SliderButton}`}>
              <ArrowForwardOutlinedIcon />
            </div>
            <div className={`${styles.TextBar}`}>Swipe right to begin</div>
          </div>
          <div className={`${styles.ExtendedBracketAfter}`}>
            <div className={`${styles.ExtendedBracketAfterSub}`}></div>
          </div>
          <div className={`${styles.ExtendedBracketBefore}`}>
            <div className={`${styles.ExtendedBracketBeforeSub}`}></div>
          </div>
          <div className={`${styles.ExtendedBracketsBorder}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
