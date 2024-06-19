/**
 * @param GetMyActivitiesParam /{
  cursorId?: number;
  size?: number;
 */

export interface GetMyActivitiesParam {
  cursorId?: number;
  size?: number;
}

/**
 * @param Activities /{
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}
 */

export interface Activities {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * @param GetMyActivitiesRes /{
  cursorId: number;
  activities: Activities[];
  totalCount: number;
 */
export interface GetMyActivitiesRes {
  cursorId: number;
  activities: Activities[];
  totalCount: number;
}
