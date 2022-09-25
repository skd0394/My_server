var url = "https://shiv-mock-server.herokuapp.com/api"

let Register = async (event) => {
    event.preventDefault()
    var name = document.getElementById('name').value;
    var batch = document.getElementById('batch').value;
    var course = document.getElementById('course').value;
    var age = document.getElementById('age').value;
    var mobile = document.getElementById('mobile_no.').value;
    var score = document.getElementById('score').value;
    let userData = {
        name, batch, course, age, mobile, score
    }
    console.log(userData)

    let res = await fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': "application/json"
        },

    });
    // console.log(res)
}
