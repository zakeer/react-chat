import React from 'react';

export default function Button({className, ...props}) {
    return <button
        className={`rounded p-2 bg-slate-900 text-white hover:bg-slate-800 ${className || ''}`}
        {...props}
    >
        {props.children}
    </button>
}