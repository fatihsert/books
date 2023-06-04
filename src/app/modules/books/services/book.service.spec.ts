import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { Book } from '../models/book.model';

describe('BookService', () => {
  let bookService: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    bookService = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it('should get the list of books', () => {
    const dummyBooks: Book[] = [
      { id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1', coverImageUrl: '', description: '' },
      { id: 2, title: 'Book 2', author: 'Author 2', category: 'Category 2', coverImageUrl: '', description: '' }
    ];

    bookService.getBooks().subscribe((books: Book[]) => {
      expect(books.length).toBe(2);
      expect(books).toEqual(dummyBooks);
    });

    const req = httpMock.expectOne('http://localhost:3000/books');
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooks);
  });

  it('should get a book by ID', () => {
    const dummyBook: Book = { id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1', coverImageUrl: '', description: '' };

    bookService.getBookById(1).subscribe((book: Book) => {
      expect(book).toEqual(dummyBook);
    });

    const req = httpMock.expectOne('http://localhost:3000/books/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyBook);
  });

  it('should get the list of available categories', () => {
    const dummyCategories: Book[] = [
      { id: 1, title: '', author: '', category: 'Category 1', coverImageUrl: '', description: '' },
      { id: 2, title: '', author: '', category: 'Category 2', coverImageUrl: '', description: '' }
    ];

    bookService.getAvailableCategories().subscribe((categories: Book[]) => {
      expect(categories.length).toBe(2);
      expect(categories).toEqual(dummyCategories);
    });

    const req = httpMock.expectOne('http://localhost:3000/books');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategories);
  });
});
