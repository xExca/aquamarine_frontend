export type ImageProps = {
  images: {
    'id': string,
    'productName': string,
    'price': number,
    'url' : string
  }[]
}

export type Product = {
  id: string;
  productName: string;
  price: number;
  url: string;
  discounted: number;
  updatedAt: number;
  deletedAt: number;
};

export type GalleryImage = {
  id: string;
  productName: string;
  price: number;
  discounted: number;
  url: string;
};