interface Schedule {
  id: number;
  date: string;
  times: {
    id: number;
    startTime: string;
    endTime: string;
  }[];
}

interface SubImage {
  id: number;
  imageUrl: string;
}

interface DataType {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  createdAt: string;
  updatedAt: string;
  rating: number;
  reviewCount: number;
  schedules: Schedule[];
  subImages: SubImage[];
}