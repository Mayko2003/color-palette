import { useContext, useEffect, useState } from "react"
import { TagItem } from "./TagItem"
import { FilterContext } from "../../../context"
import { getTags } from "../../../api"

export const TagsGrid = () => {

    const { filters } = useContext(FilterContext)

    const [tags, setTags] = useState([])


    useEffect(() => {
        getTags()
            .then((data) => setTags(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="col-md-2">
            <h3 className="fst-italic">Tags</h3>
            <div className="list-group">
                {
                    tags.length > 0 ?
                        (
                            tags.map((tag) => {
                                return (
                                    <TagItem key={tag.id} tag={tag} />
                                )
                            })
                        ) :
                        (
                            <div className="spinner-border mx-auto" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )

                }
            </div>
            <div className="mt-3">
                <h3 className="fst-italic">Filters</h3>
                {filters.tagFilters ?
                    filters.tagFilters.map((tag) => {
                        return (
                            <span key={tag} className='badge bg-secondary me-1' >{tag}</span>
                        )
                    }) :
                    <h3 className="text-center">There not filters</h3>
                }
            </div>
        </div>
    )
}
