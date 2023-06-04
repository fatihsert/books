import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './modules/books/components/book-detail/book-detail.component';
import { BookListComponent } from './modules/books/components/book-list/book-list.component';
const routes: Routes = [
  // Other routes...
  { path: '', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
