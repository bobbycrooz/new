import style from './mainpane.module.css'
import gdocs from '../../assets/illustration/gdocs.svg'
import Styled from "styled-components"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()


const ImgOne = Styled.img`
    width:100px;
    height:100px;

`
const DivOne = Styled.div`
    // width:100%;
    display:flex;
    background-color:rgb(245, 224, 224);
    justify-content:space-between;
    border:1px solid grey;
    margin: 30px;

`

export const Pane = (props) => { 

    const arr = [1,2,3,4,5]
    return(
        <div className={style.Pane}
         data-aos="fade-right"
         data-aos-delay="50"
         data-aos-duration="2500"
         >
        <div className={style.Head}>
            <div className={style.Controls}>
                <div 
                className={[style.Controls_item,style.Controls_green].join(" ")}
                onClick={props.close}
                >
                    &gt;
                </div>
                <div className={[style.Controls_item,style.Controls_grey].join(" ")}>_</div>
                <div className={[style.Controls_item,style.Controls_red].join(" ")}>X</div>
                
            </div>  
        </div>
        <div>
            <h2>{props.title}</h2>
            {
                arr.map((item,index)=>{
                    return (
                    <DivOne data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000">
                    <ImgOne
                         
                         src={gdocs}
                         alt='svg icon'
                        />
                        <p>Here is the item {item} in the {index} index</p>
                    </DivOne>
                    )
                })
            }
        
          
            

        </div>
        </div>
    )
} 