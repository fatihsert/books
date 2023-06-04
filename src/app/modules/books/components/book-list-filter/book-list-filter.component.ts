import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { getUniqueCategories } from 'src/app/utils/book-utils';

@Component({
  selector: 'app-book-list-filter',
  templateUrl: './book-list-filter.component.html',
  styleUrls: ['./book-list-filter.component.css'],
})
export class BookListFilterComponent {
  @Input() books: Book[] = [];
  @Output() categoryFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() clearFilter: EventEmitter<void> = new EventEmitter<void>();

  categories: string[] = [];
  selectedCategory: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['books'] && this.books) {
      this.categories = this.getUniqueCategories(this.books);
    }
  }

  getUniqueCategories(books: Book[]): string[] {
    const categories = books.map((book) => book.category);
    return Array.from(new Set(categories));
  }

  onCategoryChange(): void {
    this.categoryFilter.emit(this.selectedCategory);
  }
}
