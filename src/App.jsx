import './App.css';
import Fleur1 from './fleur1.jpeg';
import Fleur3 from './leaf.png';
import Star from './etoile (1).png';
import Star2 from './evaluation.png';
const styles = {
  padding:10,
  background:'white',
  border:'1px solid red', 
}
const para ={
position:'relative',
left:1140,
color:'black'
}
const side = {
  border:'3px solid yellow',
  color:'white',
  background:'green',
  width:250,
  height:400,
  position:'relative',
  bottom:35,
}
const after = {
  position:'relative',
  left:15
}
const gori = {
  display:'flex',
  justify_content:'space_around',
  position:'relative',
  bottom: 410,
  left:580,
  border:'2px solid yellow',
  width:300,
}
const input ={
  width:100,
  margin:10
}
const element={
 position:'relative',
 bottom:25,
}
// const plate={
// position:'relative',
// left:350,
// bottom:310,
// }
// const items3={
//   position:'relative',
//   left:700,
//   bottom:620,
// }
const footer ={
position:'relative',
bottom:1100,
border:'3px solid blue',
height:190
}
const fotele={
  position:'relative',
  left:550,
}
 const finput={
   width:150,
 }
 const center ={
  position:'relative',
  right:35
 }
 const plateitems={
  position:'relative',
  left:360,
  bottom:380,
 }
 const plateitem={
  position:'relative',
  left:730,
  bottom:740,

}
const plateite={
  position:'relative',
  left:1100,
  bottom:1113,
}
const image={
  position:'relative',
  left:1110,
  bottom:60,
}
const img={
width:200,
height:200,
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
}
function Banner(props) {
  return <div>
  <nav style={{...props.style, fontSize: props.textSize}}>{props.children}</nav>
  <img style={image} src={Fleur3} alt=""/>
  </div>
}
function Categories() {
  return <div style={gori}>
  <div >
   <input style={input} name="myInput" defaultValue="Plante"/>
   <input style={input} name="myInput" defaultValue="Fleur"/>
  </div>
  </div>
} 
function Plateitem1() {
  return <div style={plateitems}>
    <img style={img}src={Fleur1} alt=""/>
    <div>
    <p>Produit1</p>
   <img src={Star} alt=""/><br/>
   <img  style={element}src={Star2} alt=""/><br/>
   <button style={element}>Ajouter</button>
    </div>
  </div>
}
function Plateitem2() {
  return <div style={plateitem}>
    <img  style={img} src={Fleur1} alt=""/>
    <div>
    <p>Produit2</p>
   <img src={Star} alt=""/><br/>
   <img  style={element}src={Star2} alt=""/><br/>
   <button style={element}>Ajouter</button>
    </div>
  </div>
}
function Plateitem3() {
  return <div style={plateite}>
    <img  style={img}src={Fleur1} alt=""/>
    <div>
    <p>Produit3</p>
   <img src={Star} alt=""/><br/>
   <img  style={element}src={Star2} alt=""/><br/>
   <button style={element}>Ajouter</button>
    </div>
  </div>
}
function ShoppingList() {
  return <div >
  <Plateitem1/>
  <Plateitem2/>
  <Plateitem3/>
</div>
  
}
function Sidebar() {
  return <div style={side}>
   <div style={after}>
   <h2>Panier</h2>
   <ul>
    <li>Produit1 100£</li>
    <li>Produit2 25£</li>
    </ul>
    <h3>Total = 125£</h3>
    <br/>
    <button>Ajouter au panier</button>
   </div>
  </div> 
}
function Footer() {
  return<div style={footer}>
  <div style={fotele}>
  <h3 style={center}>Pour les pasionné-es de plantes</h3>
    <p>Laissez   nous votre   e-mail:</p>
    <input style={finput} name="myInput" defaultValue="Entrez votre email"/>
  </div>
  </div>
}

 export default function MyApp() {
  return (
    <body>
      <div className='navbar'>
      <Banner style={styles}textSize={20}><p style={para}>La maison jungle</p></Banner>
    </div>
     <div className='sidebar'>
     <Sidebar style={side}></Sidebar>
     </div>
     <div className='catego'>
      <Categories></Categories>
      </div>
      <div className='plateitems'>
    <ShoppingList></ShoppingList>
      </div>
      <div className='footer'>
      <Footer></Footer>
      </div>
    </body>
  );
  

}