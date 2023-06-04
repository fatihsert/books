import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let activatedRouteMock: Partial<ActivatedRoute>;
  let bookServiceMock: Partial<BookService>;
  let routerMock: Partial<Router>;
  beforeEach(async () => {
    activatedRouteMock = {
      params: of({ id: 1 }), // Simulate route parameter with id 1
    };
    bookServiceMock = {
      getBookById: jasmine.createSpy('getBookById').and.returnValue(
        of({ id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1' } as Book)
      ),
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: BookService, useValue: bookServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should fetch book details on initialization', () => {
    expect(bookServiceMock.getBookById).toHaveBeenCalledWith(1);
    expect(component.book).toEqual({ id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1' } as Book);
  });
});
