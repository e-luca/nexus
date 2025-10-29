export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  tags: string[];
  brand: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
};

type ProductDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type ProductReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type ProductMeta = {
  barcode: string;
  qrCode: string;
};
