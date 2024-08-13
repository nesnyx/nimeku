export default function Button({ className = '',value, disabled,children,type, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2  border border-transparent font-semibold text-xs text-white bg-nature w-auto ${
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
