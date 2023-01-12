import { useEffect, useState } from "react";
import { BREAKPOINT } from "../../helpers/types";
import useBreakpoint from "../../helpers/useBreakpoint";
import CustomImage from "../common/customImage";
import styles from "./whoAreWe.module.scss";

interface IWhoAreWeData {
  name: string;
  role: string;
  imgUrl: string;
}
const whoAreWeData: IWhoAreWeData[] = [
  {
    name: "Kimberly 1",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 2",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 3",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 4",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 5",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 6",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 7",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 8",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 9",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
  {
    name: "Kimberly 10",
    role: "Conference Director",
    imgUrl: "/img/whoAreWeTest.jpg",
  },
];

const PAGE_SIZE_DESKTOP = 5;
const PAGE_SIZE_MIDSIZE = 3;
const PAGE_SIZE_MOBILE = 4;

export default function WhoAreWe() {
  const breakpoint = useBreakpoint();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(PAGE_SIZE_DESKTOP);

  useEffect(() => {
    if (breakpoint === BREAKPOINT.DESKTOP) {
      setTotalPages(Math.ceil(whoAreWeData.length / PAGE_SIZE_DESKTOP));
      setPageSize(PAGE_SIZE_DESKTOP);
    } else if (breakpoint === BREAKPOINT.MIDSIZE) {
      setTotalPages(Math.ceil(whoAreWeData.length / PAGE_SIZE_MIDSIZE));
      setPageSize(PAGE_SIZE_MIDSIZE);
    } else {
      setTotalPages(Math.ceil(whoAreWeData.length / PAGE_SIZE_MOBILE));
      setPageSize(PAGE_SIZE_MOBILE);
    }
  }, [breakpoint]);
  const renderWhoAreWeBlocks = () => {
    const renderWhoAreWeBlock = (
      name: string,
      role: string,
      imgUrl: string,
      key: number
    ) => {
      return (
        <div className={styles.whoAreWeBlock}>
          <CustomImage
            src={imgUrl}
            alt={name}
            className={styles.whoAreWeImage}
          />
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      );
    };

    const renderedBlocks = [];
    for (
      let i = (currentPage - 1) * pageSize;
      i < currentPage * pageSize && i < whoAreWeData.length;
      i++
    ) {
      renderedBlocks.push(
        renderWhoAreWeBlock(
          whoAreWeData[i].name,
          whoAreWeData[i].role,
          whoAreWeData[i].imgUrl,
          i
        )
      );
    }
    return renderedBlocks;
  };

  const renderPageController = () => {
    const renderedPages = [];
    for (let i = 1; i <= totalPages; i++) {
      renderedPages.push(
        <div
          className={currentPage === i ? styles.selected : ""}
          onClick={() => {
            setCurrentPage(i);
          }}
        />
      );
    }
    return renderedPages;
  };

  return (
    <section className={styles.whoAreWeContainer}>
      <div className={styles.top}>
        <div className={styles.body}>
          <h2>Who are we?</h2>
          <h4>Meet our Awesome Conference Team!</h4>
        </div>
        {breakpoint !== BREAKPOINT.MOBILE && (
          <div className={styles.pageController}>{renderPageController()}</div>
        )}
      </div>
      <div className={styles.whoAreWeGrid}>{renderWhoAreWeBlocks()}</div>
      {breakpoint === BREAKPOINT.MOBILE && (
        <div className={styles.pageController}>{renderPageController()}</div>
      )}
    </section>
  );
}
