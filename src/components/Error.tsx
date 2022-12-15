interface ErrorProps {
  errorMessage: string
}

export const Error = ({ errorMessage }: ErrorProps) => {
  return <div>{errorMessage}</div>
}
