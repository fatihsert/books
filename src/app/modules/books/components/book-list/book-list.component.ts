import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { filterBooksByCategory } from 'src/app/utils/book-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  subscription: Subscription | undefined;
  filteredBooks: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.initBooksData();
  }

  initBooksData(): void {
    this.subscription = this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.filteredBooks = this.books = books;
      },
      error: (error: any) => {
        console.error('Error fetching books:', error);
      },
    });
  }

  onCategoryFilter(category: string): void {
    this.filteredBooks = filterBooksByCategory(this.books, category);
  }

  clearCategoryFilter(): void {
    this.filteredBooks = this.books;
  }

  onBookDetail(book: Book): void {
    this.router.navigate(['/books', book.id]);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
