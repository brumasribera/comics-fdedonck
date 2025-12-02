export type CollectionId = 'figure1a' | 'noplane' | 'other' | 'posters';

export type CollectionDownload = {
  label: string;
  href: string;
};

export type CollectionItem = {
  title: string;
  description: string;
  image: string;
  fullImage: string;
  downloads?: CollectionDownload[];
};

export type Collection = {
  id: CollectionId;
  title: string;
  subtitle: string;
  description: string;
  items: CollectionItem[];
};


