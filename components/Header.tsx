import Image from "next/image"
import Link from "next/link"
import { GoTriangleDown } from "react-icons/go"

const Header = () => {
  return (
    <>
      <header className="flex flex-col px-4">
        <div className="flex items-center justify-between py-[10px]">
          <div className="flex">
            <Link href="/" className="px-[6px]">
              <Image
                src="https://dummyimage.com/194x60.png/#e6e6e6/ffffff"
                alt="Amazon Logo"
                width={97}
                height={30}
              />
            </Link>
          </div>

          <div>
            <button className="px-2">Delivering to New York</button>
          </div>

          <div className="relative mt-2 rounded-md shadow-sm flex flex-1 border border-gray-300">
            <div className=" inset-y-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <div className="relative h-full bg-[#e6e6e6] min-w-[52px]">
                <GoTriangleDown className="absolute top-1/2 -translate-y-1/2 right-[6px]" />

                <select
                  tabIndex={0}
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="h-full border-0 bg-transparent text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm pl-[10px] pr-[20]  appearance-none !text-[12px] relative w-full"
                >
                  <option selected>All</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
            </div>

            <input
              type="text"
              name="phone-number"
              id="phone-number"
              className="block w-full rounded-md border-0 py-1.5  text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
              placeholder="Search Amazon"
            />
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
