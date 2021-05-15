var espnum
img="_imagens/letra_x_modificada.png"
auxiliar="X"
var c=1
var espacos=[]
var jogadorx=[]
var jogadoro=[]
var vencer=false
function ganhou(){
    var win=false
    var aux=0
    for(var i=1;i<=3;i++){
        if(jogadorx.indexOf(i)!=-1){
            aux++
        }
    }
    if(aux!=3){
        aux=0
        for(var i=1;i<=3;i++){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=4;i<=6;i++){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=4;i<=6;i++){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=7;i<=9;i++){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=7;i<=9;i++){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=1;i<=7;i+=3){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=1;i<=7;i+=3){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=2;i<=8;i+=3){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=2;i<=8;i+=3){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=3;i<=9;i+=3){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=3;i<=9;i+=3){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=1;i<=9;i+=4){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=1;i<=9;i+=4){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=3;i<=7;i+=2){
            if(jogadorx.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux!=3){
        aux=0
        for(var i=3;i<=7;i+=2){
            if(jogadoro.indexOf(i)!=-1){
                aux++
            }
        }
    }
    if(aux==3){
        win=true
    }
    if(win==true){
        alert(`JOGADOR ${auxiliar} GANHOU`)
        window.location.reload()
        vencer=true
    }
    if(aux!=3){
        var velha=0
        for(var i=1;i<=9;i++){
            if(espacos.indexOf(i)!=-1){
                velha++
            }
        }
        if(velha==9){
            alert("DEU VELHA")
            vencer=true
            window.location.reload()
        }
    }
}
function verificar(v){
    var aux
    aux=espacos.indexOf(v)
    if(aux==-1){
        return true
    }else{
        return false
    }
}
function botarimg(v){
    var imagem=document.getElementById(`espaco${v}`)
    imagem.setAttribute("src",img)
}
function mudarjogador(){
    if(c==1){
        img="_imagens/letra_x_modificada.png"
        auxiliar="O"
        c=0
    }else{
        img="_imagens/letra_o_modificado.png"
        auxiliar="X"
        c=1
    }
}
function clicou(v){
    var aprovado=verificar(v)
    if(aprovado==false){
        alert("Espaço já marcado")
    }else{
    switch(v){
        case 1:
            espacos.push(1)
            if(auxiliar=="X"){
                jogadorx.push(1)
            }else{
                jogadoro.push(1)
            }
            espnum=1
            break
        case 2:
            espacos.push(2)
            if(auxiliar=="X"){
                jogadorx.push(2)
            }else{
                jogadoro.push(2)
            }
            espnum=2
            break
        case 3:
            espacos.push(3)
            if(auxiliar=="X"){
                jogadorx.push(3)
            }else{
                jogadoro.push(3)
            }
            espnum=3
            break
        case 4:
            espacos.push(4)
            if(auxiliar=="X"){
                jogadorx.push(4)
            }else{
                jogadoro.push(4)
            }
            espnum=4
            break
        case 5:
            espacos.push(5)
            if(auxiliar=="X"){
                jogadorx.push(5)
            }else{
                jogadoro.push(5)
            }
            espnum=5
            break
        case 6:
            espacos.push(6)
            if(auxiliar=="X"){
                jogadorx.push(6)
            }else{
                jogadoro.push(6)
            }
            espnum=6
            break
        case 7:
            espacos.push(7)
            if(auxiliar=="X"){
                jogadorx.push(7)
            }else{
                jogadoro.push(7)
            }
            espnum=7
            break
        case 8:
            espacos.push(8)
            if(auxiliar=="X"){
                jogadorx.push(8)
            }else{
                jogadoro.push(8)
            }
            espnum=8
            break
        case 9:
            espacos.push(9)
            if(auxiliar=="X"){
                jogadorx.push(9)
            }else{
                jogadoro.push(9)
            }
            espnum=9
            break
    }
    ganhou()
    mudarjogador()
    botarimg(espnum)
    escrever()
    if(auxiliar=="O"&& vencer==false){
        ia()
    }
}
}
function escrever(){
    var escrever=document.getElementById("teste")
    escrever.innerHTML=`<p>Vez do jogador ${auxiliar}</p>`
}
function ia(){
    var continua=false
    while(continua==false){
        var jogada=Math.floor(Math.random()*9+1)
        if(jogadoro.indexOf(jogada)==-1&&espacos.indexOf(jogada)==-1){
            continua=true
            clicou(jogada)
        }else{
            continua=false
        }
    }
}
