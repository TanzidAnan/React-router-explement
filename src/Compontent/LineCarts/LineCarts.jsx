import { LineChart as LC, Line } from 'recharts';

const LineCarts = () => {
    const markMarkesData=[
        {
            "student": "Student 1",
            "math_marks": 85
        },
        {
            "student": "Student 2",
            "math_marks": 78
        },
        {
            "student": "Student 3",
            "math_marks": 92
        },
        {
            "student": "Student 4",
            "math_marks": 67
        },
        {
            "student": "Student 5",
            "math_marks": 75
        },
        {
            "student": "Student 6",
            "math_marks": 88
        },
        {
            "student": "Student 7",
            "math_marks": 95
        },
        {
            "student": "Student 8",
            "math_marks": 80
        },
        {
            "student": "Student 9",
            "math_marks": 72
        },
        {
            "student": "Student 10",
            "math_marks": 90
        }
    ]
    
    return (
        <div>
            <LC width={400} height={300} data={markMarkesData}>
            <Line dataKey='math_marks'></Line>
            </LC>
        </div>
    );
};

export default LineCarts;