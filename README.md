# Welcome to all in one ReactJS resource leaning material.

### Overview
Here, We Cover most ReactJS concept with project based resource.

### Key Points.
    1. TDD and BDD with SOLID Principle development.
    2. Build with TypeScript.
    3. React Hooks, React State Management.
    4. Security.
    5. Memory Optimization.

### Project: Online Book Store
To create a front-end application for online boo store which have functionality of Book List, Add, Remove the Book with User Authentication. To follow Solid Principle with TDD and BDD Approach. 

#### Features
    1. Book List, Pagination, Search and Filtration. 
    2. Add new book.
    3. Remove the book.
    4. Authorization.

### What is SOLID Principle.
SOLID principle is help to maintainability, scalability and readability our project source code.

#### SOLID Principles Overview
    1. Single Responsibility Principle (SRP): A class or module should have one reason to change, meaning it should only have one job.
    2. Open/Closed Principle (OCP): Software entities should be open for extension but closed for modification.
    3. Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types without altering the correctness of the program.
    4. Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.
    5. Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions.

### SOLID Principles with Example 

    Step 1: Implementing the Single Responsibility Principle (SRP)
    Each component and service should have a single responsibility. For example, the BookService can handle all book-related operations.
    
    export interface Book {
        id: number;
        title: string;
        author: string;
    }

    import { Book } from '../models/Book';

    class BookService {
        private books: Book[] = [];

        addBook(book: Book) {
            this.books.push(book);
        }

        getBooks(): Book[] {
            return this.books;
        }
    }

    export default new BookService();

    Step 2: Open/Closed Principle (OCP)
    You can extend functionality without modifying existing code. For example, if you want to add a new type of book, you can create a new class that extends the Book model.

    import { Book } from './Book';

    export interface Ebook extends Book {
        fileSize: number; // additional property for eBooks
    }

    Step 3: Liskov Substitution Principle (LSP)
    Ensure that derived classes can be used interchangeably with their base classes. For example, if you have a PrintedBook and Ebook, both should be usable in the same context.

    import { Book } from './Book';

    export interface PrintedBook extends Book {
        pageCount: number; // additional property for printed books
    }

    Step 4: Interface Segregation Principle (ISP)
    Instead of having a large interface, create smaller, more specific interfaces. For example, if you have different types of books, you can create separate interfaces for each type.
    
    export interface IBook {
    id: number;
    title: string;
    author: string;
    }

    // src/models/IPrintedBook.ts
    import { IBook } from './IBook';

    export interface IPrintedBook extends IBook {
        pageCount: number;
    }

    // src/models/IEbook.ts
    import { IBook } from './IBook';

    export interface IEbook extends IBook {
        fileSize: number;
    }

    Step 5: Dependency Inversion Principle (DIP)
    High-level modules should not depend on low-level modules. Instead, both should depend on abstractions. You can achieve this by using dependency injection for services.

    // src/redux/bookSlice.ts
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import BookService from '../services/BookService';
    import { Book } from '../models/Book';

    interface BookState {
        books: Book[];
    }

    const initialState: BookState = {
        books: BookService.getBooks(),
    };

    const bookSlice = createSlice({
        name: 'books',
        initialState,
        reducers: {
            addBook: (state, action: PayloadAction<Book>) => {
                BookService.addBook(action.payload);
                state.books.push(action.payload);
            },
        },
    });

    export const { addBook } = bookSlice.actions;
    export default bookSlice.reducer;


### What is Functional Testing and Behavior Testing

The terms behavioral testing and functional testing are often used interchangeably, but they refer to different aspects of software testing. Here’s a breakdown of the differences between the two:
    
### Functional Testing
Definition: Functional testing is a type of testing that verifies that the software functions according to specified requirements. It focuses on the output of the software based on given inputs and ensures that the application behaves as expected.

#### Key Characteristics:
    Input/Output Focus: Tests are designed to check specific inputs and their corresponding outputs.

    Specification-Based: Tests are derived from the software requirements and specifications.
    
    Types of Tests: Includes unit tests, integration tests, system tests, and acceptance tests.

    Example: Testing a login form to ensure that entering valid credentials allows access, while invalid credentials deny access.

    Tools: Common tools for functional testing include Selenium, QTP, and TestComplete.

### Behavioral Testing
Definition: Behavioral testing (often referred to as behavior-driven development or BDD) focuses on the behavior of the application from the end-user's perspective. It emphasizes the expected behavior of the application in various scenarios, often using natural language to describe the tests.

#### Key Characteristics:
    User-Centric: Tests are written from the perspective of the user and describe how the application should behave in different situations.

    Specification by Example: Tests are often written in a way that describes the expected behavior using examples, making them more understandable to non-technical stakeholders.

    Types of Tests: Includes acceptance tests and end-to-end tests.

    Example: Describing a scenario where a user attempts to log in with valid credentials and expects to see a welcome message, or attempts to log in with invalid credentials and expects to see an error message.

    Tools: Common tools for behavioral testing include Cucumber, SpecFlow, and Behave.
    
### Summary of Differences
    | Aspect | Functional Testing | Behavioral Testing |

    | Focus | Verifies specific functions and outputs | Verifies overall behavior from the user's perspective |

    | Approach | Specification-based | User-centric, often written in natural language |

    | Test Types | Unit, integration, system, acceptance | Acceptance, end-to-end |

    | Example | Testing if a button submits a form correctly | Testing if a user sees a welcome message after logging in |

    | Tools | Selenium, QTP, TestComplete | Cucumber, SpecFlow, Behave |