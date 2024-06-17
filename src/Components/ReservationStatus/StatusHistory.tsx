import { useMyActivitiesReservationCheck } from "@/service/myActivities/useMyActiviesService";
import { useEffect } from "react";
interface StausHistoryProps {
  reservationStatus: string;
  selectedScheduleId: number;
}
const StatusHistory = ({
  reservationStatus,
  selectedScheduleId,
}: StausHistoryProps) => {
  const { data: hourlyStatus, refetch } = useMyActivitiesReservationCheck(
    selectedScheduleId,
    reservationStatus,
    1148,
  );

  useEffect(() => {
    if (selectedScheduleId && reservationStatus) {
      refetch();
    }
  }, [selectedScheduleId, reservationStatus, refetch]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-semibold">예약 내역</p>
      {reservationStatus === "pending" ? (
        <div className="flex flex-col gap-3.5">
          {hourlyStatus?.data.reservations.map((reservation) => (
            <div
              key={reservation.id}
              className=" rounded border border-gnGray300 p-4"
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-2.5">
                  <p className="text-base font-semibold text-gnGray700">
                    닉네임
                  </p>
                  <p className="text-base font-medium text-gnDarkBlack">
                    {reservation.nickname}
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <p className="text-base font-semibold text-gnGray700">인원</p>
                  <p className="text-base font-medium text-gnDarkBlack">
                    {reservation.headCount}명
                  </p>
                </div>
              </div>
              <div>
                <button>승인하기</button>
                <button>거절하기</button>
              </div>
            </div>
          ))}
        </div>
      ) : reservationStatus === "confirmed" ? (
        <div className="rounded border border-gnGray300"></div>
      ) : (
        <div className="rounded border border-gnGray300"></div>
      )}
    </div>
  );
};

export default StatusHistory;
