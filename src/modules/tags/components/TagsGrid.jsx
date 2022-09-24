import { useContext } from "react"
import { TagItem } from "./TagItem"
import { FilterContext } from "../../../context"

export const TagsGrid = ({ tags }) => {

    const { filters } = useContext(FilterContext)

    return (
        <div className="col-md-2">
            <h3 className="fst-italic">Tags</h3>
            <div className="list-group">
                {
                    tags.map((tag) => {
                        return (
                            <TagItem key={tag.id} tag={tag} />
                        )
                    })
                }
            </div>
            <div className="mt-3">
                <h3 className="fst-italic">Filters</h3>
                {filters.tagFilter.length ?
                    filters.tagFilter.map((tag) => {
                        return (
                            <span className='badge bg-secondary me-1'>{tag}</span>
                        )
                    }) :
                    <h3 className="text-center">There not filters</h3>
                }
            </div>
        </div>
    )
}
