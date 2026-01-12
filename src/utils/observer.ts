const options = {
    rootMargin: "0px 0px",
    // root: document.querySelector("#root"),
    scrollMargin: "0px",
    threshold: 0
}

export const myObserver = {
    className : "",
    observer : new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add(myObserver.className);
            // myObserver.observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove(myObserver.className);
            // myObserver.observer.unobserve(entry.target);
        }
        return;

    })}, options)

}

