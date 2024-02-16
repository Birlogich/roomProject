import styles from "./main.module.scss";
import leftArrow from "../../assets/icon-angle-left.svg";
import leftRight from "../../assets/icon-angle-right.svg";
import { Header } from "../Header/Header";
import arrOfData from "../data/siteData.ts";
import { useEffect, useState } from "react";
import { useGetWidth } from "../../customHooks/useGetWidth.js";

export const Main = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageInfo, setPageInfo] = useState(arrOfData[0]);

  const [width] = useGetWidth();

  useEffect(() => {
    if (pageNumber > arrOfData.length - 1) {
      setPageNumber(0);
    }
    if (pageNumber < 0) {
      setPageNumber(arrOfData.length - 1);
    } else {
      setPageInfo(arrOfData[pageNumber]);
    }
  }, [pageNumber]);

  const Buttons = () => {
    return (
      <div className={styles.buttons}>
        <button onClick={() => setPageNumber(pageNumber - 1)}>
          <img src={leftArrow} alt="button-left" />
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>
          <img src={leftRight} alt="button-right" />
        </button>
      </div>
    );
  };

  return (
    <>
      {pageInfo && (
        <div className={styles.main}>
          <div className={styles.top_picture}>
            {width <= 640 && <Buttons />}
            <img src={pageInfo.mainPictureUrl} />
            <Header />
          </div>
          <div className={styles.top_description}>
            <h1>{pageInfo.h1}</h1>
            <p>{pageInfo.mainDescription}</p>
            <button>shop now</button>
            {width > 640 && <Buttons />}
          </div>
          <div className={styles.btm_left_picture}></div>
          <div className={styles.btm_description}>
            <h2>ABOUT OUR FURNITURE</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.{" "}
            </p>
          </div>
          <div className={styles.btm_right_picture}></div>
        </div>
      )}
    </>
  );
};
