

fetch ("https://www.omdbapi.com/?i=tt3896198&apikey=7c0a2b78")
.then(res => res.json)
.then(data =>{
    console.log(data);
})