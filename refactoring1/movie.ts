class Movie {
  CHILDRENS: number = 2;
  REGULAR: number = 0;
  NEW_RELESE: number = 1;

  _title: string;
  _priceCode: number;

  public Movie(title: String, priceCode: number) {
    const _title = title;
    const _priceCode = priceCode;
  }
}
