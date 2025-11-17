import { createContext, useState } from "react";

// 1️⃣ Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 2️⃣ Track current user (null if not logged in)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing currentUser from localStorage:", error);
      localStorage.removeItem("currentUser"); // optional cleanup
      return null;
    }
  });

  // 3️⃣ Register a new user
  // Accepts { name, email, role } from form/API
  const registerUser = (user) => {
    setCurrentUser(user); // save user in state
    localStorage.setItem("currentUser", JSON.stringify(user)); // persist in localStorage
  };

  // 4️⃣ Login user (patient or doctor)
  const loginUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // 5️⃣ Provide state and functions to the app
  return (
    <AuthContext.Provider
      value={{
        currentUser,   // { email, name, role } or null
        registerUser,  // call this after registration
        loginUser,     // call this after login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
