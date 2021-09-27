class Github {
  constructor() {
    this.client_id = "9a3839afb647396d7254";
    this.client_secret = "1a0b721e14d4db95323226683aab65064bb517c8";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
