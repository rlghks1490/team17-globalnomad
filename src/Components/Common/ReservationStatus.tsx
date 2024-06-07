import React from "react";

interface ReservationStatusProps {
  status: "pending" | "confirmed" | "declined" | "canceled" | "completed";
}

const ReservationStatus = ({ status }: ReservationStatusProps) => {
  return (
    <div className="mb-2">
      {status === "pending" ? (
        <p className="text-base font-bold text-gnBlue">예약 신청</p>
      ) : status === "confirmed" ? (
        <p className="text-base font-bold text-gnGreen">예약 완료</p>
      ) : status === "declined" ? (
        <p className="text-base font-bold text-gnDarkRed">예약 거절</p>
      ) : status === "canceled" ? (
        <p className="text-base font-bold text-gnGray700">예약 취소</p>
      ) : (
        <p className="text-base font-bold text-gnGray700">체험 완료</p>
      )}
    </div>
  );
};

export default ReservationStatus;
