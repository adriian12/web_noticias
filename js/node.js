// $(document).ready(function() {

//     /*
//      * Comprueba si la ventana modifica su tamaño.
//      * En el caso correcto si el tamñano es menor a 768 píxels se comprueba si esta en el top 
//      * para activar el banner en dispositivos móviles. En caso contrario se deja el banner activo.
//      */
//     var i = 0;

//     //Event de scroll
//     $(document).ready(function() {
//         var count = 0;
//         $(document).scroll(function() {

//             if (($(window).scrollTop() + $(window).height() > $(document).height() - 10) && (i < 2)) {

//                 var col = document.createElement("div");
//                 col.className = "col-xs-12 col-sm-6 col-md-6 col-lg-9 noticias";
//                 var col = document.createElement("div");
//                 col.className = "card";
//                 var a = document.createElement("a");
//                 a.setAttribute('href', "#");
//                 var img = document.createElement("img");
//                 img.src = json[i].img;
//                 img.className = "img-fluid img-responsive";
//                 img.alt = "imagen noticia";
//                 var h1 = document.createElement("h1");
//                 h1.className = "card-title";
//                 h1.textContent = json[i].title;


//                 var col = document.createElement("div");
//                 col.className = "card-content titulo";
//                 var h4 = document.createElement("h4");
//                 h1.className = "card-title";
//                 h1.textContent = json[i].titleDos;

//                 var col = document.createElement("div");
//                 col.className = "datetime";
//                 var span = document.createElement("span");
//                 span.className= "glyphicon glyphicon-calendar";
//                 span.textContent = json[i].date;

//                 var col = document.createElement("div");
//                 col.className = "";
//                 var p = document.createElement("p");
//                 p.textContent = json[i].desc;

//                 var col = document.createElement("div");
//                 col.id = "texto0" + i;
//                 col.className = "collapse";
//                 var p = document.createElement("p");
//                 p.textContent = json[i].descDos;

//                 var col = document.createElement("div");
//                 col.className = "card-read-more";
//                 var a = document.createElement("a");
//                 a.className= "btn btn-link btn-block";
//                 a.data-toggle= "collapse";
//                 a.setAttribute('href', "#texto0" + i);

//                 //var n = document.createElement("div");
//                 //n.className = "not img-rounded"; 

//                 n.appendChild(img);
//                 n.appendChild(des);
//                 a.appendChild(h1);
//                 a.appendChild(h4);
//                 a.appendChild(n);
//                 col.appendChild(a);
//                 row.appendChild(col);

//                 cargarJSON(i + 1);
//                 i++;

//             }
//         });
//     });


//     function cargarJSON(i) {
//         fichero = "json/" + i + "noticias.json";
//         $.getJSON(fichero, function(jsonObject) {
//             ponerNoticias(jsonObject);
//         });
//     }

//     function ponerNoticias(json) {
//         $.each(json, function(j, item) {

//         });
//     }
// });



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
