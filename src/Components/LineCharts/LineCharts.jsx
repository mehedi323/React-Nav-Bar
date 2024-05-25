import { LineChart,Line } from 'recharts';

const LineCharts = () => {
    const data = [
        {
            name: 'Student 1',
            math: 85,
            physics: 90,
            chemistry: 88
        },
        {
            name: 'Student 2',
            math: 75,
            physics: 80,
            chemistry: 82
        },
        {
            name: 'Student 3',
            math: 95,
            physics: 85,
            chemistry: 91
        },
        {
            name: 'Student 4',
            math: 70,
            physics: 75,
            chemistry: 78
        },
        {
            name: 'Student 5',
            math: 80,
            physics: 95,
            chemistry: 85
        }
    ]

    return (
        <div>
            <LineChart width={600} height={400} data={data}>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='green'></Line>
                <Line dataKey={"chemistry"} stroke='blue'></Line>
            </LineChart> 
        </div>
    );
};

export default LineCharts;