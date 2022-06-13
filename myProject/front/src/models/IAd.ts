export interface IAd {
  id: string;
  userId: string;
  nameAd: string;
  category: string;
  price: string;
  phoneNumber: string;
  discripsion: string;
  foto: File[] | [];
  location: string;
  published: boolean
}
