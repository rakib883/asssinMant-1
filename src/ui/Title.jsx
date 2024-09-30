import { twMerge } from 'tailwind-merge'
const Title = ({title,className}) => {
    
  return (
    <div>
        <div className={twMerge("text-[24px] font-semibold",className)}>{title}</div>
    </div>
  )
}

export default Title