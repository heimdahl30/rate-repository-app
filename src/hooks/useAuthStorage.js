import { useContext } from "react";
import { AuthStorageContext } from "../contexts/AuthStorageContexts";

const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export default useAuthStorage;
