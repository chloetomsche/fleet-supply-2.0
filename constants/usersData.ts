//Ensures every object in the array has the correct structure. Error will occur if you forget to add a field or add a wrong one
export type User = {
  first_name: string | null;
  last_name: string | null;
  user_email: string;
  user_password: string;
  user_phone: string | null;
  user_address_line1: string | null;
  user_address_line2: string | null;
  user_address_city: string | null;
  user_address_state: string | null;
  user_address_zip: string | null;
  user_role: string;
};

export const users: User[] = [
  {
    first_name: null,
    last_name: null,
    user_email: "3makori14@gmail.com",

    //TypeScript cannot access the env. files as its a Node.js file so it can never confirm if there's even a value for the key. Always use ! if you're certain there's a value with the associated key
    user_password: process.env.TEST_USER_PASSWORD_1!,

    user_phone: null,
    user_address_line1: null,
    user_address_line2: null,
    user_address_city: null,
    user_address_state: null,
    user_address_zip: null,
    user_role: "customer",
  },
  {
    first_name: null,
    last_name: null,
    user_email: "chloe_tomsche@yahoo.com",
    user_password: process.env.TEST_USER_PASSWORD_2!,
    user_phone: null,
    user_address_line1: null,
    user_address_line2: null,
    user_address_city: null,
    user_address_state: null,
    user_address_zip: null,
    user_role: "admin",
  },
  {
    first_name: null,
    last_name: null,
    user_email: "mrtomsche2001@gmail.com",
    user_password: process.env.TEST_USER_PASSWORD_3!,
    user_phone: null,
    user_address_line1: null,
    user_address_line2: null,
    user_address_city: null,
    user_address_state: null,
    user_address_zip: null,
    user_role: "customer",
  },
];
