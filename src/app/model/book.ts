// export class Book {
//     title!: string
//     authors!: string[]
//     coverImage!: string
//     previewMode!: true
//     getAuthorsList() : string {
//         return this.authors.join(", ");
//     }
// }

export class Book {
    constructor(public title: string, public authors: string[], public coverImage: string,public previewMode = true) {
    }
    // previewMode: true
    getAuthorsList() : string {
        return this.authors.join(", ");
    }
}