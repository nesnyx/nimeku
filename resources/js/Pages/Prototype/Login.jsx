import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel";
import PropTypes from 'prop-types';
import LoginButton from "@/Components/LoginButton";
import RegisterButton from "@/Components/RegisterButton";
import { Link, Head } from "@inertiajs/react";

// digunakan untuk melakukan check pada input
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
    isError : PropTypes.bool
}

LoginButton.propTypes = {
    type : PropTypes.oneOf(['button','submit','reset']),
    className : PropTypes.string,
    variant : PropTypes.oneOf(['primary','warning','danger','light-outline','white-outline']),
    children : PropTypes.node
}

export default function Login(){
    return (
        <>
            <Head title="Login"/>
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
                        <h1 className="text-[2rem] font-bold mt-2 mb-2 text-btn-bg">Login</h1>
                            
                            <p className="text-base text-black leading-7 mb-10">
                           
                            Explore new Anime and get <br/>
                            the better insight for your life experience in isekai!
                        </p>
                    </div>
                        
                </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                
                                <InputLabel
                                value={"Email address"}
                                />

                                    <TextInput  
                                    type="email" name="email"
                                    
                                    placeholder="Email Address"
                                    />
                            </div>
                            <div>
                                <InputLabel
                                    value={"Password"}
                                    />
                                <TextInput
                                
                                type="password" name="password"
                                
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            
                           <Link href={route('prototype.dashboard')}>
                        
                            <LoginButton type={"button"} 
                               
                                children={<span className="text-base font-semibold">
                                    Login
                                </span>}
                                />
                            
                           </Link>

                            <Link href={route('prototype.register')}>
                                <RegisterButton
                                
                                type={"button"}
                                children={<span className="text-base text-white">
                                    Create New Account
                                </span>}
                                />
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