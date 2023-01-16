import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiRoot='https://www.googleapis.com/books/v1/volumes'

  
  constructor(private http:HttpClient) { }

  getBooks(author: string) : Promise<Book[]> {
    return new Promise((resolve, reject) => {
      //
      let apiURL = `${this.apiRoot}?q=inauthor:"${author}"&langRestrict=en`;
      this.http.get(apiURL).toPromise().then((data: any) => {
        let results : Book[] = data.items.map((item:any ) => {
          return new Book(
            //ne renvoit rien si le contenu des variables demandé est absente de l appel
            item.volumeInfo.title!=undefined ? item.volumeInfo.title:"",
            item.volumeInfo.authors!=undefined ? item.volumeInfo.authors:"",
            item.volumeInfo.imageLinks!= undefined? item.volumeInfo.imageLinks.thumbnail:""
          )
        })
        resolve(results);
      })
  
    });

    // private getBooks() {
    //   this.bookService.getBooks(this.searchString).then(data => {
    //     this.books = data;
    //   })
    // }
    
  }


// testData: Book[] = [
//     new Book(
//       "Sunshine",
//       ["Alex Garland"],
//       "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     ),
//     new Book(
//       "Ex Machina",
//       ["Alex Garland"],
//       "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//     ),
//     new Book(
//       "Annihilation",
//       ["Alex Garland"],
//       "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//     )
//   ];

  //permet de retourner les données 
  // getBooks (){
  //   return this.testData
  // }

  // getBooks(author: string) : Book[] {
  //   if (author == "Alex Garland") {
  //     return this.testData;
  //   }
  //   else return [];
  // }
  


}
