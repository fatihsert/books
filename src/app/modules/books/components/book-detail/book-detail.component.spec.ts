import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj('BookService', ['getBookById']);

    await TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: 1 })) } },
        { provide: BookService, useValue: mockBookService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
  });

  it('should fetch book details on component initialization', () => {
    const mockBook: Book = {
      id: 1,
      title: 'Sample Book',
      author: 'John Doe',
      category: 'Fiction',
      coverImageUrl: 'https://example.com/book-cover.jpg',
      description: 'This is a sample book description.'
    };

    mockBookService.getBookById.and.returnValue(of(mockBook));

    fixture.detectChanges();

    expect(component.book).toEqual(mockBook);
    expect(mockBookService.getBookById).toHaveBeenCalledWith(1);
  });
});
