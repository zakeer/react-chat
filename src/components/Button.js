import React from 'react';

export default function Button(props) {
    return <button
        className="w-40 rounded p-2 bg-slate-900 text-white ml-24 mt-4 hover:bg-slate-800"
        {...props}
    >
        {props.children}
    </button>
}