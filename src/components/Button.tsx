import React from 'react'

interface ButtonProps {
  showInfo: boolean
  onClick: () => void
}

export const Button = ({ showInfo, onClick }: ButtonProps) => {
  const buttonLabel = showInfo ? 'Hide Details' : 'Show Details'
  const buttonColor = showInfo ? 'bg-yellow-400' : 'bg-blue-400'
  const buttonClassName = ['py-2 px-4 border hover:text-white', buttonColor]

  return (
    <button className={buttonClassName.join(' ')} onClick={onClick}>
      {buttonLabel}
    </button>
  )
}
