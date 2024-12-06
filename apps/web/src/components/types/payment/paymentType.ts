export interface BoltItem {
  id: number;
  itemName: string;
  count: number;
  price: number;
}

//결제 준비 요청 Req
export interface PaymentReqType {
  cid: string;
  partnerOrderId: string;
  partnerUserId: string;
  itemName: string;
  quantity: number;
  totalAmount: number;
  taxFreeAmount: number;
  approvalUrl: string;
  failUrl: string;
  cancelUrl: string;
}

//결제 준비 요청 Res
export interface PaymentReadyResType {
  tid: string;
  nextRedirectPcUrl: string;
  partnerOrderId: string;
}

//결제 승인 요청 Req

export interface PaymentApprovalReqType {
  cid: string;
  tid: string;
  partnerOrderId: string;
  partnerUserId: string;
  pgToken: string;
  quantity: number;
}

//결제 승인 요청 Res
export interface PaymentApprovalResType {
  tid: string;
  cid: string;
  partner_order_id: string;
  partner_user_id: string;
  item_name: string;
  quantity: number;
  amount: {
    total: number;
    tax_free: number;
  };
}
