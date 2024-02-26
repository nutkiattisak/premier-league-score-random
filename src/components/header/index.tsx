interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-primary">
      <h1 className="font-mono text-3xl font-bold text-center text-white">{title}</h1>
    </div>
  )
}

export default Header
