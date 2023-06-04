import { Book } from "../modules/books/models/book.model";
import { getUniqueCategories, filterBooksByCategory } from "./book-utils";

describe('Book Utils', () => {
  const books: Book[] = [
    { id: 1, title: "Book 1", author: "Author 1", category: "Category 1", coverImageUrl: "", description: "" },
    { id: 2, title: "Book 2", author: "Author 2", category: "Category 2", coverImageUrl: "", description: "" },
    { id: 3, title: "Book 3", author: "Author 3", category: "Category 1", coverImageUrl: "", description: "" },
    { id: 4, title: "Book 4", author: "Author 4", category: "Category 3", coverImageUrl: "", description: "" },
  ];

  describe('getUniqueCategories', () => {
    it('should return an array of unique categories', () => {
      const uniqueCategories = getUniqueCategories(books);
      expect(uniqueCategories).toEqual(["Category 1", "Category 2", "Category 3"]);
    });

    it('should handle an empty array', () => {
      const uniqueCategories = getUniqueCategories([]);
      expect(uniqueCategories).toEqual([]);
    });
  });

  describe('filterBooksByCategory', () => {
    it('should return all books when no category is provided', () => {
      const filteredBooks = filterBooksByCategory(books, "");
      expect(filteredBooks).toEqual(books);
    });

    it('should return books matching the provided category', () => {
      const filteredBooks = filterBooksByCategory(books, "Category 1");
      const expectedBooks: Book[] = [
        { id: 1, title: "Book 1", author: "Author 1", category: "Category 1", coverImageUrl: "", description: "" },
        { id: 3, title: "Book 3", author: "Author 3", category: "Category 1", coverImageUrl: "", description: "" },
      ];
      expect(filteredBooks).toEqual(expectedBooks);
    });

    it('should handle an empty array', () => {
      const filteredBooks = filterBooksByCategory([], "Category 1");
      expect(filteredBooks).toEqual([]);
    });
  });
});
