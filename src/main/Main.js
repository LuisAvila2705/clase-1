import Counter from "./Counter"
import img from './img/Perro.jpg'


function Main() {
return (
        <div> 
            <Counter datos={['Luis', '20966', '5A']}/>
            <img src = {img} alt="Perro.jpg">   </img>
        </div>
    )
}

export default Main