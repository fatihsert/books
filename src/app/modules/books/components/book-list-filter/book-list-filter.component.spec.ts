import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListFilterComponent } from './book-list-filter.component';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';

describe('BookListFilterComponent', () => {
  let component: BookListFilterComponent;
  let fixture: ComponentFixture<BookListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListFilterComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should emit categoryFilter event on category change', () => {
    spyOn(component.categoryFilter, 'emit');
    component.selectedCategory = 'Category 1';
    component.onCategoryChange();

    expect(component.categoryFilter.emit).toHaveBeenCalledWith('Category 1');
  });
});
