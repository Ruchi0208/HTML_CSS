//Init github
const github = new GitHub;
//Init UI
const ui = new UI;

//serach input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
	//get input text
	const userText = e.target.value;

	if(userText !== ''){
		//make http call
		github.getUser(usertext)
			.then(data => {
				if(data.profile.message === 'Not Found') {
					//show alert:(message,class)
					ui.showAlert('User not found' , 'alert alert-danger');

				} else {
					//show profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);

				}
			})
	} else {
		//Clear profile
		ui.clearProfile();

	}
});