import { createContext, useState, ReactNode } from "react";

type ToastType = {
  id: number;
  headerIcon: string;
  headerText: string;
  message: string;
  headerBackground?: string;
};

interface ToastsContextType {
  addToast: (
    headerIcon: string,
    headerText: string,
    message: string,
    headerBackground?: string
  ) => void;
}

interface ToastsProviderProps {
  children: ReactNode;
}

export const ToastsContext = createContext<ToastsContextType | undefined>(
  undefined
);

export default function ToastsProvider({ children }: ToastsProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (
    headerIcon: string,
    headerText: string,
    message: string,
    headerBackground?: string
  ) => {
    const newToast: ToastType = {
      id: Date.now(),
      headerIcon,
      headerText,
      message,
      headerBackground,
    };
    setToasts([...toasts, newToast]);

    // Automatically remove the toast after 4 seconds
    setTimeout(() => {
      setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, 4000);
  };

  return (
    <ToastsContext.Provider value={{ addToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}
          >
            <div
              className={`p-4 flex justify-between ${
                toast.headerBackground
                  ? toast.headerBackground
                  : "bg-indigo-500"
              } rounded-t-lg`}
            >
              <div className="flex items-center">
                <span className="mr-2 text-lg">{toast.headerIcon}</span>
                <strong className="text-white text-lg">
                  {toast.headerText}
                </strong>
              </div>
              <small className="text-white ml-4">
                {new Date().toLocaleTimeString("he-il", {
                  hour12: false,
                  hour: "numeric",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </small>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4">
              <p className="text-gray-700 dark:text-gray-300">{toast.message}</p>
            </div>
          </div>
        ))}
      </div>
    </ToastsContext.Provider>
  );
}
