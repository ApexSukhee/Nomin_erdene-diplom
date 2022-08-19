import Link from "next/link"
import { slugify } from "../utils/helpers"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { navItemLength } from "../ecommerce.config"

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    categories = categories.slice(0, navItemLength)
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div
            className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          "
          >
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/">
                <a aria-label="Home">
                  <img src="/logo.png" alt="logo" width="90" height="28" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              <Link href="/">
                <a aria-label="Home">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Нүүр
                  </p>
                </a>
              </Link>
              <Link href="/category/new-arrivals">
                <a aria-label="new-arrivals">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Шинээр ирсэн
                  </p>
                </a>
              </Link>
              <Link href="/category/sofas">
                <a aria-label="sofas">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Буйдан
                  </p>
                </a>
              </Link>
              <Link href="/category/living-room">
                <a aria-label="living-room">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Зочны өрөө
                  </p>
                </a>
              </Link>
              <Link href="/category/on-sale">
                <a aria-label="on-sale">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Хямдрал
                  </p>
                </a>
              </Link>
              <Link href="/category/chairs">
                <a aria-label="chairs">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Сандал
                  </p>
                </a>
              </Link>
              {/* {categories.map((category, index) => (
                <Link href={`/category/${slugify(category)}`} key={index}>
                  <a aria-label={category}>
                    <p
                      className="
                          sm:mr-8 sm:mb-0
                          mb-4 text-left text-smaller mr-4
                        "
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                  </a>
                </Link>
              ))} */}
              <Link href="/categories">
                <a aria-label="All categories">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  "
                  >
                    Бүгд
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <footer className="flex justify-center">
        <div
          className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300"
        >
          <span className="block text-gray-700 text-xs">Хийсэн:</span>
          <div
            className="
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          "
          >
            <Link href="/admin">
              <a aria-label="Admin panel">
                <p className="text-sm font-semibold">Админ</p>
              </a>
            </Link>
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
