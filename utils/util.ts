import { BiPhone } from "react-icons/bi";

//CHECK IF VALUES ARE EITHER EMPTY, NULL OR UNDEFINED
export const areValuesEmpty = (obj: any) => {
  return Object.values(obj).some(
    (value) => value === "" || value === null || value === undefined
  );
};

//VALIDATE INPUTS
export const validateRegistration = (email: string, phone: string) => {
  // Email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  // Phone number validation using a regular expression (10-15 digits)
  const phoneRegex = /^\+?\d{10,15}$/;
  const isPhoneValid = phoneRegex.test(phone);

  let message = "";

  // Check email if provided
  if (email !== undefined && isEmailValid === false) {
    return (message = "Email is invalid");
  }

  // Check phone number if provided
  if (phone !== undefined && isPhoneValid === false) {
    return (message = "Phone number is invalid. It must be 10 to 15 digits.");
  }

  return true;
};
