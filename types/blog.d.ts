export type ImageAsset = {
  _ref: string;
  _type: string;
};

export type Image = {
  _type: string;
  asset: ImageAsset;
};

export type Author = {
  name: string;
  picture: Image;
};

export type BlogCardType = {
  title: string;
  date: string;
  excerpt: string;
  coverImage: Image;
  slug: string;
  author: Author;
  _id: string;
};
