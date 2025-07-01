function CountButtons({fn}) {
    return ( 
        <div className="flex justify-center items-center">
            <div 
            onClick={() => {fn(1) }}
            className="m-10 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"> 
                + 
            </div>
            <div 
            onClick={() => {fn(-1) }}
            className="m-10 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"> 
                - 
            </div>
        </div>
     );
}

export default CountButtons;