window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    // Function to close the navbar when toggler is visible and clicked
    const closeNavbar = () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    };

    // Add click event listener to toggler
    navbarToggler.addEventListener('click', closeNavbar);

    // Add click event listener to responsive nav items to close navbar
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', closeNavbar);
    });

    // Additional JavaScript code from previous block
    $('.list-inline-item i').hover(
        function() {
            var description = $(this).data('description');
            $(this).after('<span class="description">' + description + '</span>');
        },
        function() {
            $(this).next('.description').remove();
        }
    );

    // Hide all open boxes
    $(".open-box").css("display", "none");

    // Loop to associate the closed-box with its open-box
    var i = 0;
    var numberOfBoxes = $(".closed-box").length;

    while (i < numberOfBoxes) {
        (function(i) {
            // On clicking a closed box...
            $(".closed-box").eq(i).click(function() {
                // Close all the boxes that may already have been opened
                $(".open-box").slideUp();
                // If the open-box associated with the box we're clicking on is closed, open it
                if ($(".open-box").eq(i).is(":hidden")) {
                    $(".open-box").eq(i).slideDown("slow");
                } else {
                    // Otherwise, hide any open boxes
                    $(".open-box").slideUp();
                }
            });
        })(i);
        i++;
    }

    // When user clicks on close button, open boxes close
    $(".close-button").click(function() {
        $(".open-box").slideUp();
    });

    // Language toggle
    document.getElementById("language-toggle").addEventListener("change", toggleLanguage);

    // Gallery functionality
    $('.gallery ul li a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });

    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery ul li a").click(function() {
        $('html').animate({
            scrollTop: parseInt($("#top").offset().top)
        }, 200);
    });
});


// Fonction pour changer la langue
function switchLanguage(lang) {
    // Récupère tous les éléments qui ont un attribut 'data-french' ou 'data-english'
    const elements = document.querySelectorAll('[data-french], [data-english]');
    
    elements.forEach(element => {
        if (lang === 'fr') {
            // Met à jour le texte en français
            element.textContent = element.getAttribute('data-french');
        } else {
            // Met à jour le texte en anglais
            element.textContent = element.getAttribute('data-english');
        }
    });
}

// Écouteur d'événement sur le bouton de basculement de langue
document.getElementById('language-toggle').addEventListener('change', function () {
    if (this.checked) {
        switchLanguage('fr');
    } else {
        switchLanguage('en');
    }
});
