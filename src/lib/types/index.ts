// export type Value = 'isbn' | 'author' | 'title';

export type Label = '書籍名' | '著者名' | 'ISBNコード';
export type SearchBookType = 'title' | 'author' | 'isbn';

// Redux
export type Count = {
  value: number;
};

export type LoadingStatus = {
  isLoading: boolean;
};
export type ErrorStatus = {
  isError: boolean;
  errorMessage: string;
  errorStatus: string;
};
export type Message = {
  message: string;
};
export type ModalStatus = {
  isOpen: boolean;
};

// RakutenAOI
export type Book = {
  Item: {
    limitedFlag: number;
    // authorKana: string;
    author: string;
    subTitle: string;
    // seriesNameKana: string;
    title: string;
    // subTitleKana: string;
    // itemCaption: string;
    publisherName: string;
    // listPrice: number;
    isbn: string;
    largeImageUrl: string;
    // mediumImageUrl: string;
    // titleKana: string;
    // availability: string;
    // postageFlag: number;
    // salesDate: string;
    // contents: string;
    // smallImageUrl: string;
    // discountPrice: number;
    // itemPrice: number;
    size: string;
    // booksGenreId: string;
    // affiliateUrl: string;
    seriesName: string;
    // reviewCount: number;
    reviewAverage: string;
    // discountRate: number;
    // chirayomiUrl: string;
    itemUrl: string;
  };
};
