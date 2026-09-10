const bromes = [
  "T'has perdut pel carrer de la incultura, oi?",
  "Sembla que la teva brúixola cultural s'ha espatllat!",
  "Per cert, Catalunya no és només Barcelona...",
  "T'hauries de comprar un mapa!",
  "Potser has de començar per les bases!",
  "Els teus coneixements geogràfics necessiten una mica d'exercici!",
  "Sembla que has estudiat a l'escola de la ignorància!",
  "Potser una mica de turisme et faria bé!",
  "Tant estudiar i tan poc aprendre!",
  "No sabies que Catalunya té més comarques que la teva ciutat?",
  "Ho sento, però no és la Sagrada Família a cada resposta!",
  "Sembla que necessites una guia turística!",
  "Els teus coneixements culturals són tan clars com la boira!",
  "Has fallat més que un GPS sense senyal!",
  "El teu cervell necessita una posada a punt!",
  "Potser et falta una mica de rauxa i una mica més de seny!",
  "Sembla que estàs una mica perdut... com a les rotondes de Girona!",
  "T'has perdut més que un turista a les Rambles!",
  "Perdona, però la teva cultura està més despistada que un peix fora de l'aigua!",
  "Potser hauries de fer una escapada per aprendre més!",
  "No, Montserrat no és un personatge de telenovel·la!",
  "Potser t'hauries de plantejar unes vacances culturals!",
  "T'has quedat més confós que un pastís de calçots!",
  "Tant Google Maps i tan poc aprenentatge!",
  "El teu coneixement està tan dispers com la neu a la primavera!",
  "Perdona, però la teva cultura està en stand-by!",
  "Potser hauries de consultar la Viquipèdia de tant en tant!",
  "Els teus coneixements culturals necessiten una posada a punt!",
  "Sembla que el teu cervell està de vacances!",
  "El teu GPS cultural necessita una actualització!",
  "T'haurien d'assignar un guia turístic permanent!",
  "T'has quedat tan perdut com un català sense calçots!",
  "Els teus coneixements són tan confusos com el temps a la muntanya!",
  "Potser hauries de canviar de llibre de text!",
  "Sembla que la teva cultura està en mode hivernació!",
  "T'has quedat més perdut que un boletaire sense GPS!",
  "El teu cervell necessita unes vacances culturals!",
  "T'has perdut més que un turista a les Festes de la Mercè!",
  "El teu coneixement cultural és com una bossa de patates: ple de forats!",
  "Sembla que necessites una sessió intensiva de cultura catalana!",
];

function broma() {
  const randomIndex = Math.floor(Math.random() * bromes.length); // Corrección aquí
  const broma = bromes[randomIndex];
  return broma;
}

export default broma;
