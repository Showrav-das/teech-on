import React, { useState } from 'react';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
//import { useEffect } from 'react';
//import AOS from 'aos';
//import 'aos/dist/aos.css'
const TopPart = () => {
  const { scr, setScr } = useState(true);
    //useEffect(() => {
    //    AOS.init({
    //      duration : 2000
    //    });
    //  }, []);
  
  const onVisibilityChange = (isVisible,myCountUp) => {
    if (isVisible) {
      if (scr) {
        startAnimation(myCountUp);
        setScr({ scr: false });
      }
    }
    }
  
    return (
        <div>
          
            <h1>hfds</h1>

           
            <div data-aos="flip-left" class="card">
    {/*<img src="..." class="card-img-top" alt="...">*/}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, cupiditate ducimus ad nobis voluptate eius id est fugiat aliquam delectus, placeat nemo illo libero eveniet molestias et earum, nulla beatae enim asperiores aut cumque dolorum obcaecati facere? At autem impedit corporis. Modi eaque repudiandae dignissimos est alias, iusto sunt dolor sapiente dolorem dolores odio voluptates eveniet illum vero officiis, harum ut non quam asperiores error quaerat ex facilis corporis? Nesciunt obcaecati dicta quaerat. Accusantium praesentium minima numquam omnis aut maxime eos voluptas quisquam facere eligendi repudiandae tempore, temporibus dolorem nemo quia, dolorum neque sint. Recusandae itaque in alias sit, commodi ducimus sint, aperiam at eum incidunt facilis culpa natus? Dolorem inventore debitis totam exercitationem eligendi aut quam illum ipsum, est amet quas, consequuntur corporis voluptates soluta! Esse blanditiis, quisquam quis rem quaerat aut officiis deleniti in autem veniam? Quaerat, aspernatur culpa, laudantium harum dolor eos labore pariatur aperiam debitis, assumenda iste eum. Mollitia quaerat quibusdam, ratione architecto in aspernatur ullam facere atque dolorem nesciunt accusamus libero maxime ab veritatis a! Quae ex, ratione exercitationem ipsam aliquid natus, culpa alias modi maxime harum accusantium. Aliquam hic est sint earum sapiente laborum assumenda fuga debitis corporis pariatur maxime a vero error autem tenetur reiciendis et quo fugiat, velit dolore quas. Amet natus quasi obcaecati dolores, odio, inventore iure voluptatibus nesciunt harum cumque unde, aliquid dolor deleniti vitae quidem blanditiis! Odio nam atque quasi corrupti. Et, repudiandae sequi? Ad maxime illo ipsa nostrum at reiciendis, officiis debitis assumenda inventore accusamus praesentium. Perferendis, saepe nemo blanditiis natus commodi sint dolore atque provident ullam. Reiciendis nisi quas doloremque saepe ut corrupti sequi asperiores maxime cupiditate, quaerat, amet animi nostrum expedita vel veritatis ullam quasi, aliquid alias molestias odit minus facilis sint dignissimos ea! Autem, tempore blanditiis officia ad magni deleniti nemo dolor repudiandae id voluptatum dolores. Quos, ipsa? Labore, reprehenderit necessitatibus quod, beatae, praesentium cumque molestias enim ad delectus nam dolores dolore nulla dolor doloribus laudantium quaerat. Cupiditate praesentium vero, nostrum, quibusdam impedit amet at quaerat odit repudiandae ex fugit et. Asperiores cum explicabo laudantium dignissimos ea perferendis, modi repudiandae corrupti hic aspernatur quis iste, unde, quaerat accusantium odit sunt tenetur quia expedita eaque? Odit saepe quas provident aliquam recusandae autem amet perferendis facilis quos adipisci sint esse, eaque maxime quia dignissimos laborum nihil expedita placeat, assumenda culpa debitis nisi. Laborum, temporibus, aspernatur eveniet omnis dolores accusamus molestiae eaque odit fugiat pariatur repudiandae veritatis sunt commodi animi itaque amet ratione non tenetur reiciendis totam iure, dicta quidem. Rem quos beatae repudiandae illum atque dolorem esse ipsum odio modi accusantium? Laboriosam at officiis dolores! Voluptates qui accusamus, quia iure veniam harum optio voluptatum, sed ducimus reiciendis dolor modi et aperiam quae expedita iste odio magnam cumque eos corporis earum neque recusandae veritatis! Ipsam enim accusamus obcaecati corrupti reiciendis blanditiis fugiat veniam, consectetur iusto repudiandae magnam, quia inventore error dolores impedit expedita ea dicta labore! Delectus soluta tempora beatae inventore quibusdam, quod architecto voluptas? Illo, eligendi delectus labore neque ducimus vitae reiciendis. Nisi illo corrupti soluta distinctio?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas quasi ab ullam autem voluptatem ad? Tempore amet, eveniet dignissimos cupiditate esse ea. Et minus cupiditate at praesentium fugiat, reprehenderit, iure rem ut dolorum, harum error ab sapiente nesciunt eos. Animi eveniet iste amet, beatae dolores dolor veritatis eligendi fugit cumque rem doloremque dolore officia placeat iusto quidem blanditiis unde reiciendis repellendus! Qui id voluptatem quisquam molestias explicabo nihil illum aperiam. Quidem saepe, enim natus maiores consequuntur magni placeat, porro eum, maxime adipisci quas hic explicabo dicta ipsum laborum excepturi. Sit praesentium numquam placeat in reprehenderit corrupti, ducimus, sunt dolores voluptate ab architecto eos magni illum fugit blanditiis incidunt error optio neque quidem nihil dignissimos deserunt. Aliquam, nesciunt, natus assumenda eos blanditiis officiis delectus facere laborum ab quis repellendus eaque hic unde, quod ullam inventore ea? Qui est laborum, obcaecati sed maxime quidem accusantium expedita odit debitis nisi quia nihil quos amet iste, deserunt minima natus excepturi corporis sit molestias dolor reiciendis quisquam maiores! Quas velit asperiores mollitia, libero beatae consequatur voluptatibus dicta alias quis nisi dolorum nesciunt id incidunt dignissimos ab, fuga deserunt perferendis dolor voluptate laborum quam saepe odit itaque neque. Consequatur quo excepturi corrupti, eveniet non voluptate.
        </p>
        
  <CountUp end={100} redraw={true} >
        {({ myCountUp }) => (
            <VisibilitySensor onChange={onVisibilityChange}>
              <span ref={myCountUp} />
            </VisibilitySensor>
        )}
        </CountUp>
        
        </div>
    );
};

export default TopPart;