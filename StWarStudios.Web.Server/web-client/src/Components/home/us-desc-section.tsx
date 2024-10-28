import './us-desc-section.css'
import { Element } from 'react-scroll';
import { FaLaptop} from 'react-icons/fa';

function UsDescSection()
{
 return <>
 <Element name="us-desc" className="us-desc text-dark" > 
            <div className='us-content'>
              <div className='us-title'>
                <h1><strong>Nosotros</strong></h1>
                <img src="/images/line purple.png" className='us-img' alt="LinePurple" />
              </div>
              <div className='us-content'>
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat 
                ullamco ullamco et. Aliqua tempor do consectetur reprehenderit Lorem aliqua commodo 
                occaecat deserunt. Do eiusmod incididunt
              </div>
             
          </div>
          <div className='us-icon'>
              <FaLaptop size={200} color="#3f3f3f" />       
            </div>
            
        </Element>
 </>
}
export default UsDescSection;