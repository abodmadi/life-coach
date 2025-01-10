import { createContext, useState } from "react";

const StudentDashboardContext = createContext();

function StudentDashboardProvider({ children }) {
  // Dialog Controllers:
  const [isDialogClicked, setIsDialogClicked] = useState(false);
  return (
    <StudentDashboardContext.Provider
      value={{
        isDialogClicked,
        setIsDialogClicked,
      }}
    >
      {children}
    </StudentDashboardContext.Provider>
  );
}

export { StudentDashboardContext, StudentDashboardProvider };
