import { Book } from "../modules/books/models/book.model";

 
export function getUniqueCategories(books: Book[]): string[] {
  const categories: string[] = [];

  books.forEach(book => {
    if (!categories.includes(book.category)) {
      categories.push(book.category);
    }
  });

  return categories;
}

export function filterBooksByCategory(books: Book[],category:string): Book[] {
  return  category? books.filter(book => category.includes(book.category)): books;
}
