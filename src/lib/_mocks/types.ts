export interface AdditionalInfo {
  SKu: string;
  category: string;
  tags: string[];
}
export enum CategoryTypes {
  "FOR_BABIES",
  "FOR_BOYS",
  "FOR_GIRLS",
  "FOR_TOYS",
  "NONE"
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  tags: string[];
  description: string;
  aditional_info: AdditionalInfo[];
  rate: number;
  Sku: string;
  related_images: string[];
  related_product: Product[] | [];
}

export interface ProductDataInterface {
  ProductData: Product[];
}
