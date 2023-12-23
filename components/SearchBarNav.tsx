import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { BiSearch } from "react-icons/bi"
import { IoSearchSharp } from "react-icons/io5"

import SelectWithIcon from "./Select/SelectWithIcon"

export default function SearchBarNav() {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
    console.log(event.target.value)
  }
  return (
    <form className=" w-full">
      <div className="flex items-center w-full  h-full">
        <SelectWithIcon />

        <div className="flex-1">
          <input
            type="text"
            name="text"
            id="text"
            className="w-full border-0 py-2 px-[9px] text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500"
            placeholder="Search Amazon"
          />
        </div>

        {/* <Autocomplete
          disablePortal
          fullWidth
          id="combo-box-demo"
          options={top100Films}
          className="flex-1"
          renderOption={(props, option) => (
            <div>
              <div>Recent Searches</div>

              <div className="flex items-center">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                  <BiSearch className="w-[22px] h-[22px]" />
                </div>

                {option.label}
              </div>

              <div>Trending</div>
            </div>
          )}
          renderInput={(params) => (
            <TextField
              placeholder="Search Amazon"
              className="mui-input"
              hiddenLabel
              {...params}
            />
          )}
        /> */}

        <button
          type="submit"
          className="bg-[#ffdfd7] w-[45px] h-full flex items-center justify-center rounded-tr-md rounded-br-md focus:ring-2 focus:ring-inset focus:ring-pink-500"
        >
          <IoSearchSharp className="w-[22px] h-[22px] text-black" />
        </button>
      </div>
    </form>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ label: "The Shawshank Redemption", year: 1994 }]
