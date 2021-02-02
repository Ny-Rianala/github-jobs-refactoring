import React from "react";
import { Search } from "../components";
import { InputLabel } from "../components/search/styles/search";


export default function SearchContainer() {
    
    console.log(Search);
    return (
        <Search>    
            <Search.Form>
                <Search.Checkbox>
                    <input type="checkbox" id="fulltimeId" />
                    <Search.InputLabel htmlFor="fulltime">Full time</Search.InputLabel>
                </Search.Checkbox>
                <Search.FormInput>
                    <label htmlFor="city">Location</label>
                    <Search.InputSearch type="text" id="city" placeholder="city, code zip" />
                </Search.FormInput>
                <Search.FormCheckbox>
                <Search.LabelOnCheckbox>
                    <input type="checkbox" id="new york" />
                    <label htmlFor="city">New York</label>
                </Search.LabelOnCheckbox>
                    <label htmlFor="city">San </label>
                    <input type="checkbox" id="san" />
                    <label htmlFor="city">Berlin</label>
                    <input type="checkbox" id="berlin" />
                    <label htmlFor="city">London</label>
                    <input type="checkbox" id="london" />
                </Search.FormCheckbox>
                {/* //4 checkboxes */}
            </Search.Form>
        </Search>
    ) 
}