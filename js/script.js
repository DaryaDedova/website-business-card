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



//________________________________________________________________//



    let list_2 = document.querySelectorAll('.list_2');

    list_2.forEach(function(element){
        element.onclick = showTabsNav;
    })

    function showTabsNav(){
        
        $('main').show()
        let data = this.getAttribute('data');
        let block = document.querySelectorAll('.block');

        for(let i = 0; i < block.length; i++){
            block[i].style.display = 'none';
            document.querySelector(`.block[data = "${data}"]`).style.display = 'block';
        } 
    }

    
    


    // let graphic = document.querySelectorAll('.graphic');
    // let web_des = document.querySelectorAll('.web_des');
    // let photography = document.querySelectorAll('.photography');

    // block_hide();

    // function block_hide(){

    // }
    
    
    // $('.graphic').hide()
    // $('.web_des').hide()
    // $('.photography').hide()

    $('.all_li').click(function(){
        $('.graphic').show()
        $('.web_des').show()
        $('.photography').show()

    })

    $('.web_des_li').click(function(){
        $('.web_des').show()
        $('.graphic').hide()
        $('.photography').hide()

    })

    $('.photography_li').click(function(){
        $('.photography').show()
        $('.web_des').hide()
        $('.graphic').hide()

    })

    $('.graphic_li').click(function(){
        $('.graphic').show()
        $('.web_des').hide()
        $('.photography').hide()

    })

    $('main').hide()

    $('.home_li').click(function(){
        $('main').hide();
        $('.home').show();
    })

    $('.home_img').click(function(){
        $('main').hide();
        $('.home').show();
    })

    $('.next').click(function(){
        $('main').show();
        $('.home').hide();
    })

//__________________//


    $('.resum_img').click(function(){
        $('.home').hide();
        $('main').show();
    })

    // ____________________________//

    // модальные окна


    $('.mo_1').click(function(){
        $('.overlay').show();
    })

    $('.close_popup').click(function(){
        $('.overlay').hide();
    })

















})


