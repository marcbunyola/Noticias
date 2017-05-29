var i=0;
var j=0;
var ample = $(window).width();

$(document).ready(function () { 
    
    $("#carregar").click(function() {
        cargar();
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 190){
        cargar();
        }                  
    });
    if(ample<=768){
        $("#noticia").css({
            "right": "0px !important"
        });
    }
    
});

function cargar(){
    $.getJSON( "https://rawgit.com/marcbunyola/Noticias/master/data/carrega1.json", function( jsonObject ) {
        crear( jsonObject );
    });
}

//al final d'aquesta funció comença la segona càrrega
function crear(jsonObject){
    if (i==0) {
        var principal2=$('<div>',{id:'principal2',class:'container-fluid'});
        $.each(jsonObject, function(i, noticiajson){

            //variables de les parts de la seccio
            var section=$('<div>',{class:'container-fluid',id:noticiajson.idSection});
            var titulo=$('<h1>');
            var noticia=$('<div>',{id:'noticia',class:'row'});
            var descripcio=$('<div>',{class:'col-sm-6',id:'descripcio'});
            var img=$('<div>',{class:'col-sm-6',id:'img'});
            var imatge=$('<img>',{src:'../img/fontGran.jpg'});
            var boto=$('<button>',{type:'button',class:'btn btn-primary',id:'boto'});
            var publi=$('<div>',{id:'publi',class:'hidden-xs'});
            var navbar=$('<li>',{id:noticiajson.llista});
            var a=$('<a>',{href:noticiajson.hrefSection});

            //organitzacio de la seccio
            titulo.append(noticiajson.titulo);
            titulo.appendTo(descripcio);
            descripcio.append(noticiajson.descripcio);
            descripcio.appendTo(noticia);
            $(imatge).appendTo(img);
            img.appendTo(noticia);
            boto.append("LLegir notícia completa >>");
            boto.appendTo(noticia);
            noticia.appendTo(section);
            publi.appendTo(section);
            section.appendTo(principal2);
            a.append(noticiajson.numNoticia);
            a.appendTo(navbar);
            $("#li").after(navbar);
        });
        $("#principal").after(principal2);
        i=1;
        $( "#carregar" ).hide();
        var boto=$('<div>',{class:'container-fluid',style:'text-align:center'});
        var buton=$('<button>',{type:'button',class:'btn btn-default',id:'carregar2'});
        buton.append("+");
        buton.appendTo(boto);
        $("#principal2").after(boto);

        //a partir d'aquí va la segona càrrega
        $('.body').scroll(function () {
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            cargar2();
        }
    });
        $("#carregar2").click(function() {
            cargar2();
        });
        $(window).scroll(function(){
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 190){
        cargar2();
        }                  
    });
    };
}

function cargar2(){
    $.getJSON( "https://rawgit.com/marcbunyola/Noticias/master/data/carrega2.json", function( jsonObject ) {
        crear2( jsonObject );
    });
}

function crear2(jsonObject){
    if (j==0) {
        var principal3=$('<div>',{id:'principal3',class:'container-fluid'});
        var darreraLlista=$('<li>',{class:'dropdown'});
        var aa=$('<a>',{class:'dropdown-toggle',"data-toggle":'dropdown',href:'#'});
        aa.append("Més notícies");
        var span=$('<span>',{class:'caret'});
        var llistaCon=$('<ul>',{class:'dropdown-menu'});

        $.each(jsonObject, function(i, noticiajson){
            //variables de les parts de la seccio
            var section=$('<div>',{class:'container-fluid',id:noticiajson.idSection});
            var titulo=$('<h1>');
            var noticia=$('<div>',{id:'noticia',class:'row'});
            var descripcio=$('<div>',{class:'col-sm-6',id:'descripcio'});
            var img=$('<div>',{class:'col-sm-6',id:'img'});
            var imatge=$('<img>',{src:'../img/fontGran.jpg'});
            var boto=$('<button>',{type:'button',class:'btn btn-primary',id:'boto'});
            var publi=$('<div>',{id:'publi'});
            var navbar=$('<li>',{id:'li'});
            var a=$('<a>',{href:noticiajson.hrefSection});

            //organitzacio de la seccio
            titulo.append(noticiajson.titulo);
            titulo.appendTo(descripcio);
            descripcio.append(noticiajson.descripcio);
            descripcio.appendTo(noticia);
            $(imatge).appendTo(img);
            img.appendTo(noticia);
            boto.append("LLegir notícia completa >>");
            boto.appendTo(noticia);
            noticia.appendTo(section);
            publi.appendTo(section);
            section.appendTo(principal3);
            a.append(noticiajson.numNoticia);
            a.appendTo(navbar);
            navbar.appendTo(llistaCon);
        });
        span.appendTo(aa);
        aa.appendTo(darreraLlista);
        llistaCon.appendTo(darreraLlista);
        $("#llista6").after(darreraLlista);
        $("#principal2").after(principal3);
        j=1;
        $( "#carregar2" ).hide();
    };
}
