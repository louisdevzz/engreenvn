"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import config from "@/config/config.json";
import { getActiveLanguages } from "@/lib/languageParser";
import { slugSelector } from "@/lib/utils/slugSelector";
import { INavigationLink } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";

const Header = ({
  lang,
  menu,
}: {
  lang: string;
  menu: { main: INavigationLink[] };
}) => {
  const activeLanguages = getActiveLanguages();
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0 flex flex-row gap-2 w-full items-center justify-between">
          <div className="flex flex-row gap-5 ">
            <Logo lang={lang} />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold lg:text-3xl md:text-2xl text-3xl text-[#324350] underline">ENGREENVN</p>
              <small className="font-semibold lg:text-lg md:text-sm text-xl text-[#324350c7] italic">Where Words Grow Green</small>
            </div>
          </div>
          {/* <div className="md:flex hidden flex-row gap-4 pr-5 text-center">
            <div className="flex flex-row gap-4 rounded-lg border border-gray-400 px-5 py-2">
              <div className="flex flex-col text-center">
                <p className="text-sm lg:text-xl font-semibold">08</p>
                <small>days</small>
              </div>
              <p className="font-semibold">:</p>
              <div className="flex flex-col text-center">
                <p className="text-sm lg:text-xl font-semibold">00</p>
                <small>hours</small>
              </div>
              <p className="font-semibold">:</p>
              <div className="flex flex-col text-center">
                <p className="text-sm lg:text-xl font-semibold">00</p>
                <small>minutes</small>
              </div>
            </div>
          </div> */}
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"
        >
          <svg
            id="show-button"
            className="h-7 fill-current block"
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className="h-7 fill-current hidden"
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span
                    className={`nav-link inline-flex items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={slugSelector(lang, child.url)}
                          className={`nav-dropdown-link block ${
                            (pathname === `${child.url}/` ||
                              pathname === child.url) &&
                            "active"
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={slugSelector(lang, menu.url)}
                    className={`nav-link block ${
                      (pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {/* {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )} */}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <button
              className="border-border h-8 text-dark hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white dark:hover:text-darkmode-primary"
              aria-label="search"
              data-search-trigger
            >
              <IoSearch />
            </button>
          )}
          {/* <ThemeSwitcher className="mr-5" /> */}

          {/* {activeLanguages.length > 1 && (
            <LanguageSwitcher
              lang={lang}
              className="mr-5 pl-2 py-1 dark:bg-darkmode-theme-light rounded"
            />
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
