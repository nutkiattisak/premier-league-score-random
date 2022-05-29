import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Table from './components/Table'
import RandomScore from './components/RandomScore'

const App = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-mardigras p-6">
          <h1 className="text-3xl font-bold font-mono text-center text-white">Premier League</h1>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <Table />
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
