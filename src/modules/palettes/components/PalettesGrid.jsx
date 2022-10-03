
import { PaletteCard } from "./PaletteCard"

export const PalettesGrid = ({palettes}) => {

    return (
        <div className="col-md-8">

            <div className="row">
                {
                    palettes.length ?
                        (
                            palettes.map((palette) => {
                                return (
                                    <PaletteCard key={palette.id} palette={palette} />
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
        </div>
    )
}
