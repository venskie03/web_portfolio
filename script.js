function sendEmail(event) {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const pnumber = document.getElementById('pnumber');
    const cname = document.getElementById('cname');
    const msg = document.getElementById('msg');

    const sendbody = `
    <h1>Name: ${name.value}</h1> <br>
    <h1>Email: ${email.value}</h1> <br>
    <h1>Phone Number: ${pnumber.value}</h1> <br>
    <h1>Company Name: ${cname.value}</h1> <br>
    <h1>Message:</h1> <br>
    <p>${msg.value}</p>
    `


    event.preventDefault(); // Prevent page refresh

    Email.send({
        SecureToken : "3e4e847b-763a-4489-be8b-859e651fd85c",
        To: 'kevinkyleganados03@gmail.com',
        From: "rudy72094@icqwj05.cse445.com",
        Subject: "This is the subject",
        Body: sendbody
    }).then(
        message => {
            alert("Email Sent Successfully");
            console.log(message);
            name.value = ""
            email.value = ""
            pnumber.value = ""
            cname.value = ""
            msg.value = ""
        }
    );
}

