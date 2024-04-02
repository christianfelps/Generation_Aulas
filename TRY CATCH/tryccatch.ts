try{
    const resultado = converte(123)
    console.log(resultado)
}catch(error){
    if(error instanceof TypeError)
console.error("Type error: Tipo de dado incorreto." )
else 
console.error('Erro: '+ error)
} finally{
    console.log("Bye Bye!")
}


export function converte(conteudo: any): string{
     return conteudo.toUppercase()

}