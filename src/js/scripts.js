/* eslint-disable */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import M from 'materialize-css'
//import Materialmodal from './custom-material-box'

/*
  Init Materialize Modules
*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

    document.querySelector("a[href^='#imprint']").addEventListener('click', function(e) {
      setTimeout(function() {
        document.querySelector('.modal-content').innerHTML = "";

        let im = "<h4>Impressum</h4><h5>Angaben gemäß § 5 TMG</h5>";
        im += "<p>"+str_rot13("Znepry Pynhf")+"<br/>";
        im += str_rot13("Znyzöre Fge. 26")+"<br/>";
        im += str_rot13("10439 Oreyva")+"<br/>";
        im += "Mail: "+str_rot13("fpuervo")+'@'+'g'+'e'+'ck'+'s'+'e'+'.de</p>';

        im += "<h5>Haftung f&uuml;r Inhalte</h5> <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h5>Haftung f&uuml;r Links</h5> <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <h5>Urheberrecht</h5> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>";

        im += '<p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>';

        document.querySelector('.modal-content').innerHTML = im;


      },1200);
      return true;
    });

    document.querySelectorAll("a[href^='#turnthistomail']").forEach(function(e){
      e.addEventListener('click', function(e) {
        if (navigator.userAgent.indexOf("Headless") == -1 && navigator.userAgent.indexOf("headless") == -1){
          let hash = str_rot13("fpuervo");
          window.location.href='mailto:'+hash+'@'+'g'+'e'+'ck'+'s'+'e'+'.de';
          this.href = 'mailto:'+hash+'@'+'g'+'e'+'ck'+'s'+'e'+'.de';
        }
        e.preventDefault();
        e.stopPropagation();
        return true;
      });
    });

});


function str_rot13(str){
    return (str+'').replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
    })
}
