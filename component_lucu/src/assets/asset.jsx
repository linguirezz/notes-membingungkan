/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
export function Header (props){
    return(
        <div className="w-[300px] flex justify-around bg-red-500">
        <h1 className="text-5xl font-bold">Notes</h1>
        <button className="w-[30px] h-[30px] bg-blue-400 my-auto flex justify-center items-center" onClick={console.log('p')}>
            <span className="text-2xl">x</span>
        </button>
    </div>
    
    )
}
export function BoxWrite(props){
    return (
        <div className="mx-auto">
 <textarea className=" w-[200px] h-[300px] bg-red-500 mx-auto mt-10 ">
            
        </textarea>
        </div>
       
    )
}