export interface IAd {
  id: string;
  userId: string;
  nameAd: string;
  category: string;
  price: string;
  phoneNumber: string;
  description: string;
  date: string;
  foto: File[] | [];
  location: string;
  published: boolean;
  views: number
}
