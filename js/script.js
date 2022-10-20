window.onload = function () {
    window.addEventListener('scroll', function () {
        let header = document.querySelector('.header');
        let mainBanner = document.querySelector('.main-banner');

        let bannerHeight = mainBanner.offsetHeight;
        if(bannerHeight - window.pageYOffset < 0) {
            header.classList.add('_scrolled')
        }
        if(bannerHeight - window.pageYOffset > 0) {
            header.classList.remove('_scrolled')
        }
    })

    $('a[href^="#"').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });


    // ============= //
    // Years counter //
    // ============= //

    function setYearsCount (startYear, maxYear) {
        return function runYearsCount() {
            setTimeout(() => {
                startYear++;
                if(startYear <= maxYear) {
                    startYear < 10 ?  
                    $('.main-banner__years-count').html(`${startYear}&nbsp;`) :
                    $('.main-banner__years-count').html(`${startYear}&nbsp;`); 
                    
                    runYearsCount(startYear, maxYear);
                }
            }, 80)
        }
    }

    setTimeout(setYearsCount(0, 25), 100);



}

