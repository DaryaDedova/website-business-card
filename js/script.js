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

    // первое

    $('.mo_1').click(function(){
        $('.overlay').show();
    })

    $('.close_popup').click(function(){
        $('.overlay').hide();
    })

    // второе

    $('.mo_2').click(function(){
        $('.overlay_aloe').show();
    })

    $('.close_aloe').click(function(){
        $('.overlay_aloe').hide();
    })

    // третье

    $('.mo_3').click(function(){
        $('.overlay_three').show();
    })

    $('.close_popup_win').click(function(){
        $('.overlay_three').hide();
    })

    $('.close_win').click(function(){
        $('.overlay_three').hide();
    })


    // четвертое

    $('.mo_4').click(function(){
        $('.overlay_four').show();
    })

    $('.close_popup_win').click(function(){
        $('.overlay_four').hide();
    })

    $('.btn_popup_four').click(function(){
        $('.overlay_four').hide();
    })


    $('.img_aloe_one').mouseenter(function(){
        $('.aloe_hover_one').show();
    })
    
    $('.img_aloe_one').mouseleave(function(){
        $('.aloe_hover_one').hide();
    })

    $('.img_aloe_two').mouseenter(function(){
        $('.aloe_hover_two').show();
    })
    
    $('.img_aloe_two').mouseleave(function(){
        $('.aloe_hover_two').hide();
    })

    $('.img_aloe_three').mouseenter(function(){
        $('.aloe_hover_three').show();
    })
    
    $('.img_aloe_three').mouseleave(function(){
        $('.aloe_hover_three').hide();
    })

    $('.aloe_hover_one').mouseenter(function(){
        $('.aloe_hover_one').show();
    })
    $('.aloe_hover_two').mouseenter(function(){
        $('.aloe_hover_two').show();
    })
    $('.aloe_hover_three').mouseenter(function(){
        $('.aloe_hover_three').show();
    })
    
    $('.aloe_hover_one').mouseleave(function(){
        $('.aloe_hover_one').hide();
    })
    $('.aloe_hover_two').mouseleave(function(){
        $('.aloe_hover_two').hide();
    })
    $('.aloe_hover_three').mouseleave(function(){
        $('.aloe_hover_three').hide();
    })



    let changeThemeButtons = document.querySelectorAll('.Theme_svg');

    changeThemeButtons.forEach(button => {
        button.addEventListener('click', function(){
            //добавляем обработчик событий на клик
            let theme = this.dataset.theme //помещаем в переменную название темы из атрибута data-theme
            applyTheme(theme)//вызываем функцию, которая меняет тему и передаем в нее название
        });
    });


    function applyTheme(themeName){
        document.querySelector('[title = "theme"]').setAttribute('href', `css/theme-${themeName}.css`); //Помещаем путь к файлу темы в пустой link в head
        changeThemeButtons.forEach(button => {
            button.style.display = 'block'; //показываем все кнопки смены темы
        })
        document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
        localStorage.setItem('theme', themeName)
    }


    let activeTheme = localStorage.getItem('theme'); //Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной
    if(activeTheme === null || activeTheme === 'light'){
        //если значение не записано, либо оно равно light применяем светлую тему
        applyTheme('light');
    }
    else if(activeTheme === 'dark'){
        applyTheme('dark')
    }

    mapGIS()

    function mapGIS(){
        let container = document.createElement('div'),
            mapBlock = document.getElementById('mapBlock');
        
        container.id = 'map';
        container.style.width = '100%';
        container.style.height = '400px';
        mapBlock.appendChild(container);
    
        DG.then(function () {
                map = DG.map('map', {
                    center: [55.70284007975821,37.53053864932481],
                    zoom: 15
                });
                DG.marker([55.70284007975821,37.53053864932481]).addTo(map).bindPopup('МГУ');
            })
    }

    











})


