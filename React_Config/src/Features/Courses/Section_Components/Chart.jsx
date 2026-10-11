import { PieChart, Pie, ResponsiveContainer } from "recharts"
function Chart(){
    const data=[
        {name:'Progress', value:42, fill:'#3b82f6'},
        {name:'Remaining', value:58, fill:'#374151'},
    ]
    return(
        <div className="h-full w-full flex justify-center items-center relative">
            <ResponsiveContainer>

            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={25}
                    outerRadius={35}
                    >
                    
                </Pie>

            </PieChart>
            </ResponsiveContainer>
            <span className="absolute text-white text-sm font-semibold">42%</span>
        </div>
    )
}
export default Chart