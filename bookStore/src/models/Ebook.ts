import { Book } from "./Book";

export interface Ebook extends Book {
    fileSize: number;
}