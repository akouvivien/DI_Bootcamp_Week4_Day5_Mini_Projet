import { Component, OnInit} from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],

})
export class BookComponent  implements OnInit{
  previewMode?: boolean;
  testData?: Book[];
  searchString!: string
// injection du service dans le component
  constructor(private _bookService:BookService){}

//engegistrer le contenu du service dans la variable testData
  // ngOnInit(): void {
  //   this.testData = this._bookService.getBooks()// testData recevoit le resultat de la fonction getBooks qui retourne le contenu du service
  // }

  ngOnInit() {
    this.getBooks();
  }
  
  onSubmit() {
    this.getBooks()
  }
  
  // private getBooks(author: string) {
  //   this.testData = this._bookService.getBooks(author)
  // }
  onClickImage(book:Book) {
    book.previewMode = !book.previewMode
  }

  private getBooks() {
    this._bookService.getBooks(this.searchString).then(data => {
      this.testData = data;
    })
  }
  }

