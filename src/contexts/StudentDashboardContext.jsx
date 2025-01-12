import { createContext, useState } from "react";

const StudentDashboardContext = createContext();

function StudentDashboardProvider({ children }) {
  // Dialog Controllers:
  const [isDialogClicked, setIsDialogClicked] = useState(false);
  const [isCourseOpened, setIsCourseOpened] = useState(false);
  return (
    <StudentDashboardContext.Provider
      value={{
        isDialogClicked,
        setIsDialogClicked,
        isCourseOpened,
        setIsCourseOpened,
      }}
    >
      {children}
    </StudentDashboardContext.Provider>
  );
}

export { StudentDashboardContext, StudentDashboardProvider };
