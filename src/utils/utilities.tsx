const OpenLink = (url : string) => {
    window.open(url, "_blank")
}

const verify = (value: string) => {
    return value.toString().trim();
};

const checkPasswordEquals = (password : string, password2: string) => {
    return verify(password) === verify(password2);
}

const validateEmail = (email : string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

const validatePassword = (password : string) => {
    const passwordRegex = /^[a-zA-Z0-9_]{8,}$/;
    return password.length >= 8 && passwordRegex.test(password);
}

const validateUsername = (username : string) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
}

const basename =
    window.location.host === "unes-idf.fr" ||
    window.location.host === "www.unes-idf.fr"
    ? window.location.origin
    : "http://localhost:5173";

const membersPath = "/assets/images/members";
const carouselPath = "/assets/images/";
const imagePath = "/assets/images/";
// const imageProjectsPath = "/assets/images/projects";
// const imageFlagsPath = "/assets/images/flags";
// const imageProgrammingPath = "/assets/images/programming";
// const imageSocialPath = "/assets/images/social";

export {
    OpenLink,
    membersPath,
    carouselPath,
    imagePath,
    verify,
    basename,
    checkPasswordEquals,
    validateEmail,
    validateUsername,
    validatePassword,
    // imageProjectsPath,
    // imageFlagsPath,
    // imageProgrammingPath,
    // imageSocialPath,
}