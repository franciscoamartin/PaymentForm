import { PaymentDetail } from "./../share/payment-detail.model";
import { PaymentDetailService } from "./../share/payment-detail.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.component.html",
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service: PaymentDetailService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
