export type TProfileResponse = {
  avatar: string;
  avatar_path: null | string;
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  name: null | string;
  include_adult: boolean;
  userame: string;
};
export type TUser = {
  username: string;
  id: string;
  avatar: {
    gravatar: {
      hash: string;
    };
  };
};
