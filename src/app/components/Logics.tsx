"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";

const Logics = () => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(ALL_DATA);
  const [chain, setChain] = useState("");
  const [coin, setCoin] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(ALL_DATA.length);
  const [perPage] = useState(10);

  // Handle dynamic filtering with search, chain, and coin
  useEffect(() => {
    let data = ALL_DATA;

    // Filter by chain if selected
    if (chain) {
      data = data.filter((d) => d.chain === chain);
    }

    // Filter by coin if selected
    if (coin) {
      data = data.filter((d) => d.coin === coin);
    }

    // Filter by search term (coin, chain, or address)
    if (search) {
      data = data.filter(
        (d) =>
          d.coin.toLowerCase().includes(search.toLowerCase()) ||
          d.chain.toLowerCase().includes(search.toLowerCase()) ||
          d.address.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Update filtered data
    setTotalResults(data.length);

    // Implement pagination logic
    const start = (Number(page) - 1) * perPage;
    const end = start + perPage;
    setFilterData(data.slice(start, end));
  }, [search, chain, coin, page, perPage]);

  // Pagination handling - generate page numbers based on total results and per page
  const pageCount = Math.ceil(totalResults / perPage);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="px-12rem mt-4 w-full max-w-[1400px] linear-gradiant border rounded-2xl border-[#bf6dee] px-9">
        <div className="flex justify-center items-center">
          <h2 className="text-white text-xl font-bold text-center">
            Cross-Chain Coin Address Directory
          </h2>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="w-full max-w-[320px] h-10 rounded-[10px] border border-dark-blue bg-[#ffffff0d] flex items-center gap-3 px-3">
            <CiSearch className="text-white w-4 h-4 text-sm font-medium" />
            <input
              type="search"
              className="bg-transparent w-full h-full !outline-none text-sm font-medium text-soft-peach text-[#EBEBEB]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Coin"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <select
              aria-placeholder="Select Chain"
              value={chain}
              onChange={(e) => setChain(e.target.value)}
              className="font-normal text-sm px-4 py-2 border rounded-[10px] text-[#EBEBEB] border-dark-blue bg-[#ffffff0d] hover:bg-[#ffffff1a] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-200 ease-in-out"
            >
              <option value="">Select Chain</option>
              {CHAINS.map((x) => (
                <option key={x.id} value={x.value}>
                  {x.value}
                </option>
              ))}
            </select>
            <select
              aria-placeholder="Select Coin"
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              className="font-normal text-sm px-4 py-2 border rounded-[10px] text-[#EBEBEB] border-dark-blue bg-[#ffffff0d] hover:bg-[#ffffff1a] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-200 ease-in-out"
            >
              <option value="">Select Coin</option>
              {COINS.map((x) => (
                <option key={x.id} value={x.value}>
                  {x.value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-left rtl:text-right table-separator">
              <thead className="text-sm font-normal text-white uppercase bg-transparent">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Coin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chain
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterData.length ? (
                  filterData.map((data) => (
                    <tr key={data.id} className="bg-dark-blue">
                      <td className="px-8 py-3 md:py-4 text-purpal text-base font-medium whitespace-nowrap rounded-l-[10px] uppercase">
                        {data.coin}
                      </td>
                      <td className="px-10 py-3 md:py-4 text-purpal text-base font-normal uppercase">
                        {data.chain}
                      </td>
                      <td className="px-6 py-3 md:py-4 text-purpal text-base font-normal">
                        {data.address}
                      </td>
                      <td
                        className="px-6 py-3 md:py-4 text-purpal rounded-r-[10px] last-table-col"
                        onClick={() =>
                          navigator.clipboard.writeText(data.address)
                        }
                      >
                        <FaRegCopy className="btn-translate cursor-pointer" />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center text-white text-lg font-normal py-4"
                    >
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-white text-base font-normal">
              Total Results: {totalResults}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Page</p>
            <select
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
              className="font-normal text-sm px-3 py-2 border rounded-[10px] text-[#EBEBEB] border-dark-blue bg-[#ffffff0d]"
            >
              {pages.map((pageNum) => (
                <option key={pageNum} value={pageNum}>
                  {pageNum}
                </option>
              ))}
            </select>
            <p>{`of ${pageCount}`}</p>
          </div>
          <div>
            <p>Results per page: {perPage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logics;

const ALL_DATA = [
  {
    id: 1,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 2,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 3,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 4,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 5,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 6,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 7,
    coin: "USDT",
    chain: "SELF",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 8,
    coin: "BSC",
    chain: "BSC",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD71112039322",
  },
  {
    id: 9,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 10,
    coin: "BTC",
    chain: "BTC",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 11,
    coin: "USDT",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
  {
    id: 12,
    coin: "TRX",
    chain: "ETH",
    address: "0x34Fa6a27b61756Ae45d5dF2E998bD7148C98F542",
  },
];

const CHAINS = [
  {
    id: 1,
    value: "ETH",
  },
  {
    id: 2,
    value: "BSC",
  },
  {
    id: 3,
    value: "SELF",
  },
  {
    id: 4,
    value: "BTC",
  },
];

const COINS = [
  {
    id: 1,
    value: "USDT",
  },
  {
    id: 2,
    value: "BTC",
  },
  {
    id: 3,
    value: "ETH",
  },
  {
    id: 4,
    value: "BNB",
  },
];
