import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookService } from '../../services/book.service';
import { of } from 'rxjs';
import { Book } from '../../models/book.model';
import { filterBooksByCategory } from 'src/app/utils/book-utils';
import { BookListFilterComponent } from '../book-list-filter/book-list-filter.component';
import { FormsModule } from '@angular/forms';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  let mockRouter: jasmine.SpyObj<Router>;
  const mockBooks: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      coverImageUrl: 'image-url-1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      category: 'Category 2',
      coverImageUrl: 'image-url-2',
      description: 'Description 2',
    },
    // Add more mock books as needed
  ];

  beforeEach(() => {
    mockBookService = jasmine.createSpyObj('BookService', ['getBooks']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookListFilterComponent],
      imports: [FormsModule],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and initialize books', () => {
    mockBookService.getBooks.and.returnValue(of(mockBooks));

    fixture.detectChanges();

    expect(component.books).toEqual(mockBooks);
    expect(component.filteredBooks).toEqual(mockBooks);
    expect(mockBookService.getBooks).toHaveBeenCalled();
  });

  it('should filter books by category', () => {
    const category = 'Category 1';
    component.books = mockBooks;

    component.onCategoryFilter(category);

    expect(component.filteredBooks).toEqual([mockBooks[0]]);
  });

  it('should clear category filter', () => {
    component.books = mockBooks;
    component.filteredBooks = [mockBooks[0]];

    component.clearCategoryFilter();

    expect(component.filteredBooks).toEqual(mockBooks);
  });

  it('should navigate to book detail', () => {
    const book = mockBooks[0];

    component.onBookDetail(book);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/books', book.id]);
  });

  it('should unsubscribe from the subscription on destroy', () => {
    const mockSubscription = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component.subscription = mockSubscription;

    component.ngOnDestroy();

    expect(mockSubscription.unsubscribe).toHaveBeenCalled();
  });
});
