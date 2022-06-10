const mydiv = document.querySelector(".paper") as HTMLDivElement;



// class Typing {
//     element_to_attach: HTMLDivElement
//     fonts: string
//     color: string
//     text: string
//     arr: Array<string>
//     constructor(element_to_attach,fonts = "Montserrat",color = "black"){
//         this.element_to_attach = element_to_attach
//         this.fonts = fonts
//         this.color = color
//         this.text = ""
//         this.arr = []
//     } 

//     attach_to_body(){
//         document.body.appendChild(this.element_to_attach)
//         // set color and fonts
//         this.element_to_attach.style.fontFamily = this.fonts
//         this.element_to_attach.style.color = this.color
//         return this
//     }

//     async typing(text:string, delay_incrementer:number = 20){
//         return await new Promise((res,rej) => {
//             let delay = 0; 
//             const splitted = text.split("");
//             splitted.forEach(char => {
//             setTimeout(() => {
//                 this.element_to_attach.textContent += char
//                 this.text += char
//                 if(this.text == text){
//                     res(this.arr.push(text))
//                 }
//             },delay)
//             delay += delay_incrementer;
//             })
//         })

         
//     }
 
//     check(){
//         console.log(this.text)
//     }
    
// }

// function deletechar(target: HTMLDivElement, delay: number){
//     let now = 0;
//     setInterval(() => {

//     },now)
// }


// const test = new Typing(mydiv,"Montserrat","#13E875").attach_to_body().typing("Lorem ipsum dolor sit amet", 100);
// console.log(test)

class typewriter {
    antrean: Array<() => Promise<void | string>>
    el: HTMLDivElement
    parent: HTMLDivElement
    color: string
    font: string
    val: string
    constructor(el,parent,color = "black",font = "Montserrat"){
        this.parent = parent
        this.el = el
        this.color = color
        this.font = font
        this.antrean = []
        this.val = ""
    }

    attach(){
        this.el.style.color = this.color
        this.el.style.fontFamily = this.font
       this.parent.appendChild(this.el) 
       return this
    }

    typing(txt:string,delay = 50){
        this.antrean.push(() => {
            return new Promise((resolve,reject) => {
                let now:number = 0;
                const split = txt.split("");
                split.forEach(char => {
                   setTimeout(() => {
                    this.el.textContent += char 
                    this.val += char
                    if(this.val == txt){
                        resolve(this.val)
                    }
                   },now)
                   now += delay
                },)
            })
        })
        return this
    }

    del_char(number: number,delay: number = 100){
        this.antrean.push(() => {
            return new Promise((resolve,reject) => {
                let i = 0;
               const ans = setInterval(() => {
                   this.el.textContent = this.el.textContent.substring(0,this.el.textContent.length - 1)
                   i++ 
                   if(i == number){
                       clearInterval(ans)
                       resolve()
                   }
               },delay) 
               
            })
        })
        return this
    }


     async start(){
        for(let cb of this.antrean){
            await cb()
        }
    }
}

const instance = new typewriter(mydiv,document.body,"#13E875","Montserrat").attach().typing("this is the text",100).del_char(5,100).start()


