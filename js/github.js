class Github {
  constructor() {
    //Github url properties
    this.client_id = "c32db8f6babd93686f30";
    this.client_secret = "78f47d89022cd7b76038e97b14b4500842981f75";
    this.page_count = 5;
    this.sort = "created: asc";
  }

  //Create the prototype method
  async getUser(username) {
    //Fetch the user
    const profileResponse = await fetch(
      `http://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `http://api.github.com/users/${username}/repos?per_page=${this.page_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}