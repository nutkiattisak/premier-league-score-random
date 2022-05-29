import React, { useState, useEffect } from 'react'
import http from '.././../utils/http'
const Table = () => {
  const [teams, setTeams] = useState([])

  const url =
    'https://raw.githubusercontent.com/nutkiattisak/premier-league-score-random/main/README.md'

  const fetchData = async (url, params = null) => {
    let teame = []
    const data = await fetch(url)
    const text = await data.text()

    text.split('\n').map((item) => {
      if (item !== '') {
        const data = item.split('- ')[1]
        teame.push({
          name: data,
        })
      }
    })
    setTeams(teame)
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  const List = () => {
    return teams.map((team, index) => {
      return (
        <React.Fragment key={team?.title}>
          <tr className="bg-white bg-opacity-20">
            <td className="px-6 py-4 text-center">{index + 1}</td>
            <td className="flex px-6 py-4 whitespace-nowrap">
              <span className="ml-2 font-medium">{team?.name}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.played || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.won || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.drawn || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.lost || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.goalsFor || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.goalsAgainst || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.goalDifference || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{team?.points || 0}</td>
          </tr>
        </React.Fragment>
      )
    })
  }
  return (
    <>
      <table className="min-w-full text-sm text-gray-400">
        <thead className="bg-gray-200 text-xs font-medium text-gray-800">
          <tr>
            <th>Position</th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              Club
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              Played
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              Won
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              Drawn
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              Lost
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              GF
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              GA
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              GD
            </th>
            <th scope="col" className="px-6 py-3 text-center tracking-wider">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">{List()}</tbody>
      </table>
    </>
  )
}

export default Table
