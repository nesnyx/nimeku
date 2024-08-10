import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel";
import PropTypes from 'prop-types';
import LoginButton from "@/Components/LoginButton";
import RegisterButton from "@/Components/RegisterButton";
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from "react";
import ValidationErrors from "@/Components/ValidationErrors";
import InputError from "@/Components/InputError";



TextInput.propTypes = {
    type: PropTypes.oneOf(['string','email','password','number','file']),
    name:PropTypes.string,
    value : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    variant : PropTypes.oneOf(['primary','error','primary-outline']),
    autoComplete : PropTypes.string,
    required : PropTypes.bool,
    isFocused : PropTypes.bool,
    handleChange : PropTypes.func,
    placeholder :   PropTypes.string,
}

LoginButton.propTypes = {
    type : PropTypes.oneOf(['button','submit','reset']),
    className : PropTypes.string,
    variant : PropTypes.oneOf(['primary','warning','danger','light-outline','white-outline']),
    children : PropTypes.node
}

export default function Register(){

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });


    const onHandleChange = (event)=>{
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };


    return (
        <>
        <Head title="Register"/>
        <div className="mx-auto max-w-screen min-h-screen bg-vintage text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/nimeku.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex flex-col laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/wibu.png" alt=""/>
                    <div className="my-[10px]">
                        <div className="mb-4"/>
                            <h1 className="text-[2rem] font-bold mt-2 mb-2 text-btn-bg">Register</h1>
                            
                            <p className="text-base text-black leading-7 mb-10">
                           
                            Explore new Anime and get <br/>
                            the better insight for your life experience in isekai!
                        </p>
                    </div>
                        
                </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                
                                <InputLabel
                                value={"Full Name"}
                                />

                                    <TextInput  
                                    type="string" name="name"
                                    value={data.name}
                                    isFocused={true}
                                    
                                    handleChange={onHandleChange}
                                    required
                                    placeholder="Full Name"
                                    />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                
                                <InputLabel
                                value={"Email address"}
                                />

                                    <TextInput  
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="Email Address"
                                    handleChange={onHandleChange}
                                    required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel
                                    value={"Password"}
                                    />
                                <TextInput
                                
                                type="password" 
                                name="password"
                                value={data.password}
                                placeholder="Password"
                                handleChange={onHandleChange}
                                required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    value={"Confirmation Password"}
                                    />
                                <TextInput
                                
                                type="password" 
                                name="password_confirmation"
                                    value={data.password_confirmation}
                                    placeholder="Confirmation Password"
                                    handleChange={onHandleChange}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            
                           

                           
                                <RegisterButton
                                disabled={processing}
                                
                                type={"submit"}
                                children={<span className="text-base text-white">
                                    Create New Account
                                </span>}
                                />
                            

                            <Link href={route('login')}>
                                    <button className="text-gray-700 font-semibold hover:text-tael transition ease-in-out duration-150">You have already account? Login now!</button>
                            </Link>
                            
                            
                            {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </button>  */}
                        </div>
                    </form>
                </div>
        </div>  
        </>
        
    )
}