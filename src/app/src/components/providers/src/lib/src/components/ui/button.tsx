import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
const buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50", { variants: { variant: { default: "bg-accent text-white hover:bg-accent/90 h-10 px-4 py-2", outline: "border border-border bg-transparent hover:bg-card text-text h-10 px-4 py-2", ghost: "hover:bg-card text-text-2 hover:text-text h-10 px-4 py-2" } }, defaultVariants: { variant: "default" } })
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, asChild, children, ...props }, ref) => { if (asChild) { return <a className={buttonVariants({ variant, className })} ref={ref as any}>{children}</a> } return <button className={buttonVariants({ variant, className })} ref={ref} {...props}>{children}</button> })
Button.displayName = "Button"
export { Button, buttonVariants }
