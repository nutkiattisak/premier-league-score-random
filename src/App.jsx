import { useState } from 'react'
import './App.css'

const App = () => {
  const clup = [
    {
      name: 'Liverpool',
      id: 1,
    },
    {
      name: 'Manchester United',
      id: 2,
    },
    {
      name: 'Manchester City',
      id: 3,
    },
    {
      name: 'Chelsea',
      id: 4,
    },
  ]

  const showTeam = (clup) => {
    return clup.map((item, index) => {
      return (
        <>
          <tr className="bg-white bg-opacity-20" key={`${item?.name}-${index}`}>
            <td className="px-6 py-4 text-center">{index + 1}</td>
            <td className="flex px-6 py-4 whitespace-nowrap">
              <span className="ml-2 font-medium">{item?.name}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">0</td>
          </tr>
        </>
      )
    })
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-mardigras p-6">
          <h1 className="text-3xl font-bold font-mono text-center text-white">Premier League</h1>
        </div>
        <div className="container mx-auto">
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="bg-mardigras flex justify-end">
                <div className="text-white text-xl flex items-center mr-3">
                  <span>Liverpool</span>
                </div>
                <div className="bg-blue-300 w-14 h-14 flex justify-center items-center">
                  <span className="text-xl text-mardigras">0</span>
                </div>
              </div>

              <div className="bg-mardigras flex justify-start">
                <div className="bg-blue-300 w-14 h-14 flex justify-center items-center">
                  <span className="text-xl text-mardigras">0</span>
                </div>
                <div className="text-white text-xl flex items-center ml-3">
                  <span>Manchester United</span>
                </div>
              </div>

              <div className="bg-mardigras flex justify-end">
                <div className="text-white text-xl flex items-center mr-3">
                  <span>Manchester City</span>
                </div>
                <div className="bg-blue-300 w-14 h-14 flex justify-center items-center">
                  <span className="text-xl text-mardigras">0</span>
                </div>
              </div>

              <div className="bg-mardigras flex justify-start">
                <div className="bg-blue-300 w-14 h-14 flex justify-center items-center">
                  <span className="text-xl text-mardigras">0</span>
                </div>
                <div className="text-white text-xl flex items-center ml-3">
                  <span>Chelsea</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="rounded-full bg-mardigras text-white px-3 py-2">
                Random Score
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
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
                    <tbody className="bg-white">{showTeam(clup)}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
