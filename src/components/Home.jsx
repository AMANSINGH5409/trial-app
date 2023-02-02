import React from 'react'
import TopCat from './TopCat'
import TopSelling from './TopSelling'


const Home = () => {


    return (
        <div className="w-full flex flex-col mt-3 p-3">
            {/* Top Categories */}
            <div className="w-full flex flex-col">
                <h1 className="font-semibold text-3xl">Top Categories</h1>
                <div className="flex flew-row gap-3 border-2 border-black rounded-full ">
                    <TopCat />
                </div>
            </div>
            <div className="mt-10 flex flex-col">
                <h1 className="text-3xl font-semibold">Top Selling Food</h1>
                <div className="flex flex-wrap flex-row gap-2">
                    <TopSelling />
                    <TopSelling />
                    <TopSelling />
                    <TopSelling />
                    <TopSelling />
                    <TopSelling />
                </div>
            </div>
        </div>
    )
}

export default Home