class AlertExtend {

    static showAlert(title, description) {

        console.log("godo");
        const wrapper = document.createElement('div');
        wrapper.className = "wrapper-alert";
        const templateString = '<h4 class = "title">' + title + '</h4><h6 class = "description">' + description + '</h6>';
        wrapper.innerHTML = templateString;
        document.body.appendChild(wrapper);

        setTimeout(function() {
            wrapper.style.opacity = 1;
            wrapper.style.top = "60px";
        }, 10);

        setTimeout(function() {
            wrapper.style.opacity = 0;
            wrapper.style.top = "-200px";
        }, 4000);

        setTimeout(function() {
            wrapper.remove();
        }, 5000);

    }

}

export default AlertExtend;