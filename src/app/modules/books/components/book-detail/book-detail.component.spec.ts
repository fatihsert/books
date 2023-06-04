import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from '../../services/book.service';
import { BookDetailComponent } from './book-detail.component';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockBookService = jasmine.createSpyObj('BookService', ['getBookById']);
    mockActivatedRoute = {
      params: of({ id: 1 }), // Set the parameter for testing
    };
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch book by ID', () => {
    const mockBook = {
      id: 1,
      title: 'Book Title',
      author: 'Author Name',
      category: 'Category',
      coverImageUrl: 'image-url',
      description: 'Book description',
    };

    mockBookService.getBookById.and.returnValue(of(mockBook));

    fixture.detectChanges();

    expect(component.book).toEqual(mockBook);
    expect(mockBookService.getBookById).toHaveBeenCalledWith(1);
  });

  it('should navigate to home if book is not found', () => {
    mockBookService.getBookById.and.returnValue(of(undefined));

    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
