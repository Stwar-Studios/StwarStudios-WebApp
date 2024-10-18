import { Element } from 'react-scroll';
import { FaLaptop} from 'react-icons/fa';

function UsDescSection()
{
 return <>
 <Element name="us-desc" className="us-desc text-dark p-2" > 
        <div className="container m-5 p-5">
          <div className='row container p-5'>
            <div className='col-6'>
              <div className='us'>
                <h1 className='mb-5'><strong>Nosotros</strong></h1>
                <img src="/images/line purple.png" className='us-img' alt="LinePurple" />
              </div>
              <div className='us-content'>
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat 
                ullamco ullamco et. Aliqua tempor do consectetur reprehenderit Lorem aliqua commodo 
                occaecat deserunt. Do eiusmod incididunt
              </div>
            </div>
            <div className='col-6 d-flex align-items-center justify-content-center'>
              <FaLaptop size={200} color="#3f3f3f" />
            </div>
          </div>        
        </div>
        </Element>
 </>
}
export default UsDescSection;