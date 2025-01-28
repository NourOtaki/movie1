import React from 'react'
function Button(props) {
  return (
    <button className="px-6 py-1 border-2 border-gray-400 text-gray-950 hover:bg-gray-400 bg-slate-500 hover:text-white transition-all rounded-full">
      {props.title}
    </button>
  );
}

export default Button;
