class UI {
  constructor() {
    this.profile = document.querySelector("#output");
    this.searchLabel = document.querySelector("#label-search");
    this.search = document.querySelector("#search");
    this.form = document.querySelector("form");
    this.repo_count = document.querySelector(".repos");
  }

  showProfile(profile) {
    //Insert the Api Response into html elements
    this.profile.innerHTML = `
        <div class="profile__details">
        <div class="profile__img-con sh-md">
          <img src="${profile.avatar_url}" class="profile__img" alt="user image" />
        </div>
        <div class="profile__followers-con">
          <div class="text-group">
            <span class="profile__followers">
              <span class="profile__followers-count repos">${profile.public_repos}</span>
              <b class="posts">Repos</b>
            </span>
            <span class="profile__followers">
              <span class="profile__followers-count followers">${profile.followers}</span>
              <b class="posts">Followers</b>
            </span>
            <span class="profile__followers">
              <span class="profile__followers-count following">${profile.following}</span>
              <b class="posts">Following</b>
            </span>
            <span class="profile__followers">
              <span class="profile__followers-count following">${profile.public_gists}</span>
              <b class="posts">Gists</b>
            </span>
          </div>
          <div class="button-group">
            <a href="${profile.html_url}" target="_blank" class="profile__show-profile">Show profile</a>
            <a href="${profile.repos_url}" target="_blank" class="profile__view-repo">View Repos</a>
            <a href="${profile.events_url}" target="_blank" class="profile__view-repo">View Events</a>
          </div>
        </div>
      </div>
      <div class="profile__about mb-sm">
        <ul>
          <li><b>Name:</b> ${profile.name}</li>
          <li><b>Emal:</b> ${profile.email}</li>
          <li class="bio">
            <b>Bio:</b> ${profile.bio}
          </li>
          <li>
            <b>Website:</b>
            <a href="http://www.${profile.blog}" class="website" target="_blank">${profile.blog}</a>
          </li>
          <li><b>Location:</b> ${profile.location}</li>
          <li><b>Created on:</b> ${profile.created_at}</li>
        </ul>
      </div>
       <h1 class="repos__heading mb-sm">Latest repos</h1>
        `;
  }

  showRepos(repos) {
    //We have to loop through each repos
    let output = "";
    repos.forEach(repo => {
      output += `
      <div class="repos__count">
        <div class="repos__card sh-sm mb-mn">
          <a href="${repo.html_url}" class="repos__name" target="_blank">${repo.name}</a>
          <div class="repos__fet">
            <span class="repos__stars">Stars: <span class="repos__value">${repo.stargazers_count}</span></span>
            <span class="repos__watchers">Watchers: <span class="repos__value">${repo.watchers_count}</span></span>
            <span class="repos__forks">Forks: <span class="repos__value">${repo.forks_count}</span></span>
          </div>
        </div>
      </div>

      `;
    });
    this.repo_count.innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();
    //create a div element to insert the alert message
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    this.form.insertBefore(div, this.searchLabel);

    //remove the alert after 1.5s
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3200);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearInput() {
    this.profile.innerHTML = "";
    this.repo_count.innerHTML = "";
  }
}
