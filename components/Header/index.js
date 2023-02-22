import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const postsExist = posts?.attributes?.links?.length > 0;
  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `https://portalchrome.herokuapp.com/api/header?populate=*`
      );
      const parsedPosts = await res.json();
      const { data } = parsedPosts;

      setPosts(data);
    } catch (error) {
      console.warn("There was an error", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!postsExist) return;

  const { links, logo } = posts?.attributes;

  console.log("postsExist: ", postsExist);
  console.log("posts: ", posts);

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <HamburguerMenuIcon setIsModalOpen={setIsModalOpen} />
        <Link className={styles.nav__link} href="/">
          {/* <Logo /> */}
          <img
            src={logo?.data?.attributes?.url}
            alt={logo?.data?.attributes?.alternativeText}
            loading="lazy"
          />
        </Link>
        <div className={styles.navWrapper}>
          {links.map((item) => {
            const routePath = item.url;

            if (routePath === "/") return;

            return (
              <Link
                key={item.id}
                className={
                  currentRoute === routePath
                    ? `${styles.nav__link} nav__link-active`
                    : styles.nav__link
                }
                href={routePath}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <Menu
        routes={links}
        currentRoute={currentRoute}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </header>
  );
};

const Logo = () => (
  <div className="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="233"
      height="60"
      viewBox="0 0 233 60"
      fill="none"
    >
      <rect width="232.881" height="60" fill="white" />
      <path
        d="M8.316 33.6402H6.132V39.7442H1.82V20.8722H8.316C10.4067 20.8722 12.096 21.4602 13.384 22.6362C14.6907 23.8122 15.344 25.3055 15.344 27.1162C15.344 29.1882 14.6627 30.7935 13.3 31.9322C11.956 33.0708 10.2947 33.6402 8.316 33.6402ZM7.812 24.3162H6.132V30.2242H7.56C9.83733 30.2242 10.976 29.1882 10.976 27.1162C10.976 25.2495 9.92133 24.3162 7.812 24.3162ZM35.4893 30.2522C35.4893 33.1455 34.6493 35.4882 32.9693 37.2802C31.308 39.0535 29.0867 39.9402 26.3053 39.9402C23.5053 39.9402 21.2747 39.0535 19.6133 37.2802C17.952 35.5068 17.1213 33.1642 17.1213 30.2522C17.1213 27.3588 17.952 25.0255 19.6133 23.2522C21.2933 21.4602 23.524 20.5642 26.3053 20.5642C29.1053 20.5642 31.336 21.4508 32.9973 23.2242C34.6587 24.9975 35.4893 27.3402 35.4893 30.2522ZM22.9733 26.0522C22.152 27.0788 21.7413 28.4788 21.7413 30.2522C21.7413 32.0255 22.152 33.4348 22.9733 34.4802C23.7947 35.5068 24.9053 36.0202 26.3053 36.0202C27.7053 36.0202 28.816 35.5068 29.6373 34.4802C30.4587 33.4348 30.8693 32.0255 30.8693 30.2522C30.8693 28.4788 30.4587 27.0788 29.6373 26.0522C28.816 25.0068 27.7053 24.4842 26.3053 24.4842C24.9053 24.4842 23.7947 25.0068 22.9733 26.0522ZM45.1025 24.3722H42.9745V29.6922H45.0185C46.8852 29.6922 47.8185 28.7775 47.8185 26.9482C47.8185 26.1455 47.5759 25.5202 47.0905 25.0722C46.6052 24.6055 45.9425 24.3722 45.1025 24.3722ZM42.9745 39.7442H38.6625V20.8722H45.1865C47.2959 20.8722 48.9852 21.4322 50.2545 22.5522C51.5425 23.6722 52.1865 25.1282 52.1865 26.9202C52.1865 29.6082 51.0385 31.4655 48.7425 32.4922L53.5305 39.7442H48.3785L44.2905 33.1922H42.9745V39.7442ZM68.6578 24.3442H64.0658V39.7442H59.7258V24.3442H55.1058V20.8722H68.6578V24.3442ZM77.2522 31.7362L77.0562 32.4082H81.5922L81.3962 31.7362C80.8549 29.9068 80.4069 28.3482 80.0522 27.0602C79.7162 25.7722 79.5109 24.9415 79.4362 24.5682L79.3242 24.0082C79.1749 25.0348 78.4842 27.6108 77.2522 31.7362ZM74.8722 39.7442H70.3642L76.6642 20.8722H82.0962L88.3962 39.7442H83.7762L82.6282 35.8802H76.0202L74.8722 39.7442ZM102.38 39.7442H91.0963V20.8722H95.4083V35.9642H102.38V39.7442ZM126.16 38.9042C125.021 39.6135 123.379 39.9682 121.232 39.9682C118.469 39.9682 116.155 39.0815 114.288 37.3082C112.44 35.5162 111.516 33.2015 111.516 30.3642C111.516 27.4895 112.412 25.1468 114.204 23.3362C116.015 21.5255 118.367 20.6202 121.26 20.6202C123.388 20.6202 125.021 20.9748 126.16 21.6842V25.8282C124.76 24.9695 123.201 24.5402 121.484 24.5402C119.972 24.5402 118.703 25.0722 117.676 26.1362C116.649 27.1815 116.136 28.5908 116.136 30.3642C116.136 32.1002 116.649 33.4815 117.676 34.5082C118.703 35.5162 120.028 36.0202 121.652 36.0202C123.407 36.0202 124.909 35.5722 126.16 34.6762V38.9042ZM145.18 39.7442H140.84V32.2122H133.924V39.7442H129.612V20.8722H133.924V28.5442H140.84V20.8722H145.18V39.7442ZM155.471 24.3722H153.343V29.6922H155.387C157.254 29.6922 158.187 28.7775 158.187 26.9482C158.187 26.1455 157.945 25.5202 157.459 25.0722C156.974 24.6055 156.311 24.3722 155.471 24.3722ZM153.343 39.7442H149.031V20.8722H155.555C157.665 20.8722 159.354 21.4322 160.623 22.5522C161.911 23.6722 162.555 25.1282 162.555 26.9202C162.555 29.6082 161.407 31.4655 159.111 32.4922L163.899 39.7442H158.747L154.659 33.1922H153.343V39.7442ZM184.123 30.2522C184.123 33.1455 183.283 35.4882 181.603 37.2802C179.941 39.0535 177.72 39.9402 174.939 39.9402C172.139 39.9402 169.908 39.0535 168.247 37.2802C166.585 35.5068 165.755 33.1642 165.755 30.2522C165.755 27.3588 166.585 25.0255 168.247 23.2522C169.927 21.4602 172.157 20.5642 174.939 20.5642C177.739 20.5642 179.969 21.4508 181.631 23.2242C183.292 24.9975 184.123 27.3402 184.123 30.2522ZM171.607 26.0522C170.785 27.0788 170.375 28.4788 170.375 30.2522C170.375 32.0255 170.785 33.4348 171.607 34.4802C172.428 35.5068 173.539 36.0202 174.939 36.0202C176.339 36.0202 177.449 35.5068 178.271 34.4802C179.092 33.4348 179.503 32.0255 179.503 30.2522C179.503 28.4788 179.092 27.0788 178.271 26.0522C177.449 25.0068 176.339 24.4842 174.939 24.4842C173.539 24.4842 172.428 25.0068 171.607 26.0522ZM191.188 39.7442H186.876L188.5 20.8722H193.232L195.864 27.7042C196.312 28.8428 196.694 29.8882 197.012 30.8402C197.329 31.7922 197.534 32.4642 197.628 32.8562L197.768 33.4162C198.066 32.1842 198.72 30.2802 199.728 27.7042L202.388 20.8722H207.12L209.08 39.7442H204.768L204.068 32.4362L203.704 26.9202C203.218 28.3202 202.546 30.1588 201.688 32.4362L199.028 39.5482H196.48L193.848 32.4362C193.418 31.2788 193.054 30.2428 192.756 29.3282C192.457 28.4135 192.261 27.7788 192.168 27.4242L192.028 26.9202C192.028 28.2455 191.944 30.0842 191.776 32.4362L191.188 39.7442ZM224.244 39.7442H212.512V20.8722H224.132V24.3162H216.852V28.6002H223.348V32.0162H216.852V36.3002H224.244V39.7442Z"
        fill="#878787"
      />
      <rect y="41.8605" width="57.0792" height="4.88372" fill="#259645" />
      <rect
        x="57.0791"
        y="41.8605"
        width="57.0792"
        height="4.88372"
        fill="#E23A2E"
      />
      <rect
        x="114.158"
        y="41.8605"
        width="57.0792"
        height="4.88372"
        fill="#FCC31E"
      />
      <rect
        x="171.752"
        y="41.8605"
        width="57.0792"
        height="4.88372"
        fill="#1A73E8"
      />
    </svg>
  </div>
);

const HamburguerMenuIcon = ({ setIsModalOpen }) => (
  <div className="hamburguer-menu" onClick={() => setIsModalOpen(true)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M3.75 22.5V20.625H26.25V22.5H3.75ZM3.75 15.9375V14.0625H26.25V15.9375H3.75ZM3.75 9.375V7.5H26.25V9.375H3.75Z"
        fill="black"
      />
    </svg>
  </div>
);

const Menu = ({ routes, currentRoute, setIsModalOpen, isModalOpen }) => (
  <section
    id="menu"
    className={isModalOpen ? `${styles.menuLayer}` : styles.menuLayerHidden}
    onClick={(evt) => {
      if (evt.target.id === "menu") {
        setIsModalOpen(false);
      }
    }}
  >
    <div className={styles.menu}>
      <div className={styles.menuLink__wrapper}>
        {routes.map((item) => {
          const routePath = item.url;
          return (
            <Link
              key={item.id}
              onClick={() => setIsModalOpen(false)}
              className={
                currentRoute === routePath
                  ? `${styles.nav__link} nav__link-active`
                  : styles.nav__link
              }
              href={routePath}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default Header;
