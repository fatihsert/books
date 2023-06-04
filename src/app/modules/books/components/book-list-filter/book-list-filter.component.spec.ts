import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListFilterComponent } from './book-list-filter.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

describe('BookListFilterComponent', () => {
  let component: BookListFilterComponent;
  let fixture: ComponentFixture<BookListFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListFilterComponent],
      providers: [BookService],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set categories on book changes', () => {
    const mockBooks: Book[] = [
      { id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1', coverImageUrl: 'image-url-1', description: 'Description 1' },
      { id: 2, title: 'Book 2', author: 'Author 2', category: 'Category 2', coverImageUrl: 'image-url-2', description: 'Description 2' },
    ];
    const mockChanges = {
      books: {
        currentValue: mockBooks,
      },
    };

    component.ngOnChanges(mockChanges as any);

    expect(component.categories).toEqual(['Category 1', 'Category 2']);
  });

  it('should emit category filter', () => {
    spyOn(component.categoryFilter, 'emit');
    const category = 'Category 1';

    component.selectedCategory = category;
    component.onCategoryChange();

    expect(component.categoryFilter.emit).toHaveBeenCalledWith(category);
  });
});
