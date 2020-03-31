window.addEventListener('DOMContentLoaded', function() {
   'use strict';

let info = document.querySelector('.info-header'),
     tab = document.querySelectorAll('.info-header-tab'),
     tabContent = document.querySelectorAll('.info-tabcontent');

     function hideTabContent(a) {
         for(let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
             tabContent[i].classList.add('hide');
         }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
     
    info.addEventListener('click', function(event) {
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')){
             for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
             }
        }
    });

    // Timers:

    let deadline = '2020-06-02';

    function getTimeRemaining(endtime) {
         let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/1000/60/60);

            return {
                'total': t,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours,
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = (t.hours);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0' + t.seconds).slice(-2);

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

});


