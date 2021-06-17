/* eslint-disable */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import M from 'materialize-css';
import * as THREE from 'three';
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

    init();

});


function str_rot13(str){
    return (str+'').replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
    })
}

var renderer, scene, camera, composer, ball1, ball2, ball3;

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  renderer.setAnimationLoop( animate );
	document.body.appendChild( renderer.domElement );

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene.add(camera);

  var geom = new THREE.IcosahedronGeometry(340, 1);
  var matGrid = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide
  });

  ball1 = new THREE.Object3D();
  ball1 = new THREE.Mesh(geom, matGrid);
  scene.add(ball1);


  objectPositionUpdate();

  //var ambientLight = new THREE.AmbientLight(0x999999 );
  //scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight( 0xFFC938, 1 );
  lights[0].position.set( 1.5, 0, 1 );
  lights[1] = new THREE.DirectionalLight( 0x00D8FF, 1 );
  lights[1].position.set( -2, 5, 0.5 );
  lights[2] = new THREE.DirectionalLight( 0xFF4255, 1 );
  lights[2].position.set( -8, -4, 5.5 );
  scene.add( lights[0] );
  scene.add( lights[1] );
  scene.add( lights[2] );


  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  objectPositionUpdate();

}

function animate() {

  ball1.rotation.x += 0.0005;
  ball1.rotation.y -= 0.0040;
  ball1.rotation.z += 0.0010;

  renderer.clear();

  renderer.render( scene, camera )
};

function objectPositionUpdate(){

  var scaleFactor = (window.innerWidth/1280);
  if(scaleFactor > 1.3) scaleFactor = 1.3;
  if(scaleFactor < 0.3) scaleFactor = 0.3;

  var tempScale = scaleFactor;

  tempScale = 0.5*scaleFactor;
  ball1.scale.x = tempScale;
  ball1.scale.y = tempScale;
  ball1.scale.z = tempScale;
  ball1.position.x = (window.innerWidth/14)+(-45)+(-(window.innerWidth)/8)*1.2;
  ball1.position.y = ((window.innerHeight)/12)*1.3;

}
