import { ToastrService } from "ngx-toastr";
import { PaymentDetail } from "./../share/payment-detail.model";
import { PaymentDetailService } from "./../share/payment-detail.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.component.html",
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete this record?")) {
      this.service.deletePaymentDetail(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.error("Deleted successfully", "Payment Detail Register");
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
