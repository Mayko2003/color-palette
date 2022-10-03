import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { getTags } from "../../api";
import { ColorPalettesContext } from "../../context";


export const PaletteCreate = () => {

    const [tags, setTags] = useState([]);

    const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext);

    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            color1: '#ffffff',
            color2: '#ff6161',
            color3: '#74e797',
            color4: '#769cf4',
        }
    });


    useEffect(() => {
        getTags().then((tags) => {
            setTags(tags);
        }).catch((err) => console.log(err));

        return () => {

        }
    }, [])


    const onSubmitForm = (data) => {
        const newPalette = {
            id: colorPalettes.length + 1,
            name: data.name,
            colors: [
                data.color1.toUpperCase(),
                data.color2.toUpperCase(),
                data.color3.toUpperCase(),
                data.color4
            ],
            tags: [data.tags],
            liked: false
        }

        setColorPalettes([...colorPalettes, newPalette]);

        navigate('/');
    }



    return (
        <div className="col-8 mx-auto">
            <h3 className="text-center mb-3">Create your own palette!!!</h3>
            <form action="" className="col-8 mx-auto" onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mb-3">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        {...register("name", { required: 'Name is required' })}
                    />
                    <span className="text-danger">{errors.name?.message}</span>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Color 1</label>
                    <input
                        type="color"
                        className="form-control p-0"
                        {...register("color1", { required: 'Color 1 is required' })}
                    />
                    <span className="text-danger">{errors.color1?.message}</span>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Color 2</label>
                    <input
                        type="color"
                        className="form-control p-0"
                        {...register("color2", { required: 'Color 2 is required' })}
                    />
                    <span className="text-danger">{errors.color2?.message}</span>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Color 3</label>
                    <input
                        type="color"
                        className="form-control p-0"
                        {...register("color3", { required: 'Color 3 is required' })}
                    />
                    <span className="text-danger">{errors.color3?.message}</span>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Color 4</label>
                    <input
                        type="color"
                        className="form-control p-0"
                        {...register("color4", { required: 'Color 4 is required' })}
                    />
                    <span className="text-danger">{errors.color4?.message}</span>
                </div>

                <div className="mb-3">
                    <label htmlFor="">Tag</label>
                    <select className="form-select" {...register('tag', {
                        required: 'Tag is required'
                    })}>

                        <option value=''>Select a tag</option>
                        {
                            tags.map((tag) => {
                                return <option value={tag.value} key={tag.id}>{tag.value}</option>
                            })
                        }

                    </select>
                    <span className="text-danger">{errors.tag?.message}</span>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}
