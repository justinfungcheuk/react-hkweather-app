import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id: 1,
            title: "Hongkong"
        },
        {
            id: 2,
            title: "Sydney"
        },
        {
            id: 3,
            title: "Tokyo"
        },
        {
            id: 4,
            title: "Toronto"
        },
        {
            id: 5,
            title: "Paris"
        },
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                // looping through cities we need unique id for every element inside the loop
                // that's how react knows which element changed in the array so that it can update that specific element
                <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({q:city.title})}>{city.title}</button>
            ))}
        </div>
    );
}

export default TopButtons;
