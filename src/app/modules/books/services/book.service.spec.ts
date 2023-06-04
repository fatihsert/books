import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import BooksSource from './data';

describe('BookService', () => {
  let bookService: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
    });
    bookService = TestBed.inject(BookService);
  });

  it('should return the list of books', (done) => {
    bookService.getBooks().subscribe((books) => {
      expect(books).toEqual(BooksSource);
      done();
    });
  });

  it('should return a book by its ID', (done) => {
    const id = 1;
    bookService.getBookById(id).subscribe((book) => {
      expect(book).toEqual(BooksSource.find((b) => b.id === id));
      done();
    });
  });

  it('should return undefined for non-existing book ID', (done) => {
    const id = 999;
    bookService.getBookById(id).subscribe((book) => {
      expect(book).toBeUndefined();
      done();
    });
  });
});
