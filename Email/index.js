function sendEmail(){
    const name = document.querySelector("#txtName").value
    const message = document.querySelector("#txtMessage").value

   //incializa o componente EmailJS
        emailjs.init("user_9n4VhVo7FjVYomH3zji2I")

        const template_params = {
            "reply_to": "reply_to_value",
            "from_name": name,
            "to_name": "to_name_value",
            "message_html": message
         }
         
         const service_id = "default_service";
         const template_id = "template_ablsn4jP";
         emailjs.send(service_id,template_id,template_params)


    console.log("olá " + name)
    console.log (message)
}