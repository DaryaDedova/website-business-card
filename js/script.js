$(document).ready(function(){

    let list_1 = document.querySelectorAll('.list_1');

    init();

    list_1.forEach(function(element){
        element.onclick = showTabs;
    })

    function init(){
        let block = document.querySelectorAll('.block');
        for(let i = 1; i < block.length; i++){
            block[i].style.display = 'none';
        }
    }

    function showTabs(){
        let data = this.getAttribute('data');
        let block = document.querySelectorAll('.block');

        for(let i = 0; i < block.length; i++){
            block[i].style.display = 'none';
        }

        document.querySelector(`.block[data = "${data}"]`).style.display = 'block';
    }
})