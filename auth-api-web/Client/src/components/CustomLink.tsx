import { Link, type LinkProps } from "react-router-dom";

interface CustomLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
}

export function CustomLink({ children, className = "", ...props }: CustomLinkProps) {
    return (
        <Link
            {...props}
            className={`text-[#0969DA] hover:underline ${className}`}
        >
            {children}
        </Link>
    );
}
