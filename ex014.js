function soma(...valores){

    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}

 console.log( soma(1,9,20,10))




/*function soma(...valores){
let tam = valores.length
let res =0
for(let i=0;i<tam;i++){
    res += valores[i]
}
return res
}
console.log(soma(10,5))*/






/*function soma(...valores){
    let tam = valores.length
    let res =0
return valores.length //passa a quantidade de parametros
}
console.log(soma(10,5,2,4,20,56))*/






/*function soma(n1,n2){
    return n1+n2
}
console.log(soma(5,10))*/