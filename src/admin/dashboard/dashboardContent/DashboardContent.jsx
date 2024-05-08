import React from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

const DashboardContent = () => {
    return (
        <div className='grid  grid-rows-3 grid-cols-4 gap-4 mt-6'>

            <div className="card bg-base-100 shadow-xl col-span-1">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl col-span-2 row-span-2">
                <div className="card-body">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardContent;