class AlertExtend{

    static showAlert(title, description){

        console.log("godo");
        const wrapper = document.createElement('div');
        wrapper.className = "wrapper-alert";
        const templateString = '<h4 class = "title">' + title + '</h4><h6 class = "description">'+ description+'</h6>';
        wrapper.innerHTML = templateString;
        document.body.appendChild(wrapper);

    }

    
}

export default AlertExtend;