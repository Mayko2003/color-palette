import { PaletteCard } from "./PaletteCard"

export const PalettesGrid = ({ palettes }) => {
    return (
        <div className="col-md-8">
            <div className="row">
                {
                    palettes.map((palette) => {
                        return (
                            <PaletteCard key={palette.id} pallete={palette} />
                        )
                    })
                }
            </div>
        </div>
    )
}
