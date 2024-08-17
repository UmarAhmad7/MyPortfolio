const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer' ,'Web Designer','Content-Writer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})

const navele=document.querySelectorAll(".navbar a")
console.log(navele)
navele.forEach((ele)=>{
    document.querySelector(".active")?.classlist.remove('active')
    ele.classList.add('active')
})

function changeText() {
    const paragraph = document.getElementById("service-description");
    
    // First, fade out the text
    paragraph.classList.add("hidden");

    // After the transition, change the text and fade in
    setTimeout(() => {
        paragraph.textContent = "HTML - CSS - JS - React - NodeJs     ExpressJs - MongoDB - TailwindCss Git - Github";
        paragraph.classList.remove("hidden");
    }, 1000); // Timeout should match the duration of the transition (1s)
}
function changeText1() {
    const paragraph = document.getElementById("Competitive");
    
    // First, fade out the text
    paragraph.classList.add("hidden");

    // After the transition, change the text and fade in
    setTimeout(() => {
        paragraph.textContent = "CodeChef - (1520) 2 star coder  GSSOC Contributor";
        paragraph.classList.remove("hidden");
    }, 1000); // Timeout should match the duration of the transition (1s)
}
function changeText2() {
    const paragraph = document.getElementById("DS");
    
    // First, fade out the text
    paragraph.classList.add("hidden");

    // After the transition, change the text and fade in
    setTimeout(() => {
        paragraph.textContent = "LeetCode -Solved more than 350 question with a good Time Complexity and Space Complexity";
        paragraph.classList.remove("hidden");
    }, 1000); // Timeout should match the duration of the transition (1s)
}

function emailSend()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}