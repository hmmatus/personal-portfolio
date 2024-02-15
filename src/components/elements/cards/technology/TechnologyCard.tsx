type Props = {
  title: string;
  description: string;
}
const TechnologiesCard = ({title, description}: Props) => {
  return (
    <div className="min-w-20 min-h-20 flex flex-col items-center justify-center p-4 shadow-xl rounded-xl">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TechnologiesCard;