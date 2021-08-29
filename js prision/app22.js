/*const listaPosts = document.querySelector('#listaPosts')
const httpRequest = new XMLHttpRequest()
let posts;

httpRequest.open('GET','https://jsonplaceholder.typicode.com/posts/4')
httpRequest.send();
//console.log(httpRequest);
httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200){
        posts = JSON.parse(httpRequest.response)
        console.log(httpRequest.response)
        //exibePosts();
    }
};*/
/*const listaPosts = document.querySelector('#listaPosts')
fetch('https://jsonplaceholder.typicode.com/posts/4')
    .then((response) => response.json())
    .then((json)=>{
        posts = json;
    })
    .then(()=>{
        console.log(posts)
        //exibePosts()
    });

function exibePosts(){
    setTimeout(() =>{
        let saida = '';
        posts.forEach((post) => {
            saida += `<li> ${post.title}</li>
                    <li>${post.body}</li> <hr></hr>`
        });
    listaPosts.innerHTML = saida;
    }, 3000)
}*/

/*const listaPosts = document.querySelector('#listaPosts')
fetch('https://jsonplaceholder.typicode.com/posts', {
        method:"POST",
        body: JSON.stringify({
            tittle: 'new post',
            body: 'corpo do novo post',
            userId:5,
        }),
        headers:  {
            'content-type': 'application/json; charset=UTF-8'
        },

    })
    .then((response) => response.json())
    .then((json)=>{
        posts = json;
    })
    .then(()=>{
        console.log(posts)
        //exibePosts()
    });*/


    const listaPosts = document.querySelector('#listaPosts')
fetch('https://jsonplaceholder.typicode.com/posts/2', {
        method:"PUT",
        body: JSON.stringify({
            tittle: 'new post',
            body: 'corpo do novo post - atualização',
            userId:5,
        }),
        headers:  {
            'content-type': 'application/json; charset=UTF-8'
        },

    })
    .then((response) => response.json())
    .then((json)=>{
        posts = json;
    })
    .then(()=>{
        console.log(posts)
        //exibePosts()
    });