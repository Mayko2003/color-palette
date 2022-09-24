import { TagItem } from "./TagItem"


export const TagsGrid = ({ tags }) => {
    return (
        <div className="col-2">
            <h3 className="text-center">Tags</h3>
            <div className="list-group">
                {
                    tags.map((tag) => {
                        return (
                            <TagItem key={tag.id} tag={tag} />
                        )
                    })
                }
            </div>
        </div>
    )
}
