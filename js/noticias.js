//------------------Volver arriba---------------------------
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.go-top').fadeIn(duration);
        } else {
            jQuery('.go-top').fadeOut(duration);
        }
    });

    jQuery('.go-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

$(function() {
    var i = 0;
    function cargarJSON(i) {
        fichero = "data/" + i + "noticias.json";
        $.getJSON(fichero, function(jsonObject) {
            ponerNoticias(jsonObject);
        });
    }
    $("#todas").click(function() {
        cargarJSON(i + 1);
        cargarJSON(i + 2);
        i = 3;
    });
    $(document).scroll(function() {
        if (($(window).scrollTop() + $(window).height() > $(document).height() - 10) && (i < 2)) {
            cargarJSON(i + 1);
            i++;
        }
    });
});

function ponerNoticias(json) {
    $.each(json, function(j, objeto) {
        $('#noticia').append('<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 noticias"' + 
            '<div class="card">' +
            '<a href="#">' + objeto.img +
            '<h2>' + objeto.titulo + '.</h2>' +
            '</a>' +
            '<div class="datetime">' + 
            '<span class="glyphicon glyphicon-calendar">' +
            '</span>' +
            '<span>' + objeto.fecha + '</span>' +
            '</div>' +
            '<div class="card-content">' +
            '<h3>' + objeto.titulo2 + '</h3>' +
            '<p>' + objeto.texto + '</p>' +
            '<div id="#' + objeto.id +  '" class="collapse">' +
            '<p>' + objeto.texo2 + '</p>' +
            '</div>' + 
            '</div>' +
            '<div class="card-read-more">' +
            '<a class="btn btn-link btn-block" data-toggle="collapse" href="#' + objeto.id + '" onclick="cambiar()">' + objeto.mas + '</a>' +
            '</div>' +
            '</div>';
    });
};

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.go-top').fadeIn(duration);
        } else {
            jQuery('.go-top').fadeOut(duration);
        }
    });
    jQuery('.go-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

//---------------Movimiento header-----------------------
function openTab(tabName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
document.getElementById("active").click();