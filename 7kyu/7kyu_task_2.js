//  2. - Bumps in the Road

function bump(x){
  let bumps = 0;

  const way = x.split('').forEach((el) => {
    if (el == 'n') {
      bumps += 1;
    }
  });

  return bumps < 16 ? "Woohoo!" : "Car Dead";
}

console.log(bump("n"));                                                   //  "Woohoo!"
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));                       //  "Woohoo!"
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"));                       //  "Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));                       //  "Car Dead"
console.log(bump("______n___n_"));                                        //  "Woohoo!"


/* 
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";

const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';

return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";

-------

if (!string.match(/n/g)) return "Woohoo!";
  
return string.match(/n/g).length <= 15 ? 
  `Woohoo!` :
  `Car Dead`;

-------
 */