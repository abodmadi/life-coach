import { adminAccountList } from "@/constants";
import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteData } from "@/Services/AxiosAPIServices";
import toast from "react-hot-toast";
import ButtonLoader from "@/components/ButtonLoader";
import { authUrl } from "@/utils";
import {
  signOutFailure,
  signOutStart,
  signOutSuccess,
} from "@/redux/state_slices/user/user_slice";

export default function Navbar() {
  const [isAdminProfileOpen, setIsAdminProfileOpen] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AdminDashboardContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  console.table(currentUser);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["adminSignOut"],
    mutationFn: async (endPoint) => await deleteData(endPoint),
    onMutate: () => {
      dispatch(signOutStart());
      setIsLoading(true);
    },
    onError: (error) => {
      //toast.error(error?.response?.data?.errors[0]?.msg);
      toast.error(error?.message);
      dispatch(signOutFailure(error?.message));
      setIsLoading(false);
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      //setIsLoading(false);
      dispatch(signOutSuccess(data));
      //setIsAdminProfileOpen(false);
      //navigate("/sign-in");
    },
  });
  return (
    <nav className="fixed bg-white top-0 z-50 w-full  border-b border-gray-200 h-16">
      <div className="container h-full w-10/12 px-3 py-3 lg:px-5 lg:pl-3 ">
        <div className=" flex justify-between">
          {/* Open Button */}
          <div className="flex justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            {/* Company Logo */}
            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Flowbite
              </span>
            </a>
          </div>
          {/* Admin Account */}
          <div className=" flex items-center">
            <div className="relative flex flex-col items-center">
              <div className="self-end">
                <button
                  type="button"
                  onClick={() => setIsAdminProfileOpen(!isAdminProfileOpen)}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-12 rounded-full object-cover "
                    src={currentUser?.currentUser?.user?.image}
                    alt="admin photo"
                  />
                </button>
              </div>

              <div
                className={`${
                  !isAdminProfileOpen && "hidden"
                } z-50 mt-1.5 absolute left-0 top-full text-base list-none bg-white divide-y divide-gray-100 rounded shadow `}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-gray-900 line-clamp-1" role="none">
                    {currentUser?.currentUser?.user?.firstName}{" "}
                    {currentUser?.currentUser?.user?.lastName}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate "
                    role="none"
                  >
                    {currentUser?.currentUser?.user?.email}
                  </p>
                </div>
                <ul className="py-1 px-2" role="none">
                  {adminAccountList.map((item, index) => (
                    <li key={index} className="cursor-pointer my-px">
                      <Link
                        to={item.to}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md `}
                        role="menuitem"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li className="cursor-pointer my-px">
                    <div
                      onClick={() => {
                        mutate(
                          authUrl +
                            "/sign-out/" +
                            currentUser?.currentUser?.user?.id
                        );
                        //navigate();
                      }}
                      className="flex items-center gap-x-2 px-4 py-2 text-sm text-gray-700 bg-red-100 hover:bg-red-200 rounded-lg"
                      role="menuitem"
                    >
                      {isLoading && <ButtonLoader />}
                      تسجيل الخروج
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
