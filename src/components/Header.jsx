import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const [isProfileMenuClicked, setIsProfileMenuClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeOutId, setHoverTimeOutId] = useState();
  const [menuTimeOutId, setMenuTimeOutId] = useState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.screen.height) {
      //console.log("tr",window.scrollY)
      setIsScrolled(true);
    } else {
      //console.log("fl",window.scrollY)
      setIsScrolled(false);
    }
  });
  function handelMouseEnter() {
    clearTimeout(hoverTimeOutId);

    !isClicked ? setIsHovered(true) : null;
  }
  function handelMouseLeave() {
    setHoverTimeOutId(
      setTimeout(() => {
        setIsHovered(false);
      }, 300)
    );
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
      setIsMobileMenuOpen(false);
    }
  });

  function handelLogout() {
    console.log("Logout.....");
  }
  return (
    <header
      className={` ${
        isScrolled ? "bg-white  " : "bg-blueLightGrayish-950"
      } sticky top-0 z-50 font-elMessiri `}
    >
      <div
        className={`mx-auto max-w-screen-xl transition-all duration-1000 px-4 sm:px-6 lg:px-8  ${style.hero}`}
      >
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to={"/"} className="block">
              <h1 className="font-extrabold cursor-pointer text-xl sm:text-2xl flex">
                <span className="text-blueVeryDark-500">رحلـ</span>
                <span className="text-blueVeryDark-950">تي</span>
              </h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    to={"/"}
                    className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                  >
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/courses"}
                    className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                  >
                    الدورات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                    to={"/blogs"}
                  >
                    المقالات
                  </Link>
                </li>
                <li>
                  <Link
                    className="hidden md:inline text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                    to={"/"}
                  >
                    عن رحلتي
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                    to={"/sessions"}
                  >
                    الجلسات الإرشادية
                  </Link>
                </li>
                {/* More Dropdown */}
                <li>
                  <div
                    className="relative inline-block"
                    onClick={() => setIsHovered(!isHovered)}
                    onMouseEnter={handelMouseEnter}
                    onMouseLeave={handelMouseLeave}
                  >
                    <div
                      className={`cursor-pointer flex gap-x-1 items-center text-blueVeryDark-700 transition ${
                        isHovered && "text-blueVeryDark-950"
                      }`}
                    >
                      <p>المزيد</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block w-4 h-4" // Adjust the size here
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {/* Dropdown menu */}
                    {isHovered && !isClicked && (
                      <div
                        className="absolute -end-5 top-8 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-xl"
                        role="menu"
                      >
                        <div className="p-2">
                          <Link
                            to={"/dashboard"}
                            className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                            role="menuitem"
                          >
                            المنتديات و المجتمعات
                          </Link>
                          <Link
                            className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                            role="menuitem"
                            to={"/profile"}
                          >
                            التقييمات و التحديات
                          </Link>
                          <Link
                            to={"/dashboard"}
                            className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                            role="menuitem"
                          >
                            الأسئلة الشائعة
                          </Link>
                          <Link
                            to={"/dashboard"}
                            className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                            role="menuitem"
                          >
                            اتصل بنا
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>

            {/* Profile Icon and List */}
            <div className="hidden md:relative md:block">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User image"
                className="cursor-pointer rounded-full size-10 object-cover"
                onClick={(img) =>
                  document.addEventListener("click", (e) => {
                    if (e.target == img.target) {
                      setIsClicked(!isClicked);
                    } else {
                      setIsClicked(false);
                    }
                  })
                }
              />

              {isClicked && !isHovered && (
                <div
                  className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <Link
                      className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                      role="menuitem"
                      to={"/profile"}
                    >
                      My profile
                    </Link>

                    <Link
                      to={"/dashboard"}
                      className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                      role="menuitem"
                    >
                      Dashboard
                    </Link>

                    <Link
                      to={"/"}
                      className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                      role="menuitem"
                    >
                      Team settings
                    </Link>
                  </div>

                  <div className="p-2">
                    <button
                      onClick={handelLogout}
                      type="button"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="block md:hidden">
              <button
                onClick={() => {
                  if (!isMobileMenuOpen) {
                    setIsMobileMenuOpen(true);
                    clearTimeout(menuTimeOutId);
                  } else {
                    document
                      .getElementById("slideOutSelector")
                      .classList.add(`${style.dropDownOut}`);
                    setMenuTimeOutId(
                      setTimeout(() => {
                        setIsMobileMenuOpen(false);
                        document
                          .getElementById("slideOutSelector")
                          .classList.remove(`${style.dropDownOut}`);
                      }, 800)
                    );
                  }
                }}
                className={`${
                  isScrolled ? "bg-blueLightGrayish-950" : "bg-white"
                }rounded  p-2 text-gray-600 transition hover:text-gray-600/75`}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav id="slideOutSelector" className={`shadow-2xl mt-4`}>
            <ul
              className={`text-center max-h-80  overflow-y-scroll overscroll-none  divide-y divide-blueVeryDark-300 space-y-2 text-sm`}
            >
              <li className="pt-2">
                <Link
                  to={"/"}
                  className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                >
                  الصفحة الرئيسية
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  to={"/courses"}
                  className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                >
                  الدورات
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                  to={"/blogs"}
                >
                  المقالات
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                  to={"/"}
                >
                  عن رحلتي
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  className="text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                  to={"/sessions"}
                >
                  الجلسات الإرشادية
                </Link>
              </li>

              {/* More Dropdown */}
              <li className="pt-2">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center gap-x-1 cursor-pointer text-blueVeryDark-700 transition hover:text-blueVeryDark-950"
                >
                  <p>المزيد</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4" // Adjust the size here
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div
                    className="mt-0.5 w-full rounded-md border border-gray-100 bg-blueVeryDark-100/50 "
                    role="menu"
                  >
                    <div className="p-2">
                      <Link
                        to={"/dashboard"}
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                      >
                        المنتديات و المجتمعات
                      </Link>
                      <Link
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                        to={"/profile"}
                      >
                        التقييمات و التحديات
                      </Link>
                      <Link
                        to={"/dashboard"}
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                      >
                        الأسئلة الشائعة
                      </Link>
                      <Link
                        to={"/dashboard"}
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                      >
                        اتصل بنا
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Profile Dropdown */}
              <li className="py-2">
                <div
                  onClick={() => setIsProfileMenuClicked(!isProfileMenuClicked)}
                  className="mr-3 cursor-pointer text-blueVeryDark-700 transition hover:text-blueVeryDark-950 flex  items-center item gap-x-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user image"
                    className="rounded-full shadow-inner size-10 object-cover"
                  />
                  <p className="text-md ">نور علي</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4" // Adjust the size here
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {isProfileMenuClicked && (
                  <div
                    className="mt-0.5 mb-4 w-full rounded-md border border-gray-100 bg-blueVeryDark-100/50"
                    role="menu"
                  >
                    <div className="p-2">
                      <Link
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                        to={"/profile"}
                      >
                        My profile
                      </Link>
                      <Link
                        to={"/dashboard"}
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to={"/"}
                        className="block rounded-lg px-4 py-2 text-sm text-blueVeryDark-700 hover:bg-blueVeryDark-100 hover:text-blueVeryDark-950"
                        role="menuitem"
                      >
                        Team settings
                      </Link>
                    </div>

                    <div className="p-2">
                      <button
                        onClick={handelLogout}
                        type="button"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
