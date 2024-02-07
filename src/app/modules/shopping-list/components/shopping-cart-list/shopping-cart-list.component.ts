import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderDetails, ShoppingItem } from '../../model/shopping-list';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss'],
})
export class ShoppingCartListComponent implements OnInit {
  @Input() cartList: any;
  @Input() subTotal: any;
  customerName: string = '';
  discount: number = 0;
  orderNumber: number = 1;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  handleChange(customerName: any) {
    this.customerName = customerName;
  }

  addDiscount() {
    if (this.discount > 0) {
      this.toastr.success('Discount added successfully');
    }
  }

  onHandleDiscount(action: string) {
    if (action == 'add') {
      this.discount++;
    } else if (action == 'remove') {
      if (this.discount > 0) {
        this.discount--;
      }
    }
  }

  onSubmit() {
    if (this.cartList?.length > 0) {
      // Get current date and time
      const currentDateTime = new Date();
      const formattedDateTime = currentDateTime.toLocaleString();

      let orderDetails: OrderDetails = {
        orderNumber: 1,
        customerName: this.customerName,
        orderDate: formattedDateTime,
        orderList: this.cartList,
        subTotal: this.subTotal,
        discountPercentage: this.discount,
        discountAmount: (this.subTotal * this.discount) / 100,
        totalAmount: this.subTotal - (this.subTotal * this.discount) / 100,
      };
      this.toastr.success('Order submit successfully');
    }
  }

  onGeneratePdf() {
    if (this.cartList?.length > 0) {
      // Get current date and time
      const currentDateTime = new Date();
      const formattedDateTime = currentDateTime.toLocaleString();

      let orderDetails: OrderDetails = {
        orderNumber: 1,
        customerName: this.customerName,
        orderDate: formattedDateTime,
        orderList: this.cartList,
        subTotal: this.subTotal,
        discountPercentage: this.discount,
        discountAmount: (this.subTotal * this.discount) / 100,
        totalAmount: this.subTotal - (this.subTotal * this.discount) / 100,
      };

      //download PDF
      this.downloadPDF(orderDetails);
    }
  }

  downloadPDF(orderDetails: OrderDetails) {
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.setFontSize(18);
    pdf.setFont('bold');
    pdf.text('MS Computers', 80, 10);

    pdf.setFontSize(14);
    pdf.setFont('bold');
    pdf.text('Order Summery (Invoice)', 10, 20);

    pdf.setFontSize(12);
    pdf.setFont('normal');
    pdf.text(`Order Number: ${orderDetails.orderNumber}`, 10, 30);
    pdf.text(`Order Date: ${orderDetails.orderDate}`, 10, 40);
    pdf.text(`Customer Name: ${orderDetails.customerName}`, 10, 50);

    pdf.text(`Order List:`, 10, 60);
    let yPos = 60;
    orderDetails?.orderList.forEach((element: ShoppingItem) => {
      pdf.text(`Item Name: ${element.name}, QTY: ${element.quantity}, Unit Price: $${element.price}`, 20, yPos += 10);
    });

    pdf.text(`Sub Total ($): $${orderDetails.subTotal}`, 10, yPos += 10);
    pdf.text(`Discount (${orderDetails.discountPercentage}%) : $${orderDetails.discountAmount}`, 10, yPos += 10);
    pdf.text(`Total ($): $${orderDetails.totalAmount}`, 10, yPos += 10);

    pdf.save('order_details.pdf');

    this.toastr.success('PDF download successfully');
  }
}
