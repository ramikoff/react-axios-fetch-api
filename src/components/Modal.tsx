interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div className='fixed bg-black/50 top-0 right-0 bottom-0 left-0' onClick={onClose}></div>
      <div className='w-[500px] p-5 rounded bg-white fixed top-10 left-1/2  -translate-x-1/2'>
        <h3 className='text-center text-2xl mb-2'>{title}</h3>
        {children}
      </div>
    </>
  )
}
