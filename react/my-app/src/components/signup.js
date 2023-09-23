const Signup = () => {
    const HandleOnClick = async () => {
        const response = await fetch("http://localhost:8000/api/signup/", {
            mode : "cors",
            method : "POST",
            body : JSON.stringify(
                {
                    username : "gello",
                    email : "vishakhpro2002@gmail.com",
                    password: "heelo"
                }
            ),
            headers : {
                "Content-Type": "application/json"
            }

        })

    }
    return ( 
        <button onClick = {() => {HandleOnClick()}}>submit</button>
     );
}
 
export default Signup;