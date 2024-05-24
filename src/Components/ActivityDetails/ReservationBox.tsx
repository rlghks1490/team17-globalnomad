import Image from "next/image";
import IncreaseButton from "../../../public/icons/IncreaseButton.svg"
import DecreaseButton from "../../../public/icons/DecreaseButton.svg"

const ReservationBox = () => {
  return (
    <div className="flex flex-col p-6 gap-4 bg-white border rounded-md border-gnGray300">
      <div className="font-bold text-[28px] pb-4 border-b border-gnGray300"> 1,000원 /인</div>

      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">날짜</p>
        <Image src="/images/CalendarSample.png" alt='calendar' width={305} height={241} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="border-b border-gnGray300">
              <div className="flex flex-col pb-4 gap-3.5 ">
                <p className="font-bold text-lg">예약 가능한 시간</p>
                <div className="flex flex-row gap-3">
                  <button className="py-2.5 px-3 font-medium text-base border rounded-md border-[#112111]">14:00 ~ 15:00</button>
                  <button className="py-2.5 px-3 font-medium text-base border rounded-md border-[#112111]">15:00 ~ 16:00</button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col w-[120px] gap-2">
                <p className="font-bold text-xl">참여 인원 수</p>
                <div className="flex flex-row justify-center items-center gap-2 border rounded-md border-[#CDD0DC]">
                  <button>
                    <Image src={IncreaseButton} alt='increaseButton' width={40} height={40} />
                  </button>
                  10
                  <button>
                    <Image src={DecreaseButton} alt='decreaseButton' width={40} height={40} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full py-2 px-10 font-bold text-base border rounded bg-[#112211] text-white">예약하기</button>
          </div>
        </div>
        

        <div className="flex flex-row justify-between font-bold text-xl pt-4 border-t border-gnGray300">
          <p>총 합계</p>
          <p>10,000 원</p>
        </div>
      </div>

    </div>
  )
}

export default ReservationBox;