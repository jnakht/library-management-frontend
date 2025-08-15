


export type TBook = {
  _id: string;
  title: string;
  author: string;
  genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
  isbn: string;
  description?: string | "";
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export interface IPaginationRes {
    success: boolean;
    message: string;
    data: TBook[];
    total: number;
    page: number;
    totalPages: number;
}

// export interface IPaginationRes {
//     success: boolean;
//     message: string;
//     data: TBook[];
//     total: number;
//     page: number;
//     totalPages: number;
// }

export interface IPaginationReq {
    page: number;
    limit: number;
}

// create book types 
export interface ICreateBookReq {
    title: string,
    author: string,
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
    isbn: string;
    description?: string;
    copies: number;
    available?: boolean;
}

export interface ISingleBookRes {
    success: boolean;
    message: string;
    data: TBook;
}

export interface IUpdateReq {
  _id: string;
  title: string;
  author: string;
  genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
} 

export interface IUpdateRes {
    success: boolean;
    message: string;
    data: TBook;
}

export interface IDeleteBookRes {
    success: boolean;
    message: string;
    data: null;
}

export interface BorrowReq {
    book: string;
    quantity: number;
    dueDate: string;
}

export type TBorrow = {
    _id: string;
    book: string;
    quantity: number;
    dueDate: string;
    createdAt: string;
    updatedAt: string;
}
export interface BorrowRes {
    success: boolean;
    message: string;
    data: TBorrow;
}

export interface BorrowSummaryReq {
    page: number;
    limit: number;
}

export type TBorrowBook = {
    title?: string;
    isbn?: string;
}

export type TBorrowSummaryItem = {
    totalQuantity: number;
    book: TBorrowBook;
}

export interface BorrowSummaryRes {
    success: boolean;
    message: string;
    data: TBorrowSummaryItem[];
    total: number;
    page: number;
    totalPages: number;
}

export type TFictionBook = {
  title: string;
  author: string;
  rating: number;
  reviews_count: number;
  price_range: string;
  description: string;
  publisher: string;
  year: number;
  pages: number;
  isbn: string;
  format: string[]; 
  image: string;  
}

export interface IFictionBooks {
    data: TFictionBook[]
}

export interface IPaginationInitialState {
    page: number,
    pageCount: number,
    rowsPerPage: number,
    totalData: number,
} 

export type TAuthor = {
  name: string;
  headshot: string;
};


export interface ISectionHeader {
    title : string;
    description: string;
}

export interface IService {
    title: string;
    description: string;
}


