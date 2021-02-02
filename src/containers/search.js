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
                    <Search.LabelForCity htmlFor="city">Location</Search.LabelForCity>
                    <Search.InputSearch type="text" id="city" placeholder="city, code zip" />
                </Search.FormInput>
                <Search.FormCheckbox>
                    <Search.LabelOnCheckbox>
                      <input type="checkbox" id="new york" />
                      <label htmlFor="city">New York</label>
                    </Search.LabelOnCheckbox>
                    <Search.LabelOnCheckbox>
                      <input type="checkbox" id="san" />
                      <label htmlFor="city">San Francisco</label>
                    </Search.LabelOnCheckbox>
                    <Search.LabelOnCheckbox>
                        <input type="checkbox" id="berlin" />
                        <label htmlFor="city">Berlin</label>
                    </Search.LabelOnCheckbox>
                    <Search.LabelOnCheckbox>
                        <input type="checkbox" id="london" />
                        <label htmlFor="city">London</label>
                    </Search.LabelOnCheckbox>
                </Search.FormCheckbox>
                {/* //4 checkboxes */}
            </Search.Form>
        </Search>
    ) 
}