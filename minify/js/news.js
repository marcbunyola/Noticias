function cargar(){$.getJSON("https://rawgit.com/marcbunyola/Noticias/master/data/carrega1.json",function(i){crear(i)})}function crear(a){if(0==i){var n=$("<div>",{id:"principal2",class:"container-fluid"});$.each(a,function(i,a){var c=$("<div>",{class:"container-fluid",id:a.idSection}),o=$("<h1>"),r=$("<div>",{id:"noticia",class:"row"}),e=$("<div>",{class:"col-sm-6",id:"descripcio"}),d=$("<div>",{class:"col-sm-6",id:"img"}),p=$("<img>",{src:a.imatge}),t=$("<div>",{id:"publi",class:"hidden-xs"}),s=$("<li>",{id:a.llista}),l=$("<a>",{href:a.hrefSection});o.append(a.titulo),o.appendTo(e),e.append(a.descripcio),e.appendTo(r),$(p).appendTo(d),d.appendTo(r),r.appendTo(c),t.appendTo(c),c.appendTo(n),l.append(a.numNoticia),l.appendTo(s),$("#li").after(s)}),$("#principal").after(n),i=1,$("#carregar").hide();var c=$("<div>",{class:"container-fluid",style:"text-align:center"}),o=$("<button>",{type:"button",class:"btn btn-default",id:"carregar2"});$("<span>",{class:"glyphicon glyphicon-plus-sign"}).appendTo(o),o.appendTo(c),$("#principal2").after(c),$(".body").scroll(function(){$(this).scrollTop()+$(this).innerHeight()>=$(this)[0].scrollHeight&&cargar2()}),$("#carregar2").click(function(){cargar2()}),$(window).scroll(function(){$(window).scrollTop()>=$(document).height()-$(window).height()-190&&cargar2()})}}function cargar2(){$.getJSON("https://rawgit.com/marcbunyola/Noticias/master/data/carrega2.json",function(i){crear2(i)})}function crear2(i){if(0==j){var a=$("<div>",{id:"principal3",class:"container-fluid"}),n=$("<li>",{class:"dropdown"}),c=$("<a>",{class:"dropdown-toggle","data-toggle":"dropdown",href:"#"});c.append("Més notícies");var o=$("<span>",{class:"caret"}),r=$("<ul>",{class:"dropdown-menu"});$.each(i,function(i,n){var c=$("<div>",{class:"container-fluid",id:n.idSection}),o=$("<h1>"),e=$("<div>",{id:"noticia",class:"row"}),d=$("<div>",{class:"col-sm-6",id:"descripcio"}),p=$("<div>",{class:"col-sm-6",id:"img"}),t=$("<img>",{src:n.imatge}),s=$("<div>",{id:"publi"}),l=$("<li>",{id:"li"}),g=$("<a>",{href:n.hrefSection});o.append(n.titulo),o.appendTo(d),d.append(n.descripcio),d.appendTo(e),$(t).appendTo(p),p.appendTo(e),e.appendTo(c),s.appendTo(c),c.appendTo(a),g.append(n.numNoticia),g.appendTo(l),l.appendTo(r)}),o.appendTo(c),c.appendTo(n),r.appendTo(n),$("#llista6").after(n),$("#principal2").after(a),j=1,$("#carregar2").hide()}}var i=0,j=0;$(document).ready(function(){$("#carregar").click(function(){cargar()}),$(window).scroll(function(){$(window).scrollTop()>=$(document).height()-$(window).height()-190&&cargar()})});