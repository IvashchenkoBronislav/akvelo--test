

const b ="([}])"
const c ="(})"
const d ="([}])"
const f ="([(})])"
const x ="{()}"

let arr;


let elInd = 0


const doblFilt = (el, num)=>{        

    if(el === '('){
        if(arr.includes('(') === true && arr.includes(')') != true){

            console.log(`NOT BALANCED (${num})`)
        };
        
    }else if(el === ')'){
        if(arr.includes(')') === true && arr.includes('(') != true){

            console.log(`NOT BALANCED (${num})`)
            
        };
    }else if(el === '['){
        if(arr.includes('[') === true && arr.includes(']') != true){

            console.log(`NOT BALANCED (${num})`)
        };
    
    }else if(el === ']'){
        if(arr.includes(']') === true && arr.includes('[') != true){

            console.log(`NOT BALANCED (${num})`)
        }
    }else if(el === '{'){
        if(arr.includes('{') === true && arr.includes('}') != true){
            console.log(`NOT BALANCED (${num})`)
        }
    }else if(el === '}'){
        if(arr.includes('}') === true && arr.includes('{') != true){
            console.log(`NOT BALANCED (${num})`)
        }
    }else if(num == "-1" ){

        console.log(`BALANCED (${num})`)
    }
}   

const symEndArr = (mas)=>{
    arr = mas.split('')
    let v = []
   

    
    console.log(arr,"arr")
    arr.forEach((el,index)=>{
        let last = arr.length - index -1  ;

       
        switch(el){
            case '(':
                if(arr[last] !=')'){
                    doblFilt(arr[index],index)

                };
                break

            case '[':
                if(arr[last] != ']'){
                    
                    doblFilt(arr[index],index)                    
                };
                break
            case '{':
                if(arr[last] != '}'){
                   
                    doblFilt(arr[index],index)   
                };
                break
            case ')':
                if(arr[last] != '('){
                    doblFilt(arr[index],index)

                };
                break

            case ']':
                if(arr[last] != '['){
                    doblFilt(arr[index],index)
                    
                };
                break
            case '}':
                if(arr[last] != '{'){
                    doblFilt(arr[last],index)  
                    
                    
                }else{};
                break
            default:
                elInd = index
                console.log(elInd,1)
        }
    })

}



symEndArr(b)
symEndArr(c)
symEndArr(d)
symEndArr(f)
symEndArr(x)