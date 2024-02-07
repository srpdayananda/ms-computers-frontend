export interface ShoppingItem {
  id?: number;
  name: string;
  img: string;
  quantity: number;
  price: number;
  isSold?: boolean;
  total?: number;
  description?: string;
}

export interface OrderDetails {
  orderNumber: number;
  customerName: string;
  orderDate: any;
  orderList: ShoppingItem[]
  subTotal: number;
  discountPercentage: number;
  discountAmount: number;
  totalAmount: number;
}
