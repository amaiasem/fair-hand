export default interface ShopInterface {
  _id: string,
  shopName: string,
  address: string,
  latlong: {
    lat: number,
    long: number
  },
  schedule: string,
  website: string,
  phone: number,
  coverImage: string,
  logoImage: string,
  type: string,
  NewIn: [{
    productName: string,
    productImage: string,
    price: number,
    url: string
  }]
}
