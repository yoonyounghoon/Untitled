export interface RegisterUploadData {
  images: string[];
  productName: string;
  category: string;
  price: number | string;
  shipFee: number | string;
  shipStart: number | string;
  tags: string[];
  content: string;
}
