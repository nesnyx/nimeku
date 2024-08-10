export default function LoginButton({ className = '',value, disabled,children,type, ...props }) {
    return (
        <button
            {...props}
            className={
                `items-center px-4 py-2 bg-tael border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-nature focus:bg-gray-700 active:bg-green focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            
            value={value}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
}
