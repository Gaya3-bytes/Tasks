var mdiv = document.createElement('div');
mdiv.setAttribute('class','container');

var bcard = document.createElement('div');
bcard.setAttribute('class', 'card');

var to = document.createElement('img');
to.setAttribute('class', 'card-img-top si');
to.src = "world.jpg"

var idiv = document.createElement('div');
idiv.setAttribute('class', 'card-body');
idiv.id = "holly";

var bo = document.createElement('h4');
bo.style.textAlign = "center";
bo.setAttribute('class', 'card-title');
bo.innerHTML = "COUNTRIES OF THE WORLD";
bo.id = "bof";


var bot = document.createElement('div');
bot.setAttribute('class', 'card-text');

idiv.append(bo, bot);
bcard.append(to, idiv);
mdiv.append(bcard);


if(window.Promise) {
    var promise = new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', 'https://restcountries.eu/rest/v2/all');
      request.onload = function() {
        if ((request.status >= 200) && (request.status <=300)) {
            resolve(request.response);
        } else {
            reject(Error(request.statusText));
        }
      };
      request.onerror = function() {
        reject(Error('error'));
    };
      request.send();
    });

    promise.then(function(data) {
    var df = JSON.parse(data);    
    for (var i= 0; i<df.length ;i = i+3) 
    { 
       var cdiv = document.createElement('div');
       cdiv.setAttribute('class', 'card');
       cdiv.id = "colorid";

       var cdiv1= document.createElement('div');
       cdiv1.setAttribute('class', 'card-body');

       var ro = document.createElement('div');
       ro.setAttribute('class', 'row');






       var c1 = document.createElement('div');
       c1.setAttribute('class', 'col');

       let lp = document.createElement('img');
       lp.setAttribute('class', 'card-img-top');
       lp.src = df[i].flag;
       
       

       var tdiv = document.createElement('h3');
       tdiv.setAttribute('class', 'card-title');
       tdiv.innerHTML = df[i].name;

       var ccdiv = document.createElement('h5');
       ccdiv.setAttribute('class', 'card-subtitle');
       ccdiv.innerHTML = df[i].capital;

       let p1 = document.createElement('h6');
       p1.setAttribute('class', 'card-text');
       p1.innerHTML = df[i].region;

       let p2 = document.createElement('p');
       p2.setAttribute('class', 'card-text');
       p2.innerHTML = df[i].latlng;

       let p3 = document.createElement('p');
       p3.setAttribute('class', 'card-text');
       let x=[];
       for (var j = 0; j< df[i].currencies.length; j++)
       {
         x.push('( ' + df[i].currencies[j].code + ' , ' + df[i].currencies[j].name + ' , ' + df[i].currencies[j].symbol + ' )')
       }
       p3.innerHTML = x;

       






       var c2 = document.createElement('div');
       c2.setAttribute('class', 'col');

       let lp1 = document.createElement('img');
       lp1.setAttribute('class', 'card-img-top');
       lp1.src = df[i+1].flag;


       var tdiv1 = document.createElement('h3');
       tdiv1.setAttribute('class', 'card-title');
       tdiv1.innerHTML = df[i+1].name;

       var ccdiv1 = document.createElement('h5');
       ccdiv1.setAttribute('class', 'card-subtitle');
       ccdiv1.innerHTML = df[i+1].capital;

       let p11 = document.createElement('h6');
       p11.setAttribute('class', 'card-text');
       p11.innerHTML = df[i+1].region;

       let p21 = document.createElement('p');
       p21.setAttribute('class', 'card-text');
       p21.innerHTML = df[i+1].latlng;

       let p31 = document.createElement('p');
       p31.setAttribute('class', 'card-text');
       let y=[];
       for (var j = 0; j< df[i+1].currencies.length; j++)
       {
         y.push('( ' + df[i+1].currencies[j].code + ' , ' + df[i+1].currencies[j].name + ' , ' + df[i+1].currencies[j].symbol + ' )')
       }
       p31.innerHTML = y;

       






       var c3 = document.createElement('div');
       c3.setAttribute('class', 'col');

       let lp2 = document.createElement('img');
       lp2.setAttribute('class', 'card-img-top');
       lp2.src = df[i+2].flag;
       
      
       var tdiv2 = document.createElement('h3');
       tdiv2.setAttribute('class', 'card-title');
       tdiv2.innerHTML = df[i + 2].name;

       var ccdiv2 = document.createElement('h5');
       ccdiv2.setAttribute('class', 'card-subtitle');
       ccdiv2.innerHTML = df[i + 2].capital;

       let p12 = document.createElement('h6');
       p12.setAttribute('class', 'card-text');
       p12.innerHTML = df[i + 2].region;

       let p22 = document.createElement('p');
       p22.setAttribute('class', 'card-text');
       p22.innerHTML = df[i + 2].latlng;

       let p32 = document.createElement('p');
       p32.setAttribute('class', 'card-text');
       let z=[];
       for (var j = 0; j< df[i + 2].currencies.length; j++)
       {
         z.push('( ' + df[i + 2].currencies[j].code + ' , ' + df[i + 2].currencies[j].name + ' , ' + df[i + 2].currencies[j].symbol + ' )')
       }
       p32.innerHTML = z;




      c1.append(lp, tdiv, ccdiv, p1, p2, p3);
      c2.append(lp1, tdiv1, ccdiv1, p11, p21, p31);
      c3.append(lp2, tdiv2, ccdiv2, p12, p22, p32)

      ro.append(c1,c2, c3);
       

      cdiv1.append(ro);
      cdiv.append(cdiv1);
      mdiv.append(cdiv);
    }
    
    }, function(error) {
        bot.innerHTML = error;
    });
}















document.body.append(mdiv);


