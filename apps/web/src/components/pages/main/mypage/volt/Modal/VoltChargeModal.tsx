'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@repo/ui/components/ui/dialog';
import Payment from '@repo/web/components/pages/payment/payment';

function VoltChargeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogHeader className="hidden">
        <DialogTitle>볼트 충전</DialogTitle>
        <DialogDescription>
          아래에서 충전할 볼트를 선택하세요.
        </DialogDescription>
      </DialogHeader>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <Payment />
        <div className="mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default VoltChargeModal;
