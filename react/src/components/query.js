import React, {useState} from 'react';

const Query = () =>{
    const [user, setUser] = useState({
        name: "",
        question: "",
        phone: ""
    });
    let name, value;

    const handleInputs = (e) =>{
        console.log(e.target.value);
        name = e.target.name;
        value= e.target.value;

        setUser({...user, [name] : value});
    }

    const postData = async (e) =>{
        e.preventDefault();

        const {name, question, phone} = user;

        const res = await fetch("http://localhost:8080/queryinsert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:name,
                question:question,
                phone:phone
            })
        });

    }

    return(
        <div className="container">
            <h3>Submit Your Queries Here</h3>
            <form className="form" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                    <input name="name" type="text" value={user.name} onChange={handleInputs} class="form-control" id="name" placeholder="Enter Name"/>
            </div>
            <div class="form-group">
                <label for="question">Question</label>
                    <input name="question" type="text" value={user.question} onChange={handleInputs} class="form-control" id="question" placeholder="Ask Questions"/>
            </div>
            <div class="form-group ">
                <label for="phone">Mobile Number</label>
                    <input name="phone" type="number" value={user.phone} onChange={handleInputs} class="form-control" id="phone" placeholder="Enter Mobile Number"/>
                
            </div>
                    <button onClick={postData} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Query;