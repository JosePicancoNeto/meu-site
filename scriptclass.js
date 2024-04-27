const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    // Stop the page to reload.
    event.preventDefault();

    // Data acquisition for programm. 
    var b = parseFloat(document.getElementById('b').value);
    var h = parseFloat(document.getElementById('h').value);
    var tf = parseFloat(document.getElementById('tf').value);
    var tw = parseFloat(document.getElementById('tw').value);
    var r = parseFloat(document.getElementById('r').value);
    var fy = parseFloat(document.getElementById('fy').value);

    // Calculation of the area of section. 
    var d = h - 2*tf;
    var Arc = 4*( 1-0.25*Math.PI )*r**(2);
    var A = String( (2*b*tf + d*tw + Arc).toFixed(0) );

    // symmetric section.
    // Calculation of the center of gravity of section. 
    var z1 = 0.5*tf;
    var z2 = 0.5*h;
    var z3 = h - 0.5*tf;
    var Af = b*tf
    var Aw = d*tw
    var zg = String( ((Aw*z2+Af*(z1+z3))/(Aw+2*Af)).toFixed(0) );

    // Calculation of the moment of inercia of section. 
    var d1 = zg - z1;
    var d3 = z3 - zg;
    var If = 2*((b*tf**(3))/(12))+Af*(d1**(2)+d3**(2));
    var Iw = (tw*d**(3))/(12)
    var Ig = String( (If+Iw).toFixed(0) );

    // Calculation of the elastic resistent module.
    var vs = zg;
    var vi = h - zg;
    var wels = Ig/vs;
    var weli = Ig/vi; 
    var wel = String( Math.min(wels, weli).toFixed(0) );

    // Calculation of the plastic resistent module - symmetric section.
    var xpl = zg;
    var A1 = b*tf;
    var A2 = (xpl-tf)*tw;
    var A3 = (h-xpl-tf)*tw;
    var A4 = b*tf;
    var d1 = xpl-0.5*tf;
    var d2 = 0.5*(xpl-tf);
    var d3 = 0.5*(h-xpl-tf);
    var d4 = h-xpl-0.5*tf;
    var m1 = A1*d1+A2*d2;
    var m2 = A3*d3+A4*d4;
    var m = m1 + m2;
    var wpl = String( m.toFixed(0) );

    // Calculation of the elastic moment resistence.
    var Mel = String( (wel*fy*10**(-6)).toFixed(3) );

    // Calculation of the elastic moment resistence.
    var Mpl = String( (wpl*fy*10**(-6)).toFixed(3) );

    // Identification of variables.
    var value1 = document.getElementById('A');
    var value2 = document.getElementById('zg');
    var value3 = document.getElementById('Ig');
    var value4 = document.getElementById('xpl');
    var value5 = document.getElementById('wel');
    var value6 = document.getElementById('wpl');
    var value7 = document.getElementById('Mel');
    var value8 = document.getElementById('Mpl');

    // preventing information from appearing.
    document.getElementById('infos').classList.remove('hidden');

    value1.textContent = A.replace('.', ',');
    value2.textContent = zg.replace('.', ',');
    value3.textContent = Ig.replace('.', ',');
    value4.textContent = xpl.replace('.', ',');
    value5.textContent = wel.replace('.', ',');
    value6.textContent = wpl.replace('.', ',');
    value7.textContent = Mel.replace('.', ',');
    value8.textContent = Mpl.replace('.', ',');

    const formn2 = document.getElementById('formn2');

    formn2.addEventListener('submit', function(event) {

    // Stop the page to reload.
    event.preventDefault();

    let description = ''; 

    // Condition to the operation.
    if ( value == "compressão" ) {
        description = 'A verificação foi aprovada';
    } else if ( value == "flexao" ) {
        description = 'A verificação está desaprovada.'
    } else if ( value == "flexao_comp" ) {
        description = 'A verificação está desaprovada.'
    } else {
        description = 'NaN.'
    }

    document.getElementById('description').textContent = description;

    });
    
});