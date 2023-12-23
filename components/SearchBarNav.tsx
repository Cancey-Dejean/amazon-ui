import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { BiSearch } from "react-icons/bi"
import SelectWithIcon from "./Select/SelectWithIcon"

export default function SearchBarNav() {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
    console.log(event.target.value)
  }
  return (
    <form className="flex items-center w-full">
      <SelectWithIcon />

      <Autocomplete
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
        renderInput={(params) => <TextField hiddenLabel {...params} />}
      />

      <button
        type="submit"
        className="bg-[#ffdfd7] w-[45px] h-full flex items-center justify-center"
      >
        <BiSearch className="w-[22px] h-[22px]" />
      </button>
    </form>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ label: "The Shawshank Redemption", year: 1994 }]
