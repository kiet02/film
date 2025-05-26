const http = 'http://10.0.2.2:3000';
const Apis = {
  login: `${http}/api/users/login`,
  register: `${http}/api/users/register`,
  getUser: `${http}/api/users/profile`,
  getChangePassword: `${http}/api/users/change-password`,
  getExplore: `${http}/api/books/explore/random`,
  getCategoris: (name: string) => `${http}/api/genres/${name}`,
  getAllCategoris: `${http}/api/genres/all`,
  getBooK: (id: number | string) => `${http}/api/books/${id}`,
  getChapter: (id: number | string, BookId: string | number) =>
    `${http}/api/books/${BookId}/chapters/${id}`,
  getChapterAll: (BookId: number | string) =>
    `${http}/api/books/${BookId}/chaptersId`,
};
export { Apis };
