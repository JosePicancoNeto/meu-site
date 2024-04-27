const formn1 = document.getElementById('formn1');

formn1.addEventListener('submit', function(event) {

    // Stop the page to reload.
    event.preventDefault();

    // Data acquisition for programm. 
    var g = parseFloat(document.getElementById('g').value);
    var q = parseFloat(document.getElementById('q').value);
    var L = parseFloat(document.getElementById('L').value);
    var fy = parseFloat(document.getElementById('fy').value);

    // Pre Sizing of the profile. 
    var Ped = 1.35*g + 1.5*q;
    var Ved = (Ped*L)/2;
    var Med = (Ped*L**(2))/8;
    var Peds = String( Ped.toFixed(3) );
    var Veds = String( Ved.toFixed(3) );
    var Meds = String( Med.toFixed(3) );
    var wd = String( (Med/(fy*10**(3))*10**(9)).toFixed(0) );

    // Identification of variables.
    var value1 = document.getElementById('Peds');
    var value2 = document.getElementById('Veds');
    var value3 = document.getElementById('Meds');
    var value4 = document.getElementById('wd');
    
    // preventing information from appearing.
    //document.getElementById('infos').classList.remove('hidden');

    // Changing dot by comma. 
    value1.textContent = Peds.replace('.', ',');
    value2.textContent = Veds.replace('.', ',');
    value3.textContent = Meds.replace('.', ',');
    value4.textContent = wd.replace('.', ',');

    const formn2 = document.getElementById('formn2');

    formn2.addEventListener('submit', function(event) {

    // Stop the page to reload.
    event.preventDefault();

    // Data acquisition for programm.
    var gk = parseFloat(document.getElementById('gk').value);
    var wpl = parseFloat(document.getElementById('wpl').value);

    // Profile Pre Sized. 
    var pp = gk*10**(-2);
    var Pedn = 1.35*(g+pp)+1.5*q;
    var Vedn = (Pedn*L)/2;
    var Medn = (Pedn*L**(2))/8;
    var Mrd = wpl*fy*10**(-3);
    var pps = String( pp.toFixed(3) );
    var Pedns = String( Pedn.toFixed(3) );
    var Vedns = String( Vedn.toFixed(3) );
    var Medns = String( Medn.toFixed(3) );
    var Mrds = String( Mrd.toFixed(3) );

    // Identification of variables.
    var value1 = document.getElementById('pps');
    var value2 = document.getElementById('Pedns');
    var value3 = document.getElementById('Vedns');
    var value4 = document.getElementById('Medns');
    var value5 = document.getElementById('Mrds');

    // preventing information from appearing.
    //document.getElementById('infos').classList.remove('hidden');

    // Changing dot by comma. 
    value1.textContent = pps.replace('.', ',');
    value2.textContent = Pedns.replace('.', ',');
    value3.textContent = Vedns.replace('.', ',');
    value4.textContent = Medns.replace('.', ',');
    value5.textContent = Mrds.replace('.', ',');
});
});

