"use client"
import Image from "next/image"
import Link from "next/link"
import BasicModal from "./Modals/BasicModal"
import { useState } from "react"
import SearchBarNav from "./SearchBarNav"
import MainMenuCanvas from "./Modals/MainMenuCanvas"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [openMenuCanvas, setOpenMenuCanvas] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleOpenMenuCanvas = () => {
    setOpenMenuCanvas(true)
  }

  return (
    <>
      <header className="flex flex-col text-[14px]  text-white">
        <div className=" bg-forest px-4  flex items-center gap-4 justify-between ">
          <div className="flex">
            <Link href="/" className="h-full">
              {/* https://dummyimage.com/194x60.png/#e6e6e6/ffffff */}
              <Image
                src="/images/amazonlogo.png"
                alt="Amazon Logo"
                width={97}
                height={30}
              />
            </Link>
          </div>

          <div>
            <button
              onClick={handleOpen}
              className=" flex flex-col leading-[1.1]"
            >
              <span className="text-[#ccc] text-[12px] leading-[14px]">
                Deliver to {"Name"}
              </span>
              <span className="text-[14px] font-bold">
                New York, 12345
                {/* Update Location */}
              </span>
            </button>
            <BasicModal setOpen={setOpen} open={open} />
          </div>

          <div className="relative flex flex-1 py-[10px]">
            <SearchBarNav />
          </div>

          <div>Language</div>
          <div>Account & List</div>
          <div>Returns & Orders</div>
          <div>Cart</div>
        </div>
        <nav className="bg-[#195851] px-4">
          <ul className="flex items-center">
            <li>
              <button
                onClick={handleOpenMenuCanvas}
                className="px-[9px] py-[8px] h-full"
              >
                All
              </button>
            </li>
          </ul>
        </nav>

        <MainMenuCanvas
          openMenuCanvas={openMenuCanvas}
          setOpenMenuCanvas={setOpenMenuCanvas}
        />
      </header>
    </>
  )
}

export default Header
