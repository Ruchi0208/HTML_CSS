//callback functionss
const posts = [
	{title: 'Post One' , body: 'This is post one.'},
	{title: 'Post Two' , body: 'This is post two'}
];

// function createPost(post) {
// 	setTimeout(function() {
// 		posts.push(post);
// 	} , 2000);
// }

// function getPosts() {
// 	setTimeout(function() {
// 		let output = '';
// 		posts.forEach(function(post) {
// 			output += `<li>${post.title}</li>`;
// 		});
// 		document.body.innerHTML = output;
// 	} , 1000);
// }

// createPost({title: 'Post Three' , body: 'This is post three'});
// getPosts();
//op:only post one and post two as we have set the time to create the post is 2 sec and get posts in 1 sec
//so the post are printed frst then post three is created(synchronous way)






//Asynchronous way

function createPost(post , callback) {
	setTimeout(function() {
		posts.push(post);
		callback();
	} , 2000);
}

function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach(function(post) {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	} , 1000);
}

createPost({title: 'Post Three' , body: 'This is post three'} , getPosts);
//here what happens is we pass getPosts as callback so it is called after function ends or before that 2 sec or after that function does work