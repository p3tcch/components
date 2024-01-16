import React, { useState } from "react";


function Login({ components }: any) {

    const api_route = components.url.api;

    const [user, setUser] = useState({ username: "", password: "" });
    const [log, setLog] = useState({ stat: "", txt: [] });

    const getId = (event: React.BaseSyntheticEvent) => {
        setUser({ username: event.target.value, password: user.password });
    };
    const getPassword = (event: React.BaseSyntheticEvent) => {
        setUser({ username: user.username, password: event.target.value });
    };
    const SubmitUser = () => {

        fetch( api_route + "login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {user}
                })
            })
            .then(response => response.json())
            .then(data => {

              setLog(data[1]);
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <input type="text" onChange={getId}></input>
            <input type="text" onChange={getPassword}></input>
            <button onClick={SubmitUser}> Login </button>

            {log.txt.map((e, v) => {
                return <p key={"stat" + v}> {e} </p>
            })}

        </div>
    );
}
export default Login;