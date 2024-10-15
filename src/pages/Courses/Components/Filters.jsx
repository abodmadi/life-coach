import { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";
import CoursesGrid from "./CoursesGrid";
import { subCategories, filters, sortOptions } from "../../../constants";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import MobileDialog from "./MobileDialog";
import { Link } from "react-router-dom";
export default function Filters() {
  const { setIsMobileFilterBtnClicked } = useContext(FilterContext);
  //const [isSortOptionClicked, setIsSortOptionClicked] = useState()
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white-200">
      <div>
        {/* Mobile filter dialog */}
        <MobileDialog />
        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Header */}
          <div className="flex items-baseline justify-between border-b border-blueVeryDark-200 pb-6 pt-24">
            <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-blueVeryDark-700">
            الدورات <span className="text-blueVeryDark-950">والورش التعليمية</span>
            </h1>

            <div className="flex gap-1 items-center">
              {/* Sort Menu and Lis */}
              <Menu as="div"  className="relative inline-block">
                <div>
                  <MenuButton className="group inline-flex gap-1 justify-center text-sm font-medium text-blueVeryDark-900 hover:text-blueVeryDark-700 ">
                    الترتيب
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-blueVeryDark-700 group-hover:text-blueVeryDark-900"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <Link
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-blueVeryDark-900 "
                              : "text-blueVeryDark-600",
                            "block px-4 py-2 text-sm data-[focus]:bg-blueVeryDark-100/50"
                          )}
                        >
                          {option.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
                {/* Grid Button */}
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => setIsMobileFilterBtnClicked(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>

            </div>

          </div>
          {/* Body of Filter */}
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            {/* Sections Grid System */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <CoursesGrid />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}


