export interface IAd {
  id: string;
  userId: string;
  nameAd: string;
  category: string;
  price: string;
  phoneNumber: string;
  description: string;
  foto: File[] | [];
  location: string;
  published: boolean
}
