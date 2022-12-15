interface DescriptionProps {
  info: string
  rate: number
}

export const Description = ({ info, rate }: DescriptionProps) => {
  return (
    <>
      <p>{info}</p>
      <p>
        Rate: <span className='font-bold'>{rate}</span>
      </p>
    </>
  )
}
