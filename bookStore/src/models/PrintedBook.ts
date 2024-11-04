import { Book } from "./Book";

export interface PrintedBook extends Book {
    pageCount: number;
}