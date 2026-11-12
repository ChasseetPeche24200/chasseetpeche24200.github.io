var HOURS={2:[[510,720],[840,1140]],3:[[510,720],[840,1140]],4:[[510,720],[840,1140]],5:[[510,720],[840,1140]],6:[[510,720],[840,1080]]};
var DAYS=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function hm(m){var h=Math.floor(m/60),mn=m%60;return h+' h'+(mn?' '+(mn<10?'0':'')+mn:'')}
function img(f){return 'photos/'+encodeURIComponent(f)}
function euro(p){if(p===''||p==null)return '';var n=Number(p);if(isNaN(n))return '';return new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n)}
