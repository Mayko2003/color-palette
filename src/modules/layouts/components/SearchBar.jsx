import { useState, useContext } from "react";
import { FilterContext } from "../../../context";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {

    const [inputValue, setInputValue] = useState('')
    const { setFilters } = useContext(FilterContext);

    const onChangeInput = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();

        setFilters((filters) => ({ ...filters, searchFields: inputValue }))

    }

    return (
        <div className="col-md-7 mx-auto">
            <form onSubmit={onSubmitForm}>
                <div className="position-relative">
                    <FaSearch className="position-absolute ms-3 mt-2" />
                    <input
                        type='text'
                        placeholder="Search for a palette"
                        value={inputValue}
                        onChange={onChangeInput}
                        className='form-control ps-5 rounded-pill'
                    />
                </div>
            </form>
        </div>
    )
}
