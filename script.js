let addToDoButton = document.querySelector('#addToDo'); //eriştik add butonuna
let toDoContainer = document.querySelector('#toDoContainer'); //ekleyecegımız yeri sectık
let inputText = document.querySelector('#inputText'); //girilen deger olan ınput
let clearTodo=document.querySelector('#clearToDo');//clear idsini seçtik
//add butuna bir kere tılandıgında
addToDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p'); //paragraph oluşturyoruz
    paragraph.classList.add('paragraph-styling'); //p etiketine class  eklıyoruz
    toDoContainer.appendChild(paragraph); //toDoCotainer id sieparagrapa ekledik
    paragraph.innerHTML = inputText.value; //inputa girilenın valuesi ni
    inputText.value = ""; //girildikten sonra boş ata

    //1 kere tıklanınca
    paragraph.addEventListener('click',function (){
        paragraph.style.textDecoration = 'line-through';//stilile oyanadık
    });

    paragraph.addEventListener('dblclick', function(){//üzerine çift tıklanınca tıklananı removeChild yap
        toDoContainer.removeChild(paragraph);
    });

    clearTodo.addEventListener('click',function () {
        paragraph.remove();
        
        //paragraph.style.display='none'; //bu yok eder silmez 
    });

});