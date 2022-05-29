const RandomScore = () => {
  const [score, setScore] = useState(0)
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <>
      <div className="flex flex-col items-center bg-mardigras p-6">
        <h1 className="text-3xl font-bold font-mono text-center text-white">Premier League</h1>
      </div>
    </>
  )
}

export default RandomScore
