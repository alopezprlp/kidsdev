import { Product } from "@/lib/_mocks/types";

export const filterProductsBySearch = (
  products: Product[],
  searchQuery: string
): Product[] => {
  if (!products) {
    return [];
  }
  if (!searchQuery && searchQuery.length === 0) {
    return products;
  }

  const normalizeString = (sentence: string) => {
    return sentence.toLowerCase();
  };

  return products.filter(
    (pr) =>
      normalizeString(pr.name).includes(normalizeString(searchQuery)) ||
      normalizeString(pr.category).includes(normalizeString(searchQuery)) ||
      normalizeString(pr.description).includes(normalizeString(searchQuery)) ||
      normalizeString(pr.price).includes(normalizeString(searchQuery)) ||
      normalizeString(pr.tags.join(" ")).includes(normalizeString(searchQuery))
  );
};
