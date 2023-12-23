"use client"
import Image from "next/image"
import Link from "next/link"
import { GoTriangleDown } from "react-icons/go"
import BasicModal from "./Modals/BasicModal"
import { useState } from "react"
import SearchBarNav from "./SearchBarNav"

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <header className="flex flex-col px-4 text-[14px]">
        <div className="flex items-center justify-between py-[10px]">
          <div className="flex">
            <Link href="/" className="pr-[6px]">
              <Image
                src="https://dummyimage.com/194x60.png/#e6e6e6/ffffff"
                alt="Amazon Logo"
                width={97}
                height={30}
              />
            </Link>
          </div>

          <div>
            <button onClick={handleOpen} className="px-2">
              Delivering to New York
            </button>
            <BasicModal setOpen={setOpen} open={open} />
          </div>

          <div className="relative mt-2 rounded-md flex flex-1 mx-[18px]">
            <SearchBarNav />
          </div>

          <div>Language</div>
          <div>Account & List</div>
          <div>Returns & Orders</div>
          <div>Cart</div>
        </div>
        <nav>Nav</nav>
      </header>
    </>
  )
}

export default Header
