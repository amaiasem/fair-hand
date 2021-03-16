export default interface User {
    name: string,
    surname: string,
    email: string,
    password: string,
    image: string,
    address: string,
    myFavourites: [
      {
        shopId: string
      }
    ]
}
