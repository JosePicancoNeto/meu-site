const formn1 = document.getElementById('formn1');

formn1.addEventListener('submit', function(event) {

    // Stop the page to reload.
    event.preventDefault();

    // Data acquisition for programm. 
    var Ped = parseFloat(document.getElementById('Ped').value);
    var ang = parseFloat(document.getElementById('ang').value);
    var L = parseFloat(document.getElementById('L').value);
    var fy = parseFloat(document.getElementById('fy').value);

    // transform ang (degree to rad)
    var angr = (Math.PI/180)*ang

    // Decomposition of the tranversal force. 
    var Ved = (Ped*L)/2;
    var Vedy = Ved*Math.cos(angr);
    var Vedz = Ved*Math.sin(angr);
    var Veds = String( Ved.toFixed(3) );
    var Vedys = String( Vedy.toFixed(3) );
    var Vedzs = String( Vedz.toFixed(3) );

    // Decomposition of the momentum. 
    var Med = (Ped*L**(2))/8;
    var Meds = String( Med.toFixed(3) );
    var Medy = Med*Math.cos(angr);
    var Medys = String( Medy.toFixed(3) );
    var Medz = Med*Math.sin(angr);
    var Medzs = String( Medz.toFixed(3) );

    // Identification of variables.
    var value1 = document.getElementById('Veds');
    var value2 = document.getElementById('Vedys');
    var value3 = document.getElementById('Vedzs');
    var value4 = document.getElementById('Meds');
    var value5 = document.getElementById('Medys');
    var value6 = document.getElementById('Medzs');

    // preventing information from appearing.
    //document.getElementById('infos').classList.remove('hidden');

    // Changing dot by comma. 
    value1.textContent = Veds.replace('.', ',');
    value2.textContent = Vedys.replace('.', ',');
    value3.textContent = Vedzs.replace('.', ',');
    value4.textContent = Meds.replace('.', ',');
    value5.textContent = Medys.replace('.', ',');
    value6.textContent = Medzs.replace('.', ',');

    const formn2 = document.getElementById('formn2');

    formn2.addEventListener('submit', function(event) {

    // Stop the page to reload.
    event.preventDefault();

    // Data acquisition for programm.
    var wply = parseFloat(document.getElementById('wply').value);
    var wplz = parseFloat(document.getElementById('wplz').value);

    // Profile Pre Sized. 
    var Mrdy = wply*fy*10**(-3);
    var Mrdz = wplz*fy*10**(-3);
    var alpha = 2;
    var beta = 1;
    var verifica = (Medy/Mrdy)**(alpha)+(Medz/Mrdz)**(beta);

    let description = ''; 

    // Condition to the operation.
    if ( verifica <= 1 ) {
        description = 'A verificação foi aprovada';
    } else if ( verifica > 1 ) {
        description = 'A verificação está desaprovada.'
    } else {
        description = 'NaN.'
    }
    
    // Identification of variables.
    var value1 = document.getElementById('pps');
    var value2 = document.getElementById('Pedns');
    var value3 = document.getElementById('Vedns');
    var value4 = document.getElementById('Medns');
    var value5 = document.getElementById('Mrds');

    document.getElementById('description').textContent = description;

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

