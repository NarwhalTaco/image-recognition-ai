async function showImg(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
        let url = data[0].url

        let requestedImg = document.createElement("img");
        requestedImg.setAttribute('src', `${url}`)

        let catImg = document.querySelector(".catImg")
        catImg.appendChild(requestedImg);
    })
    .catch(err => console.log(err))
}