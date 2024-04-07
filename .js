// write your code here
document.addEventListener("DOMContentLoaded", ()=>{
  fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById('card-title').textContent =data.title
      document.getElementById('card-image').src =data.image
      document.getElementById('like-count').input =data.likes
      //document.getElementById('comments-list').innerHTML =data.comments
       
       
    });
//Previous comments
function origComments(){
    //document.getElementById('comments-list').textContent = data.content
     fetch('http://localhost:3000/comments')
       .then(response => response.json())
       .then(data =>{
        document.getElementById('comments-list').textContent =content.value
    const previousComments = document.getElementById('comments-list');
    previousComments.textContent = ''; 
    data.comments.forEach(comment => {
      const li = document.createElement('li');
      li.textContent = comment.content;
      previousComments.appendChild(li);
    });
 });
    
}
//origComments()


//Increase likes
function increaseLikes(){
  const likes = document.getElementById('like-count');
//console.log(likes)
  let countLikes = parseInt(likes.innerText);
   countLikes ++;
  likes.innerText = ` ${countLikes} likes`;
    };
//Event listeners
document.getElementById('like-button').addEventListener('click',increaseLikes);

increaseLikes()


 
//Add a new comment
function addComments(){
    const comment = document.getElementById('comment');
    const newComment = comment.value
    const listComments = document.getElementById('comments-list')
    const li = document.createElement('li')
    li.textContent= newComment.toString()
    listComments.appendChild(li)
}  
//Add event listener
document.getElementById('comment-form').addEventListener('submit',(event)=>{
    event.preventDefault()
    addComments();
});

  

//Event listeners
document.getElementById('like-button').addEventListener('click',increaseLikes);

});


document.addEventListener("DOMContentLoaded", ()=>{
  fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById('card-title').textContent =data.title
      document.getElementById('card-image').src =data.image
      document.getElementById('like-count').input =data.like
       
    });
function origComments(){
    //document.getElementById('comments-list').textContent = data.content
     fetch('http://localhost:3000/comments')
       .then(response => response.json())
       .then(data =>{
        document.getElementById('comments-list').textContent =content.value
    const previousComments = document.getElementById('comments-list');
    previousComments.textContent = ''; 
    data.comments.forEach(comment => {
      const li = document.createElement('li');
      li.textContent = comment.content;
      previousComments.appendChild(li);
    });
 });
    
}

function increaseLikes(){
  const likes = document.getElementById('like-count');

  let countLikes = parseInt(likes.innerText);
   countLikes ++;
  likes.innerText = ` ${countLikes} likes`;
    };
//Event listeners
document.getElementById('like-button').addEventListener('click',increaseLikes);

increaseLikes()


 
//Add a new comment
function addComments(){
    const comment = document.getElementById('comment');
    const newComment = comment.value
    const listComments = document.getElementById('comments-list')
    const li = document.createElement('li')
    li.textContent= newComment.toString()
    listComments.appendChild(li)
}  
//Add event listener
document.getElementById('comment-form').addEventListener('submit',(event)=>{
    event.preventDefault()
    
document.getElementById('like-button').addEventListener('click',increaseLikes);

});
