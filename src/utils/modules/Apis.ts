const http = 'http://10.0.2.2:3000';
const Apis = {
  login: `${http}/api/users/login`,
  register: `${http}/api/users/register`,
  getUser: `${http}/api/users/profile`,
  getChangePassword: `${http}/api/users/change-password`,
  getExplore: `${http}/api/books/explore/random`,
  getCategoris: (name: string) => `${http}/api/genres/${name}`,
  getAllCategoris: `${http}/api/genres/all`,
};
export { Apis };
