import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-mardigras p-6">
          <h1 className="text-3xl font-bold font-mono text-center text-white">
            Premier League
          </h1>
        </div>
        <div className="container mx-auto">
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full text-sm text-gray-400">
                    <thead class="bg-gray-200 text-xs font-medium text-gray-800">
                      <tr>
                        <th>Position</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          Club
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          Played
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          Won
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          Drawn
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          Lost
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          GF
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          GA
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          GD
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center tracking-wider"
                        >
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="bg-white bg-opacity-20">
                        <td class="px-6 py-4 text-center">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium">Liverpool</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
