import { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";
import { subCategories, filters } from "../../../constants";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export default function MobileDialog() {
  const { isMobileFilterBtnClicked, setIsMobileFilterBtnClicked } =
    useContext(FilterContext);
  return (
    <Dialog
      open={isMobileFilterBtnClicked}
      onClose={setIsMobileFilterBtnClicked}
      className="relative z-[10000] lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-blueVeryDark-900">
              التصنيف
            </h2>
            <button
              type="button"
              onClick={() => setIsMobileFilterBtnClicked(false)}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-blueVeryDark-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Filters */}
          <form className="mt-4 border-t border-blueVeryDark-200">
            <h3 className="sr-only">Categories</h3>
            <ul
              role="list"
              className="px-2 py-3 font-medium text-blueVeryDark-900"
            >
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="block px-2 py-3">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure
                key={section.id}
                as="div"
                className="border-t border-blueVeryDark-200 px-4 py-6"
              >
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-blueVeryDark-700 hover:text-blueVeryDark-900">
                    <span className="font-medium text-blueVeryDark-900">
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
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex gap-1 items-center"
                      >
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-blueVeryDark-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-blueVeryDark-700"
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
        </DialogPanel>
      </div>
    </Dialog>
  );
}
