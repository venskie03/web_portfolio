    
    const dev = document.querySelectorAll("#dev path");
    for(let i = 0; i < dev.length; i++){
        console.log(`Letter ${i} is ${dev[i].getTotalLength()}`)
    }

    gsap.fromTo('.loading_page',{
    opacity:1
    },{
        opacity:0,
        delay:5,
        duration:3,
    })
    
    function gotoupwork() {
            window.location.href = 'https://www.upwork.com/freelancers/~01528b2b871299a364';
        }

        const navbar = document.querySelector('header');

        const sectionn = document.querySelectorAll('section');
        const navlinkss = document.querySelectorAll('nav ul li a');

        window.onscroll = () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-color-primary-dark');
                navbar.classList.add('border-b');
                navbar.classList.add('border-color-gray');
            } else {
                navbar.classList.remove('bg-color-primary-dark');
                navbar.classList.remove('border-b');
                navbar.classList.remove('border-color-gray');
            }

            // active link
            let current = 'home';

            sectionn.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            })
            navlinkss.forEach((item) => {
                item.classList.remove('text-[#3bd6c6]');
                if (item.href.includes(current)) {
                    item.classList.add("text-[#3bd6c6]");
                }
            });
        }

        // Mobile menu
        const hamburger = document.querySelector('#hamburger');
        const menu = document.querySelector('#menu');
        const hLink = document.querySelectorAll('#hLink');
        const faSolid = document.querySelector(".fa-solid");
        const closeicon = document.querySelector('#closeicon');

        hamburger.addEventListener("click", () => {
            
            hamburger.classList.add('hidden')
            closeicon.classList.remove('hidden')
            closeicon.classList.add('visible')
        
            menu.classList.toggle('hidden');
            faSolid.classList.toggle('fa-xmark');
      
          
        })

        closeicon.addEventListener("click", () => {
            
            closeicon.classList.add('hidden')
            hamburger.classList.remove('hidden')
            hamburger.classList.add('visible')
        
            menu.classList.toggle('hidden');
            faSolid.classList.toggle('fa-xmark');
      
          
        })

        hLink.forEach(link => {
            link.addEventListener('click', () => {
                closeicon.classList.add('hidden');
                hamburger.classList.remove('hidden')
                hamburger.classList.add('visible');
                menu.classList.toggle('hidden');
                faSolid.classList.toggle('fa-xmark');
            
            })
        })

        // testimonial
        const userTexts = document.getElementsByClassName('user-text');
        const userPics = document.getElementsByClassName('user-pic');

        function showReview() {
            for (userPic of userPics) {
                userPic.classList.remove("active-pic");
            }
            for (userText of userTexts) {
                userText.classList.remove("active-text");
            }

            let i = Array.from(userPics).indexOf(event.target);

            userPics[i].classList.add('active-pic');
            userTexts[i].classList.add('active-text');
        }

        const toggleBtn = document.getElementById('toggleBtn');

        const card_1_front = document.querySelector("#card_1_front");
        const card_1_back = document.querySelector("#card_1_back");

        const card_2_front = document.querySelector("#card_2_front");
        const card_2_back = document.querySelector("#card_2_back");

        const card_3_front = document.querySelector("#card_3_front");
        const card_3_back = document.querySelector("#card_3_back");

        toggleBtn.addEventListener('change', () => {
            card_1_front.classList.toggle('-rotate-y-180');
            card_1_back.classList.toggle('rotate-y-180');

            card_2_front.classList.toggle('-rotate-y-180');
            card_2_back.classList.toggle('rotate-y-180');

            card_3_front.classList.toggle('-rotate-y-180');
            card_3_back.classList.toggle('rotate-y-180');

        })


function sendEmail(event) {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const pnumber = document.getElementById('pnumber');
    const cname = document.getElementById('cname');
    const msg = document.getElementById('msg');
    const loading = document.getElementById('loading')
    const btn = document.getElementById('btn-send')

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
        To: 'kevinkyleganados033@gmail.com',
        From: "rudy72094@icqwj05.cse445.com",
        Subject: "This is the subject",
        Body: sendbody
    }).then(
        message => {
            loading.classList.remove("hidden");
            loading.classList.add("visible");
            btn.classList.add("pl-2");
            btn.textContent = "Sending..."
           setTimeout(()=>{
            loading.classList.remove("visible");
            loading.classList.add("hidden");
            btn.classList.remove("pl-2");
            btn.textContent = "Message Sent!"
           },3000)
            console.log(message);
            name.value = ""
            email.value = ""
            pnumber.value = ""
            cname.value = ""
            msg.value = ""
        }
    );
}

