function a()
{
    let nm = document.getElementById("nm").value
    let n1 = Number(document.getElementById("n1").value) 
    let n2 = Number(document.getElementById("n2").value) 
    let n3 = Number(document.getElementById("n3").value) 
    if (n1 > 10){n1=10}
    else{}
    if (n2 > 10){n2=10}
    else{}
    if (n3 > 10){n3=10}
    else{}
    m = (n1 + n2 + n3)/3
    document.getElementById('rslt').innerHTML = ("a media do aluno "+nm +" foi "+ m)
    
    if (m>5)
    {
        //document.getElementById("rst").innerHTML = "APROVADO"
        document.getElementById("apr").innerHTML = "APROVADO"
        document.getElementById("rpr").innerHTML = ""
    }
    else
    {
        //document.getElementById("rst").innerHTML = "REPROVADO"
        document.getElementById("rpr").innerHTML = "REPROVADO"
        document.getElementById("apr").innerHTML = ""
    }
}