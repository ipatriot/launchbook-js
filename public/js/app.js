document.getElementsByTagName("nav")[0];

document.getElementById('sidebar-right');

document.getElementsByClassName('favorites')[0];

document.getElementsByClassName('pages')[0];

document.getElementsByClassName('groups')[0];

document.getElementById('sidebar-left').getElementsByTagName('div');

document.getElementsByClassName('comments');

document.getElementsByClassName('comments')[0];

var comments = document.getElementsByClassName('comments');
var lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];

document.getElementsByClassName('comments')[3];


var ads = document.getElementById('sidebar-right');
ads.style.visibility = "hidden";

var ads = document.getElementsByClassName('ad-slot')[2];
var pics = ads.getElementsByTagName('img')[0];
pics.setAttribute('src', 'http://placebear.com/200/300');

var posts = document.getElementsByClassName('media-body');
var lastPostIndex = posts.length - 1;
posts[lastPostIndex];
var posting = posts[lastPostIndex].getElementsByTagName('p')[0];
posting.innerHTML = 'I like pears';

var things = document.getElementsByClassName('post')[0];
var likeLink = things.getElementsByTagName('li')[0];
likeLink.className = likeLink.className + " post-liked"

var things = document.getElementsByClassName('post')[0];
var likeLink = things.getElementsByTagName('li')[0];
likeLink.classList.remove('post-liked')
