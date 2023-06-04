import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListFilterComponent } from './book-list-filter.component';
import { By } from '@angular/platform-browser';

describe('BookListFilterComponent', () => {
  let component: BookListFilterComponent;
  let fixture: ComponentFixture<BookListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit category filter event when applyFilter is called', () => {
    const selectedCategory = 'Category 1';
    let emittedCategory: string | undefined;
    component.categoryFilter.subscribe((category) => {
      emittedCategory = category;
    });

    component.selectedCategory = selectedCategory;
    component.applyFilter();

    expect(emittedCategory).toBe(selectedCategory);
  });

  it('should emit clear filter event when clearCategoryFilter is called', () => {
    let clearFilterCalled = false;
    component.clearFilter.subscribe(() => {
      clearFilterCalled = true;
    });

    component.clearCategoryFilter();

    expect(clearFilterCalled).toBe(true);
    expect(component.selectedCategory).toBe('');
  });

  it('should render filter options', () => {
    component.categories = ['Category 1', 'Category 2'];
    fixture.detectChanges();

    const filterOptions = fixture.debugElement.queryAll(By.css('.filter-option'));
    expect(filterOptions.length).toBe(2);
    expect(filterOptions[0].nativeElement.textContent).toBe('Category 1');
    expect(filterOptions[1].nativeElement.textContent).toBe('Category 2');
  });

  it('should update selected category', () => {
    const selectedCategory = 'Category 1';
    const filterOption = fixture.debugElement.query(By.css('.filter-option'));
    filterOption.nativeElement.click();

    expect(component.selectedCategory).toBe(selectedCategory);
  });
});
