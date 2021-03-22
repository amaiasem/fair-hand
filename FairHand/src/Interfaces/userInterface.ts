export default interface UserInterface {
    _id: string,
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
