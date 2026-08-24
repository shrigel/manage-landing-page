export default function Button({ children, variant = 'primary', type = 'button', className = '', ...props }) {
    return (
        <button className={`button button--${variant} ${className}`} type={type} {...props}>
            {children}
        </button>
    )
}