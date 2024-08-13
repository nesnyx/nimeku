import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Authenticated"
import { Head, useForm } from "@inertiajs/react";

export default function Create({auth}) {
    const {setData, post, processing, errors } = useForm({
       name:'',
       category : "",
       video_url:"",
       thumbnail:"",
       rating:"",
       is_featured:false
    });


    const onHandleChange = (event)=>{
        setData(event.target.name, event.target.type=== "file" ? event.target.files[0] : event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.anime.store'))
    };

    return(
        <>
        <Head
            title="Create a new Anime"
        />
            <Authenticated auth={auth}> 
                <div className="text-xl">Create a new Anime</div>
                <hr className="mb-4" />
                <div className="mt-4">

                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <InputLabel  value="Name" />
                            <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Enter the name of anime"
                                    isError={errors.name}
                                />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                       <div className="mt-4">
                        <InputLabel  value="category" />
                            <TextInput
                                    id="category"
                                    type="text"
                                    name="category"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Enter the category of anime"
                                    isError={errors.category}
                                />

                            <InputError message={errors.category} className="mt-2" />
                       </div>

                       <div className="mt-4">
                        <InputLabel value="Video Url" />
                            <TextInput
                                    id="video_url"
                                    type="text"
                                    name="video_url"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Enter video url of anime"
                                    isError={errors.video_url}
                                />

                            <InputError message={errors.video_url} className="mt-2" />
                       </div>

                       <div className="mt-4">
                        <InputLabel  value="Thumbnail" />
                            <TextInput
                                    id="thumbnail"
                                    type="file"
                                    name="thumbnail"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Upload thumbnail of anime"
                                    isError={errors.thumbnail}
                                />

                            <InputError message={errors.thumbnail} className="mt-2" />
                       </div>

                       <div className="mt-4">
                        <InputLabel  value="Rating" />
                            <TextInput
                                    id="rating"
                                    type="number"
                                    name="rating"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Enter rating of anime"
                                    isError={errors.rating}
                                />

                            <InputError message={errors.rating} className="mt-2" />
                       </div>

                       <div className="flex flex-row mt-4 items-center">
                            <InputLabel  value="Is Featured" className="mr-3 mt-1" />

                            <Checkbox
                            className="ml-4"
                                name="is_featured"
                                onChange = {(e) => setData("is_featured", e.target.checked)}
                            />

                       </div>
                       <Button
                        type={"submit"}
                        disabled={processing}
                        className="mt-5"
                        children={
                            <span >Submit</span>
                        }
                       />
                    </form>
                </div>
            </Authenticated>
        </>
    )
}