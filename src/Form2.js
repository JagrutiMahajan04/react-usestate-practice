import { useState } from "react";

function Form2() {

    const [userName, setUserName] = useState("");
    const [Age, setAge] = useState("0");

    function showData() {
        console.log(userName, Age);
    }


    return (
        <>
            <form>
                <h2>UserName:</h2>
                <input type="text"
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }}
                    placeholder="Enter your Name" />
                <br /><br />

                <h2>Age:</h2>
                <input type="text"
                    value={Age}
                    onChange={(e) => { setAge(e.target.value) }}
                    placeholder="Enter your Age" />

                <button type="button" onClick={showData()}>Print Value</button>
            </form>

        </>
    )
}
export default Form2;