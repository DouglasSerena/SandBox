export default class FlashMessage
{
    addMessage(message, flash)
    {
        this.removeMessage(flash);
        message.forEach(getMessage => {
            flash.classList.add("message");
            let li = document.createElement("li");
            li.innerText = getMessage
            flash.appendChild(li);
        });
    }

    removeMessage(flash)
    {
        flash.classList.remove("message");
        flash.innerHTML = "";
    }
}
