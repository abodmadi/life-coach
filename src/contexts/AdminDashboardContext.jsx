import { createContext, useState } from "react";

const AdminDashboardContext = createContext();

function AdminDashboardProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Dialog Controllers:
  const [isAddNewDialogClicked, setIsAddNewDialogClicked] = useState(false);
  const [isUpdateDialogClicked, setIsUpdateDialogClicked] = useState(false);
  const [isDeleteDialogClicked, setIsDeleteDialogClicked] = useState(false);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [updatedItemId, setUpdatedItemId] = useState(null);
  return (
    <AdminDashboardContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isAddNewDialogClicked,
        setIsAddNewDialogClicked,
        isUpdateDialogClicked,
        setIsUpdateDialogClicked,
        isDeleteDialogClicked,
        setIsDeleteDialogClicked,
        deletedItemId,
        setDeletedItemId,
        updatedItemId,
        setUpdatedItemId,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
}

export { AdminDashboardContext, AdminDashboardProvider };
