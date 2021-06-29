const a ="([({})])"
const b ="([)"
const c ="(})"
const d ="([}])"
const f ="([(})])"

let arr;

const symEndArr = (mas)=>{
    arr = mas.split('')
    console.log(arr)
    arr.filter((el,index) =>{
        
        switch(el){
            case '}':
                if(arr.includes('{') === true && arr.includes('}') != true){
                    console.log(el)
                    console.log(`NOT BALANCED (${index+1})`,2)
                };
            case '{':
                if(arr.includes('}') === true && arr.includes('{') != true){
                    console.log(el)
                    console.log(`NOT BALANCED (${index+1})`,1)
                };
            
            case '[':
                if(arr.includes(']') === true && arr.includes('[') != true){
                    console.log(el)
                    console.log(`NOT BALANCED (${index+1})`,3)
                };
            case ']':
                if(arr.includes('[') === true && arr.includes(']') != true){
                    console.log(el)
                    console.log(`NOT BALANCED (${index+1})`,3)
                };
            case '(':
                if(arr.includes('(') === true && arr.includes(')') != true){
                    console.log(el)
                    console.log(`NOT BALANCED (${index+1})`,3)
                };
            case ')':
                if(arr.includes(')') === true && arr.includes('(') != true){
                    console.log(el)
                    console.log(`NOT BALANCED (${index+1})`,3)
                };
           
        }
        
        
    })
}


symEndArr(a)
symEndArr(b)
symEndArr(c)
symEndArr(d)
symEndArr(f)