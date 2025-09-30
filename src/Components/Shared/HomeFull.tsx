
type Props = {
  title: string,
  message: string
  children: React.ReactNode
}

const HomeFull = ({ title, message,children }: Props) => {
  return (
    <div className="relative w-full">
      <div className="py-8 px-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{message}</p>
      </div>

      {children}
    </div>
  )
}
export default HomeFull
