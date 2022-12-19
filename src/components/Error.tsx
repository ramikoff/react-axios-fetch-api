interface ErrorProps {
  errorMessage: string
}

export const Error = ({ errorMessage }: ErrorProps) => {
  return <div className='text-red-600 text-center'>{errorMessage}</div>
}
