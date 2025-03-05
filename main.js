let v = 29;

if( v < 18){
    console.log(`Insufficiente`);
    
}else if( v >= 18 && v < 21){
    console.log(`sufficiente`);
    
}else if (v >= 21 && v < 24) {
    console.log(`buono`);
    
}else if (v >= 24 && v < 27) {
    console.log(`distinto`);
    
}else if (v >= 27 && v <= 29) {
    console.log(`ottimo`);
    
}else if (v == 30) {
    console.log(`eccelente`);
}
    //  else{
//     console.log(`voto non valido`);
    
// }

let voto = 26;

switch (true) {
    case voto >= 0 && voto < 18:
        // console.log(`Insufficiente`);
        voto = `insufficiente`
        break;

    case voto >= 18 && voto < 21: 
        //  console.log(`sufficiente`);
        voto = `sufficiente`
         break;
    case voto >= 21 && voto < 24:
        // console.log(`buono`);
        voto = `buono`
        break;
    case voto >= 24 && voto < 27:
        // console.log(`distinto`);
        voto = `distinto`
        break;
    case voto >= 27 && voto <= 29:
        // console.log(`ottimo`);
        voto = `ottimo`
        break;
    case voto == 30:
        // console.log(`eccellente`);
        voto = `eccellente`
        break;    
            
    default:
    // console.log(`Non classificato`);
    voto = `voto non valido`
        break;
}

console.log(voto);
