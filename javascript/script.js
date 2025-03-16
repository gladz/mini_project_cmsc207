
let counter = 0;

function myFunction(){

  var description1 = document.getElementById('description1');
  var image1 = document.getElementById('image10');
  
  const desc1 = `
    <h2>Who am I</h2>
    <p>Hi My name is Gladilyn Abella, <br />but you can call me Gladz! <br />
    33 Years old Female <br />and was born on September 15, 1991.
    </p>
    `;

  const desc2 = `
    <h2>Family</h2>
    <p>I am married to Ernesto Abella for 9 Years and <br />had children with Yzen and Owen


    </p>
    `;

  const desc3 = `
    <h2>Education and Work</h2>
    <p>I'm a BS Information Technology
graduate at PUP,<br /> and currently I'm working in a government agency 
<br />as a systems analyst</p>
    `;

  const img1 = '../images/me_copy.jpg';
  const img2 = '../images/family.jpg';
  const img3 = '../images/me2.jpg';

if(counter==0){
  
  image1.src = img1;
  description1.innerHTML = desc1;

}else if(counter == 1){
  image1.src = img2;
  description1.innerHTML = desc2;

}else if(counter == 2){
  image1.src = img3;
  description1.innerHTML = desc3;

}else{

  counter = 0;
}
counter++
}



function playHobbiesVideo() {
            const video = document.getElementById("hobbies_video");
            const audio = document.getElementById("hobbies_audio");
            
            video.play().catch((error) => {
                console.error("Error playing audio: ", error);
            });
            audio.play().catch((error) => {
                console.error("Error playing audio: ", error);
            });
        };

function playInterestVideo() {
            const video = document.getElementById("interest_video");
            
            video.play().catch((error) => {
                console.error("Error playing audio: ", error);
            });
        };


