import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';
import BooksSource from './data';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  getBooks(): Observable<Book[]> {
    return of(BooksSource);
  }

  getBookById(id: number): Observable<Book | undefined> {
    const result = BooksSource.filter((book) => book.id == id);
    return of(result && result.length > 0 ? result[0] : undefined);
  }
}
