import { useSearchParams } from "react-router-dom";

function Filter() {

    const [searchParam,setSearchParams] = useSearchParams();

    const age = searchParam.get('age');
    const city = searchParam.get('city');

    return (
        <div>
            <h1>Filter Page</h1>
            <h3>My age is : {age}</h3>
            <h3>My city is : {city}</h3>
            <input type="text" onChange={(e) => setSearchParams({text: e.target.value})} placeholder="Set Age in Query Params" />
            <button onClick={() => setSearchParams({age: 40})}>Set Age in Query Params</button>
        </div>
    )
}

export default Filter;