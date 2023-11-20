<script src="https://mywork.gitiho.com/js/jquery-1.12.4.min.js"></script>
<script>
    $(document).on('click', '#scrollToSubmit',function() {
        var paretq = $('body');
        var elemq = $('#HTML_CODE3073');
        console.log('scroll to submit 2');
        scrollToElement(paretq, elemq);
    });

    var courseJson='{"1":{"id":1,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"2":{"id":2,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"3":{"id":3,"origin_price":399000,"sale_price":199000,"campaign_price":199000},"4":{"id":4,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"5":{"id":5,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"6":{"id":6,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"7":{"id":7,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"8":{"id":8,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"9":{"id":9,"origin_price":1199000,"sale_price":799000,"campaign_price":799000},"10":{"id":10,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"11":{"id":11,"origin_price":499000,"sale_price":149000,"campaign_price":149000},"12":{"id":12,"origin_price":899000,"sale_price":699000,"campaign_price":699000},"13":{"id":13,"origin_price":2250000,"sale_price":2050000,"campaign_price":2050000},"14":{"id":14,"origin_price":2500000,"sale_price":2300000,"campaign_price":2300000},"15":{"id":15,"origin_price":2750000,"sale_price":2550000,"campaign_price":2550000},"16":{"id":16,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"17":{"id":17,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"18":{"id":18,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"19":{"id":19,"origin_price":499999000,"sale_price":499799000,"campaign_price":499799000},"20":{"id":20,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"21":{"id":21,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"22":{"id":22,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"23":{"id":23,"origin_price":199000,"sale_price":99000,"campaign_price":99000},"24":{"id":24,"origin_price":899000,"sale_price":699000,"campaign_price":699000},"25":{"id":25,"origin_price":50000,"sale_price":-50000,"campaign_price":-50000},"26":{"id":26,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"27":{"id":27,"origin_price":399000,"sale_price":199000,"campaign_price":199000},"28":{"id":28,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"29":{"id":29,"origin_price":3500000,"sale_price":3300000,"campaign_price":3300000},"30":{"id":30,"origin_price":999000,"sale_price":699000,"campaign_price":699000},"31":{"id":31,"origin_price":1199000,"sale_price":699000,"campaign_price":699000},"32":{"id":32,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"33":{"id":33,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"34":{"id":34,"origin_price":399000,"sale_price":199000,"campaign_price":199000},"35":{"id":35,"origin_price":799000000,"sale_price":498800000,"campaign_price":498800000},"36":{"id":36,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"37":{"id":37,"origin_price":799000,"sale_price":499000,"campaign_price":499000},"38":{"id":38,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"39":{"id":39,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"40":{"id":40,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"41":{"id":41,"origin_price":799000,"sale_price":599000,"campaign_price":599000},"42":{"id":42,"origin_price":500000,"sale_price":199000,"campaign_price":199000},"43":{"id":43,"origin_price":900000,"sale_price":299000,"campaign_price":299000},"44":{"id":44,"origin_price":499000,"sale_price":-100000,"campaign_price":-100000},"45":{"id":45,"origin_price":1599000,"sale_price":1399000,"campaign_price":1399000},"51":{"id":51,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"52":{"id":52,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"53":{"id":53,"origin_price":1499000,"sale_price":599000,"campaign_price":599000},"54":{"id":54,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"55":{"id":55,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"56":{"id":56,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"57":{"id":57,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"58":{"id":58,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"59":{"id":59,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"60":{"id":60,"origin_price":1600000,"sale_price":599000,"campaign_price":599000},"61":{"id":61,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"62":{"id":62,"origin_price":749000,"sale_price":299000,"campaign_price":299000},"63":{"id":63,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"64":{"id":64,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"65":{"id":65,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"66":{"id":66,"origin_price":900000,"sale_price":299000,"campaign_price":299000},"67":{"id":67,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"68":{"id":68,"origin_price":100000,"sale_price":800000,"campaign_price":800000},"69":{"id":69,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"70":{"id":70,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"71":{"id":71,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"72":{"id":72,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"73":{"id":73,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"74":{"id":74,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"75":{"id":75,"origin_price":1999000,"sale_price":1799000,"campaign_price":1799000},"76":{"id":76,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"77":{"id":77,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"78":{"id":78,"origin_price":799000,"sale_price":199000,"campaign_price":199000},"79":{"id":79,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"80":{"id":80,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"81":{"id":81,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"82":{"id":82,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"83":{"id":83,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"84":{"id":84,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"85":{"id":85,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"86":{"id":86,"origin_price":1999000,"sale_price":299000,"campaign_price":299000},"87":{"id":87,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"88":{"id":88,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"89":{"id":89,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"90":{"id":90,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"91":{"id":91,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"92":{"id":92,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"93":{"id":93,"origin_price":3000000,"sale_price":1300000,"campaign_price":1300000},"94":{"id":94,"origin_price":1599000,"sale_price":1399000,"campaign_price":1399000},"95":{"id":95,"origin_price":999000,"sale_price":999000,"campaign_price":999000},"96":{"id":96,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"97":{"id":97,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"98":{"id":98,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"99":{"id":99,"origin_price":499000,"sale_price":99000,"campaign_price":99000},"100":{"id":100,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"101":{"id":101,"origin_price":199000,"sale_price":99000,"campaign_price":99000},"102":{"id":102,"origin_price":799000,"sale_price":199000,"campaign_price":199000},"103":{"id":103,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"104":{"id":104,"origin_price":1500000,"sale_price":599000,"campaign_price":599000},"105":{"id":105,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"106":{"id":106,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"107":{"id":107,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"108":{"id":108,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"109":{"id":109,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"110":{"id":110,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"111":{"id":111,"origin_price":1500000,"sale_price":700000,"campaign_price":700000},"112":{"id":112,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"113":{"id":113,"origin_price":1500000,"sale_price":599000,"campaign_price":599000},"114":{"id":114,"origin_price":99000,"sale_price":-1000,"campaign_price":-1000},"115":{"id":115,"origin_price":99000,"sale_price":-1000,"campaign_price":-1000},"116":{"id":116,"origin_price":99000,"sale_price":-1000,"campaign_price":-1000},"117":{"id":117,"origin_price":99000,"sale_price":-1000,"campaign_price":-1000},"118":{"id":118,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"119":{"id":119,"origin_price":1499000,"sale_price":299000,"campaign_price":299000},"120":{"id":120,"origin_price":1499000,"sale_price":499000,"campaign_price":499000},"121":{"id":121,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"122":{"id":122,"origin_price":2500000,"sale_price":599000,"campaign_price":599000},"123":{"id":123,"origin_price":99000,"sale_price":-31000,"campaign_price":-31000},"124":{"id":124,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"125":{"id":125,"origin_price":899000,"sale_price":399000,"campaign_price":399000},"126":{"id":126,"origin_price":799000,"sale_price":599000,"campaign_price":599000},"127":{"id":127,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"128":{"id":128,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"129":{"id":129,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"130":{"id":130,"origin_price":100000,"sale_price":-31000,"campaign_price":-31000},"131":{"id":131,"origin_price":100000,"sale_price":-31000,"campaign_price":-31000},"132":{"id":132,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"133":{"id":133,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"134":{"id":134,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"135":{"id":135,"origin_price":50000,"sale_price":-50000,"campaign_price":-50000},"136":{"id":136,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"137":{"id":137,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"138":{"id":138,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"139":{"id":139,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"140":{"id":140,"origin_price":2000000,"sale_price":699000,"campaign_price":699000},"141":{"id":141,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"142":{"id":142,"origin_price":1299000,"sale_price":-100000,"campaign_price":-100000},"143":{"id":143,"origin_price":2500000,"sale_price":799000,"campaign_price":799000},"144":{"id":144,"origin_price":2000000,"sale_price":599000,"campaign_price":599000},"145":{"id":145,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"146":{"id":146,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"147":{"id":147,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"148":{"id":148,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"149":{"id":149,"origin_price":1499000,"sale_price":399000,"campaign_price":399000},"150":{"id":150,"origin_price":1699000,"sale_price":699000,"campaign_price":699000},"151":{"id":151,"origin_price":1499000,"sale_price":499000,"campaign_price":499000},"152":{"id":152,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"153":{"id":153,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"155":{"id":155,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"156":{"id":156,"origin_price":1499000,"sale_price":399000,"campaign_price":399000},"157":{"id":157,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"158":{"id":158,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"159":{"id":159,"origin_price":899000,"sale_price":199000,"campaign_price":199000},"160":{"id":160,"origin_price":499000,"sale_price":799000,"campaign_price":799000},"161":{"id":161,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"162":{"id":162,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"163":{"id":163,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"164":{"id":164,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"165":{"id":165,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"166":{"id":166,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"167":{"id":167,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"168":{"id":168,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"169":{"id":169,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"170":{"id":170,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"171":{"id":171,"origin_price":499000,"sale_price":-100000,"campaign_price":-100000},"172":{"id":172,"origin_price":499000,"sale_price":99000,"campaign_price":99000},"173":{"id":173,"origin_price":499000,"sale_price":-100000,"campaign_price":-100000},"174":{"id":174,"origin_price":499000,"sale_price":-100000,"campaign_price":-100000},"175":{"id":175,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"176":{"id":176,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"178":{"id":178,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"179":{"id":179,"origin_price":799000,"sale_price":349000,"campaign_price":349000},"180":{"id":180,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"181":{"id":181,"origin_price":999000,"sale_price":499000,"campaign_price":499000},"182":{"id":182,"origin_price":999000,"sale_price":499000,"campaign_price":499000},"183":{"id":183,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"184":{"id":184,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"185":{"id":185,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"186":{"id":186,"origin_price":699000,"sale_price":499000,"campaign_price":499000},"187":{"id":187,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"188":{"id":188,"origin_price":799000,"sale_price":599000,"campaign_price":599000},"189":{"id":189,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"190":{"id":190,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"191":{"id":191,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"192":{"id":192,"origin_price":999000,"sale_price":599000,"campaign_price":599000},"193":{"id":193,"origin_price":999000,"sale_price":599000,"campaign_price":599000},"194":{"id":194,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"195":{"id":195,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"196":{"id":196,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"197":{"id":197,"origin_price":999000,"sale_price":499000,"campaign_price":499000},"198":{"id":198,"origin_price":999000,"sale_price":499000,"campaign_price":499000},"200":{"id":200,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"201":{"id":201,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"202":{"id":202,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"203":{"id":203,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"204":{"id":204,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"205":{"id":205,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"206":{"id":206,"origin_price":999000,"sale_price":599000,"campaign_price":599000},"207":{"id":207,"origin_price":999000,"sale_price":599000,"campaign_price":599000},"208":{"id":208,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"210":{"id":210,"origin_price":499000,"sale_price":-100000,"campaign_price":-100000},"211":{"id":211,"origin_price":1500000,"sale_price":599000,"campaign_price":599000},"212":{"id":212,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"213":{"id":213,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"214":{"id":214,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"215":{"id":215,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"216":{"id":216,"origin_price":2999000,"sale_price":999000,"campaign_price":999000},"217":{"id":217,"origin_price":2999000,"sale_price":999000,"campaign_price":999000},"218":{"id":218,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"219":{"id":219,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"220":{"id":220,"origin_price":2900000,"sale_price":1699000,"campaign_price":1699000},"221":{"id":221,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"222":{"id":222,"origin_price":699000,"sale_price":199000,"campaign_price":199000},"224":{"id":224,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"225":{"id":225,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"226":{"id":226,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"227":{"id":227,"origin_price":999000,"sale_price":499000,"campaign_price":499000},"228":{"id":228,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"229":{"id":229,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"230":{"id":230,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"231":{"id":231,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"232":{"id":232,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"233":{"id":233,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"234":{"id":234,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"235":{"id":235,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"236":{"id":236,"origin_price":3000000,"sale_price":1799000,"campaign_price":1799000},"237":{"id":237,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"239":{"id":239,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"240":{"id":240,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"241":{"id":241,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"242":{"id":242,"origin_price":899000,"sale_price":399000,"campaign_price":399000},"243":{"id":243,"origin_price":899000,"sale_price":349000,"campaign_price":349000},"244":{"id":244,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"246":{"id":246,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"247":{"id":247,"origin_price":999000,"sale_price":599000,"campaign_price":599000},"248":{"id":248,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"249":{"id":249,"origin_price":1499000,"sale_price":499000,"campaign_price":499000},"250":{"id":250,"origin_price":1999000,"sale_price":299000,"campaign_price":299000},"251":{"id":251,"origin_price":699000,"sale_price":199000,"campaign_price":99000},"252":{"id":252,"origin_price":1500000,"sale_price":399000,"campaign_price":399000},"253":{"id":253,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"254":{"id":254,"origin_price":1500000,"sale_price":599000,"campaign_price":599000},"255":{"id":255,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"256":{"id":256,"origin_price":299000,"sale_price":99000,"campaign_price":99000},"257":{"id":257,"origin_price":299000,"sale_price":99000,"campaign_price":99000},"258":{"id":258,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"259":{"id":259,"origin_price":399000,"sale_price":299000,"campaign_price":299000},"260":{"id":260,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"261":{"id":261,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"262":{"id":262,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"263":{"id":263,"origin_price":69000,"sale_price":-31000,"campaign_price":-31000},"264":{"id":264,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"265":{"id":265,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"266":{"id":266,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"267":{"id":267,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"271":{"id":271,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"272":{"id":272,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"273":{"id":273,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"274":{"id":274,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"275":{"id":275,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"276":{"id":276,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"277":{"id":277,"origin_price":1200000,"sale_price":399000,"campaign_price":399000},"278":{"id":278,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"279":{"id":279,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"280":{"id":280,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"281":{"id":281,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"282":{"id":282,"origin_price":1200000,"sale_price":399000,"campaign_price":399000},"283":{"id":283,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"284":{"id":284,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"285":{"id":285,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"286":{"id":286,"origin_price":900000,"sale_price":299000,"campaign_price":299000},"287":{"id":287,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"288":{"id":288,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"289":{"id":289,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"290":{"id":290,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"291":{"id":291,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"292":{"id":292,"origin_price":1450000,"sale_price":300000,"campaign_price":300000},"293":{"id":293,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"294":{"id":294,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"295":{"id":295,"origin_price":1980000,"sale_price":300000,"campaign_price":300000},"297":{"id":297,"origin_price":1500000,"sale_price":299000,"campaign_price":299000},"298":{"id":298,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"299":{"id":299,"origin_price":1500000,"sale_price":399000,"campaign_price":399000},"300":{"id":300,"origin_price":1000000,"sale_price":599000,"campaign_price":599000},"301":{"id":301,"origin_price":1000000,"sale_price":599000,"campaign_price":599000},"302":{"id":302,"origin_price":1000000,"sale_price":599000,"campaign_price":599000},"303":{"id":303,"origin_price":1000000,"sale_price":599000,"campaign_price":599000},"304":{"id":304,"origin_price":599000,"sale_price":99000,"campaign_price":99000},"305":{"id":305,"origin_price":699000,"sale_price":199000,"campaign_price":199000},"306":{"id":306,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"307":{"id":307,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"308":{"id":308,"origin_price":700000,"sale_price":-100000,"campaign_price":-100000},"309":{"id":309,"origin_price":900000,"sale_price":299000,"campaign_price":299000},"310":{"id":310,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"311":{"id":311,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"312":{"id":312,"origin_price":1400000,"sale_price":499000,"campaign_price":499000},"313":{"id":313,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"314":{"id":314,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"315":{"id":315,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"316":{"id":316,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"317":{"id":317,"origin_price":720000,"sale_price":299000,"campaign_price":299000},"318":{"id":318,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"319":{"id":319,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"320":{"id":320,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"321":{"id":321,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"322":{"id":322,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"323":{"id":323,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"324":{"id":324,"origin_price":900000,"sale_price":299000,"campaign_price":299000},"325":{"id":325,"origin_price":499000,"sale_price":-100000,"campaign_price":-100000},"326":{"id":326,"origin_price":199000,"sale_price":-100000,"campaign_price":-100000},"327":{"id":327,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"328":{"id":328,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"329":{"id":329,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"330":{"id":330,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"331":{"id":331,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"332":{"id":332,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"333":{"id":333,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"334":{"id":334,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"335":{"id":335,"origin_price":2000000,"sale_price":799000,"campaign_price":799000},"336":{"id":336,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"337":{"id":337,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"338":{"id":338,"origin_price":1999000,"sale_price":499000,"campaign_price":499000},"339":{"id":339,"origin_price":199000,"sale_price":-100000,"campaign_price":-100000},"340":{"id":340,"origin_price":88888,"sale_price":-100000,"campaign_price":-100000},"341":{"id":341,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"342":{"id":342,"origin_price":199000,"sale_price":-1000,"campaign_price":-1000},"343":{"id":343,"origin_price":199000,"sale_price":-50000,"campaign_price":-50000},"344":{"id":344,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"345":{"id":345,"origin_price":199000,"sale_price":-50000,"campaign_price":-50000},"346":{"id":346,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"347":{"id":347,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"348":{"id":348,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"349":{"id":349,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"350":{"id":350,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"351":{"id":351,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"352":{"id":352,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"353":{"id":353,"origin_price":899000,"sale_price":499000,"campaign_price":499000},"354":{"id":354,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"355":{"id":355,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"356":{"id":356,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"357":{"id":357,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"358":{"id":358,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"359":{"id":359,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"360":{"id":360,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"361":{"id":361,"origin_price":2000000,"sale_price":599000,"campaign_price":599000},"362":{"id":362,"origin_price":100000,"sale_price":-50000,"campaign_price":-50000},"363":{"id":363,"origin_price":199000,"sale_price":-1000,"campaign_price":-1000},"364":{"id":364,"origin_price":399000,"sale_price":199000,"campaign_price":199000},"365":{"id":365,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"366":{"id":366,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"367":{"id":367,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"368":{"id":368,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"369":{"id":369,"origin_price":499000,"sale_price":299000,"campaign_price":299000},"370":{"id":370,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"371":{"id":371,"origin_price":499000,"sale_price":149000,"campaign_price":149000},"372":{"id":372,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"373":{"id":373,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"374":{"id":374,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"375":{"id":375,"origin_price":199000,"sale_price":9000,"campaign_price":9000},"376":{"id":376,"origin_price":199000,"sale_price":9000,"campaign_price":9000},"377":{"id":377,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"378":{"id":378,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"379":{"id":379,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"380":{"id":380,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"381":{"id":381,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"382":{"id":382,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"383":{"id":383,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"384":{"id":384,"origin_price":699000,"sale_price":199000,"campaign_price":199000},"385":{"id":385,"origin_price":699000,"sale_price":199000,"campaign_price":199000},"386":{"id":386,"origin_price":699000,"sale_price":199000,"campaign_price":199000},"387":{"id":387,"origin_price":699000,"sale_price":199000,"campaign_price":199000},"388":{"id":388,"origin_price":499000,"sale_price":9000,"campaign_price":9000},"389":{"id":389,"origin_price":899000,"sale_price":299000,"campaign_price":299000},"391":{"id":391,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"392":{"id":392,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"393":{"id":393,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"394":{"id":394,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"395":{"id":395,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"396":{"id":396,"origin_price":999000,"sale_price":-100000,"campaign_price":-100000},"397":{"id":397,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"398":{"id":398,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"399":{"id":399,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"400":{"id":400,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"401":{"id":401,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"402":{"id":402,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"403":{"id":403,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"406":{"id":406,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"407":{"id":407,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"408":{"id":408,"origin_price":399000,"sale_price":199000,"campaign_price":199000},"409":{"id":409,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"410":{"id":410,"origin_price":999000,"sale_price":299000,"campaign_price":299000},"411":{"id":411,"origin_price":299000,"sale_price":-100000,"campaign_price":-100000},"412":{"id":412,"origin_price":299000,"sale_price":-100000,"campaign_price":-100000},"413":{"id":413,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"414":{"id":414,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"415":{"id":415,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"416":{"id":416,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"417":{"id":417,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"418":{"id":418,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"420":{"id":420,"origin_price":399000,"sale_price":9000,"campaign_price":9000},"421":{"id":421,"origin_price":499000,"sale_price":99000,"campaign_price":99000},"422":{"id":422,"origin_price":399000,"sale_price":99000,"campaign_price":99000},"423":{"id":423,"origin_price":399000,"sale_price":99000,"campaign_price":99000},"424":{"id":424,"origin_price":399000,"sale_price":99000,"campaign_price":99000},"425":{"id":425,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"427":{"id":427,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"428":{"id":428,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"429":{"id":429,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"430":{"id":430,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"431":{"id":431,"origin_price":399000,"sale_price":99000,"campaign_price":99000},"432":{"id":432,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"433":{"id":433,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"434":{"id":434,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"435":{"id":435,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"436":{"id":436,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"437":{"id":437,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"438":{"id":438,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"439":{"id":439,"origin_price":299000,"sale_price":99000,"campaign_price":99000},"440":{"id":440,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"441":{"id":441,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"442":{"id":442,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"445":{"id":445,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"446":{"id":446,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"447":{"id":447,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"448":{"id":448,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"450":{"id":450,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"451":{"id":451,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"452":{"id":452,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"453":{"id":453,"origin_price":299000,"sale_price":9000,"campaign_price":9000},"454":{"id":454,"origin_price":699000,"sale_price":299000,"campaign_price":299000},"455":{"id":455,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"456":{"id":456,"origin_price":199000,"sale_price":9000,"campaign_price":9000},"457":{"id":457,"origin_price":199000,"sale_price":9000,"campaign_price":9000},"458":{"id":458,"origin_price":199000,"sale_price":9000,"campaign_price":9000},"459":{"id":459,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"460":{"id":460,"origin_price":299000,"sale_price":109000,"campaign_price":109000},"461":{"id":461,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"462":{"id":462,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"463":{"id":463,"origin_price":499000,"sale_price":109000,"campaign_price":109000},"464":{"id":464,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"465":{"id":465,"origin_price":0,"sale_price":-100000,"campaign_price":-100000},"466":{"id":466,"origin_price":599000,"sale_price":299000,"campaign_price":299000},"467":{"id":467,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"468":{"id":468,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"469":{"id":469,"origin_price":399000,"sale_price":199000,"campaign_price":199000},"472":{"id":472,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"473":{"id":473,"origin_price":1200000,"sale_price":599000,"campaign_price":599000},"474":{"id":474,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"475":{"id":475,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"476":{"id":476,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"477":{"id":477,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"478":{"id":478,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"485":{"id":485,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"482":{"id":482,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"484":{"id":484,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"492":{"id":492,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"547":{"id":547,"origin_price":700000,"sale_price":199000,"campaign_price":199000},"517":{"id":517,"origin_price":699000,"sale_price":399000,"campaign_price":399000}, "548":{"id":548,"origin_price":500000,"sale_price":299000,"campaign_price":299000},"520":{"id":520,"origin_price":699000,"sale_price":399000,"campaign_price":399000},"390":{"id":390,"origin_price":699000,"sale_price":399000,"campaign_price":399000},"520":{"id":520,"origin_price":699000,"sale_price":399000,"campaign_price":399000},"533":{"id":533,"origin_price":800000,"sale_price":399000,"campaign_price":399000},"426":{"id":426,"origin_price":800000,"sale_price":499000,"campaign_price":499000},"559":{"id":559,"origin_price":1900000,"sale_price":1199000,"campaign_price":1199000},"245":{"id":245,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"245":{"id":245,"origin_price":499000,"sale_price":199000,"campaign_price":199000},"238":{"id":238,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"405":{"id":405,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"443":{"id":443,"origin_price":800000,"sale_price":399000,"campaign_price":399000}, "534":{"id":534,"origin_price":499000,"sale_price":249000,"campaign_price":249000},"522":{"id":522,"origin_price":699000,"sale_price":399000,"campaign_price":399000},"470":{"id":470,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"568":{"id":568,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"576":{"id":576,"origin_price":999000,"sale_price":599000,"campaign_price":599000},"577":{"id":577,"origin_price":999000,"sale_price":399000,"campaign_price":399000},"396":{"id":396,"origin_price":999000,"sale_price":699000,"campaign_price":699000},"444":{"id":444,"origin_price":1500000,"sale_price":875000,"campaign_price":875000},"449":{"id":449,"origin_price":2500000,"sale_price":1025000,"campaign_price":1025000},"581":{"id":581,"origin_price":1000000,"sale_price":599000,"campaign_price":599000},"199":{"id":199,"origin_price":999000,"sale_price":349000,"campaign_price":349000},"209":{"id":209,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"508":{"id":508,"origin_price":699000,"sale_price":399000,"campaign_price":399000},"404":{"id":404,"origin_price":599000,"sale_price":199000,"campaign_price":199000},"471":{"id":471,"origin_price":799000,"sale_price":299000,"campaign_price":299000},"296":{"id":296,"origin_price":900000,"sale_price":399000,"campaign_price":399000},"579":{"id":579,"origin_price":1900000,"sale_price":299000,"campaign_price":299000},"154":{"id":154,"origin_price":799000,"sale_price":349000,"campaign_price":349000},"223":{"id":223,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"177":{"id":177,"origin_price":799000,"sale_price":349000,"campaign_price":349000},"419":{"id":419,"origin_price":999000,"sale_price":499000,"campaign_price":499000},"584":{"id":584,"origin_price":699000,"sale_price":399000,"campaign_price":399000},"532":{"id":532,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"564":{"id":564,"origin_price":799000,"sale_price":399000,"campaign_price":399000},"542":{"id":542,"origin_price":800000,"sale_price":399000,"campaign_price":399000},"495":{"id":495,"origin_price":599000,"sale_price":399000,"campaign_price":399000},"561":{"id":561,"origin_price":800000,"sale_price":399000,"campaign_price":399000}}'; 
</script>


<script>
document.write('<style>html{scroll-behavior: smooth;}.add-to-cart{cursor: pointer;}#sticked_cart{z-index: 999999; background: white; width: 167px; position: fixed; right: 20px; bottom: 45%; box-shadow: 1px 2px 8px rgba(89, 67, 67, 0.64); border-radius: 5px;}#sticked_cart .cart-header{display: flex; padding: 3px 10px; border-bottom: solid thin #C83B4C;}#sticked_cart .cart-title{display: block; line-height: 19px; margin-left: 10px; color: #C83B4C; font-size: 14px; font-weight: bold;}#sticked_cart .cart-body{padding: 10px; font-size: 14px;}#scrollToSubmit{background: #C83B4C; color: white; font-weight: bold; text-align: center; text-transform: uppercase; padding: 6px; border-radius: 6px; margin-top: 10px; cursor: pointer; transition: .3s;}#scrollToSubmit:hover{background: #bb2335}.my-button.selected{background: #8BC34A!important;}@media(max-width: 768px){#sticked_cart{bottom: 3%!important;}}</style><div id="sticked_cart"> <div class="cart-header"> <img src="https://i.imgur.com/HEouTLh.png" style="width: 19px"> <span class="cart-title">Giỏ học bổng</span> </div><div class="cart-body"> <p style="margin-bottom: 10px">
Đã chọn: <strong id="numOfCart" style="color: #C83B4C">0</strong>
<strong style="color: #C83B4C">/2</strong>
    </p><p>Tổng: <strong id="sumCartPrice" style="color: #C83B4C">0</strong></p><div id="scrollToSubmit" >Gửi thông tin học bổng</div></div></div>');
var course = JSON.parse(courseJson);

var combo = 0;
var default_course_ids = $('input[name="combo_course_ids"]').val();
var default_origin_price = $('input[name="origin_price"]').val();
var default_price = $('input[name="price"]').val();
$(function() {
    clearCart();
    updateCartHtmlView();
});

function clickToCart(course_id, el) {

    let sender = $(el);

    var cart_items = getCart();
    if (Object.keys(cart_items).length < 2 || cart_items.hasOwnProperty(course_id)) //2 is course users can choose
    {
        if(typeof course_id == 'number'){
            if (course.hasOwnProperty(course_id)) {
                addToCart(course[course_id], sender);
            } else {
                console.log('course not exited');
            }
        }else{
            ids = course_id.split(',');
    
            let check = [];
            $.each(ids,(k,id)=>{
                if (!jQuery.isEmptyObject(cart_items)) {
                    if($.inArray(id,Object.keys(cart_items)) >= 0){
                        check.push(id);
                    }
                    else{
                        addToCart2(course[id], cart_items);
                    }
                }
                else{
                    addToCart2(course[id], cart_items);
                }
            })
    
            if(check.length >=2){
                for (let k in cart_items) {
                    if (cart_items.hasOwnProperty(k) && $.inArray(k,check) >= 0) {
                        delete cart_items[k];
                        for (let h in cart_items) {
                            if($('.cart_'+h+'_'+k).length > 0){
                                $('.cart_'+h+'_'+k).removeClass('selected');
                                $('.cart_'+h+'_'+k).html('Thêm vào giỏ hàng');
                            }
    
                            if($('.cart_'+k+'_'+h).length > 0){
                                $('.cart_'+k+'_'+h).removeClass('selected');
                                $('.cart_'+k+'_'+h).html('Thêm vào giỏ hàng');
                            }
                        }
    
                        $('.cart_'+k).removeClass('selected');
                        $('.cart_'+k).html('Thêm vào giỏ hàng');
                    }
                }
            }
            updateCart(cart_items);
        };
    
        for (let k in getCart()) {
            for (let h in getCart()) {
                if($('.cart_'+h+'_'+k).length > 0){
                    $('.cart_'+h+'_'+k).addClass('selected');
                    $('.cart_'+h+'_'+k).html('Đã chọn');
                }
    
                if($('.cart_'+k+'_'+h).length > 0){
                    $('.cart_'+k+'_'+h).addClass('selected');
                    $('.cart_'+k+'_'+h).html('Đã chọn');
                }
            }
        }
    } else {
        alert("Bạn đã chọn hết 2 khóa học trong học bổng. Bạn có thể đổi khóa học khác bằng cách bỏ chọn. Cảm ơn bạn!");
    }
}


function addToCart2(course_item,cart_items){
    if (typeof(Storage) !== "undefined") {
        cart_items[course_item.id] = {
            id: course_item.id,
            first: false,
            sale_price: course_item.campaign_price,
            origin_price: course_item.origin_price
        };

        $('.cart_'+course_item.id).addClass('selected');
        $('.cart_'+course_item.id).html('Đã chọn');
    } else {
        console.log(sessionStorage.getItem("Sorry, your browser does not support Web Storage..."));
    }
}

function addToCart(course_item, sender) {
    console.log('addToCart');
    if (typeof(Storage) !== "undefined") {
        var cart_items = getCart();
        if (jQuery.isEmptyObject(cart_items)) {
            cart_items[course_item.id] = {
                id: course_item.id,
                first: true,
                sale_price: course_item.sale_price,
                origin_price: course_item.origin_price
            };
            sender.addClass('selected');
            sender.html('Đã chọn');

            $('.cart_'+course_item.id).addClass('selected');
            $('.cart_'+course_item.id).html('Đã chọn');
        } else {
            if (!cart_items.hasOwnProperty(course_item.id)) {
                cart_items[course_item.id] = {
                    id: course_item.id,
                    first: false,
                    sale_price: course_item.campaign_price,
                    origin_price: course_item.origin_price
                };
                sender.addClass('selected');
                sender.html('Đã chọn');
                $('.cart_'+course_item.id).addClass('selected');
                $('.cart_'+course_item.id).html('Đã chọn');
            } else {
                console.log(course_item);
                for (let k in cart_items) {
                    if (cart_items.hasOwnProperty(k) && k == course_item.id) {
                        delete cart_items[k];
                    }
                }
                updateCart(cart_items);
                sender.removeClass('selected');
                sender.html('Thêm vào giỏ hàng');

                $('.cart_'+course_item.id).removeClass('selected');
                $('.cart_'+course_item.id).html('Thêm vào giỏ hàng');
                console.log('course exited on cart');
            }
        }
        updateCart(cart_items);
    } else {
        console.log(sessionStorage.getItem("Sorry, your browser does not support Web Storage..."));
    }
}

function getCart() {
    var cartJson = sessionStorage.getItem("cart");
    if (cartJson != null) {
        return JSON.parse(cartJson)
    }
    return {};
}

function updateCart(newCartItem) {
    sessionStorage.setItem("cart", JSON.stringify(newCartItem));
    updateCartHtmlView();
}

function clearCart() {
    sessionStorage.removeItem("cart");
}

function updateCartHtmlView() {
    let cart_items = getCart();
    var num_of_count = getCartCount(cart_items);
    document.getElementById('numOfCart').innerHTML = num_of_count;
    var amount = getCartAmount(cart_items);
    document.getElementById('sumCartPrice').innerHTML = formatCurrencyNumber(amount) + ' VND';
    console.log('num_of_count', num_of_count);
    if (num_of_count > 0) {
        let combo_course_ids = getCourseIdsFromCart(cart_items);
        $('input[name="combo_course_ids"]').val(combo_course_ids);
        let sum_origin_price = getOriginPrice(cart_items);
        $('input[name="origin_price"]').val(sum_origin_price);
        $('input[name="price"]').val(amount);
    } else {
        $('input[name="combo_course_ids"]').val(default_course_ids);
        $('input[name="origin_price"]').val(default_origin_price);
        $('input[name="price"]').val(default_price);
    }
}

function getCourseIdsFromCart(cart_items) {
    let combo_course_ids = [];
    for (let k in cart_items) {
        if (cart_items.hasOwnProperty(k)) {
            combo_course_ids.push(k);
        }
    }
    return combo_course_ids.toString();
}

function getCartCount(cart_items) {
    return Object.keys(cart_items).length
}

function getCartAmount(cart_items) {
    var sum_amount = 0;

    let count = Object.keys(cart_items).length;
    // if(count == 1){
    //     sum_amount += Object.values(cart_items)[0].sale_price;
    // }
    // if(count >= 2){
    //     sum_amount = 499000 + 300000*(count - 2);
    // }
    for (let k in cart_items) {
        if (cart_items.hasOwnProperty(k)) {
            sum_amount += cart_items[k].sale_price
        }
    }
    return sum_amount;
}

function getOriginPrice(cart_items) {
    let sum_origin_price = 0;
    for (let k in cart_items) {
        if (cart_items.hasOwnProperty(k)) {
            sum_origin_price += cart_items[k].origin_price
        }
    }
    return sum_origin_price;
}

function formatCurrencyNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function scrollToElement(element, parent) {
    $(parent)[0].scrollIntoView(true);
    $(parent).animate({
        scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
    });
}
$('#scrollToSubmit').on('click', function() {
    var paretq = $('body');
    var elemq = $('#HTML_CODE1098');
    console.log('scroll to submit');
    scrollToElement(paretq, elemq);
});

$('#webform').submit((e) => {

    let str = $('input[name="combo_course_ids"]').val()
    // if(str.indexOf('99,123') < 0){
    //     $('input[name="combo_course_ids"]').val(str+',99,123');
    // }

    return true;
})

</script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript">
</script>
<!-- count_down -->
<script>
  function refrClock() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  hn = 23-h;
  sn = 59-s;
  mn = 59-m;
  document.getElementById("hour").innerHTML = hn;
  document.getElementById("minute").innerHTML = mn;
  document.getElementById("second").innerHTML = sn;
  setTimeout("refrClock()", 1000);
}
if (document.getElementById("hour") !== null) {
  refrClock();
}


<!-- End count_down -->
<script src="https://mywork.gitiho.com/js/cdn_for_landing.js?v=1.1"></script>
