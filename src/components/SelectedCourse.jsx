import SelectedNames from "./SelectedNames";

const SelectedCourse = ({courses, creditSum,sum}) => {
    return (
        <div className="m-2 p-4 bg-white rounded-md">
            <h1 className="font-semibold my-2 text-blue-500">Credit Hour Remaining {20 - creditSum} hr</h1>
            <hr  className="border"/>
            <h1 className="font-bold my-2">Course Name</h1>
            <div className="list-decimal">
            {
                courses.map(x => <SelectedNames x={x}> </SelectedNames>)
            }
            </div>
            <hr  className="border"/>
            <h1 className="font-normal my-2">Total Credit Hour : {creditSum}</h1>
            <hr  className="border"/>
            <h1 className="font-normal my-2">Total Price : {sum} USD</h1>
        </div>
    );
};

export default SelectedCourse;