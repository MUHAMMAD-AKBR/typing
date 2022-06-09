const mydiv = document.querySelector(".paper") as HTMLDivElement;

class Typing {
    element_to_attach: HTMLDivElement
    fonts: string
    color: string
    constructor(element_to_attach,fonts = "Montserrat",color = "black"){
        this.element_to_attach = element_to_attach
        this.fonts = fonts,
        this.color = color
    } 

    attach_to_body(){
        document.body.appendChild(this.element_to_attach)
        // set color and fonts
        this.element_to_attach.style.fontFamily = this.fonts
        this.element_to_attach.style.color = this.color
        return this 
    }

    typing(text:string, delay_incrementer:number = 20){
        let delay = 0;
        const splitted = text.split("");
        // every character is going to have a delay and it will increase of each loop by the incrementer 
        splitted.forEach(char => {
            setTimeout(() => {
                this.element_to_attach.textContent += char
            },delay)
            delay += delay_incrementer;
        }) 
    }
}

const test = new Typing(mydiv,"Montserrat","#13E875").attach_to_body().typing("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tenetur in molestias facere odit consequatur ea doloremque possimus maxime, saepe sit aut error perferendis voluptas vel, eius laborum mollitia beatae dolorum unde impedit sed corporis cupiditate quod. Ipsa eligendi, voluptate dignissimos quibusdam fugiat dolore quia, ducimus, deserunt ipsam perspiciatis accusantium molestias esse impedit. Voluptatem, quam a veniam placeat modi beatae animi eaque odio ducimus iure minima dolores, sit possimus architecto optio blanditiis provident perferendis amet, assumenda quaerat voluptatum cupiditate fugiat distinctio quisquam. Pariatur ipsa architecto voluptatem officiis, nam similique, quidem impedit voluptas sapiente, voluptate suscipit error. Optio labore laboriosam excepturi.", 150)
