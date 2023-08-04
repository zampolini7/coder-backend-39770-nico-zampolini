export const generateUserErrorInfo = (user) => {
  return `One or more properties where incomplete or not valid.
  List or require propiertes:
    *firs_name: need to be String, recived ${typeof user.first_name}
    *last_name: need to be String, recived ${typeof user.last_name} 
    *email: need to be String, recived ${typeof user.email}
  `;
};
