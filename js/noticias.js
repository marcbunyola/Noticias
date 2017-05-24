var i=0;

$(document).ready(function () { 
    $("#carregar").click(function() {
        cargar();
    });
});

function cargar(){
    $.getJSON( "https://rawgit.com/marcbunyola/Noticias/master/data/carrega1.json", function( jsonObject ) {
        crear( jsonObject );
    });
}

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
            //var imatge=$(<'<img>',{src:'../img/fontGran.jpg'});
            var boto=$('<button>',{type:'button',class:'btn btn-primary',id:'boto'});
            var publi=$('<div>',{id:'publi'});
            var navbar=$('<li>',{id:'li'});
            var a=$('<a>',{href:noticiajson.hrefSection});

            //organitzacio de la seccio
            titulo.append(noticiajson.titulo);
            titulo.appendTo(descripcio);
            descripcio.append(noticiajson.descripcio);
            descripcio.appendTo(noticia);
            //$(imatge).appendTo(img);
            img.appendTo(noticia);
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
    };
}
