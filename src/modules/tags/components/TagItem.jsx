import { useState, useContext } from "react";

import { FilterContext } from "../../../context";

export const TagItem = ({ tag }) => {

    const [active, setActive] = useState(false);
    const { filters, setFilters } = useContext(FilterContext);

    const handleSelect = () => {
        if (active) {
            setFilters({ ...filters, tagFilter: filters.tagFilter.filter(tagF => tagF !== tag.value) })
        } else {
            setFilters({ ...filters, tagFilter: [...filters.tagFilter, tag.value] })
        }

        setActive(current => !current)

    }

    return (
        <div className="list-group-item btn btn-dark" onClick={ handleSelect }>
            {tag.value}
        </div>
    )
}
