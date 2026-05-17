import React, { useId } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
    const id = useId();

    return (
        <div className="flex items-start gap-2 text-sm text-zinc-900 font-mona select-none">
            <input
                id={id}
                type="checkbox"
                {...props}
                className={`
                    w-4 h-4 cursor-pointer
                    border border-gray-400 rounded-[3px] bg-white
                    appearance-none checked:bg-[#0969DA] checked:border-[#0969DA]
                    relative checked:after:content-['✓'] checked:after:absolute
                    checked:after:text-white checked:after:text-[10px] 
                    checked:after:font-bold checked:after:left-[25%]
                    focus:outline-none transition-all
                    ${className}
                `}
            />
            <label htmlFor={id} className="cursor-pointer leading-tight">
                {label}
            </label>
        </div>
    );
}