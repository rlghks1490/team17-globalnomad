
interface ActivityDescriptionProps {
  description: string;
}

const ActivityDescription = ({ description } : ActivityDescriptionProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="font-bold text-xl"> 체험 설명 </div>
      <div>{description}</div>
    </div>
  )
}

export default ActivityDescription;