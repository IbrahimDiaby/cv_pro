const Button = ({className, children} : React.ComponentProps<"button">) => {
  return (
    <>
      <button className={className}>{children}</button>
    </>
  )
}

export default Button;