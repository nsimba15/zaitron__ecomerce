
let lista = document.querySelector('.arrival_heading')
let lista2 = document.querySelectorAll('.arrival_heading div')
let products = document.querySelector('.products')
let slider = document.querySelectorAll('.slider')
let slider_wrapper = document.querySelector('.slider_wrapper')
let dots = document.querySelector('.dots')
let li = document.querySelector('.seller_items div ul')
let header = document.querySelector('.header')
let main = document.querySelector('.main')
let tleft = document.querySelector('.tleft')
let tright = document.querySelector('.tright')
let sdots = document.querySelector('.sdots')

let left = document.querySelector('.left')
let right = document.querySelector('.right')
let arr = document.querySelector('.arrival_products')
let elements = document.querySelector('.elements')
let seller_cards = document.querySelector('.seller_cards')
let sticky = document.querySelector('.sticky')
let now = document.querySelector('.now')
let navigation = document.querySelector('.navigation')
let navList = document.querySelectorAll('.navigation ul li a')
let says = document.querySelectorAll('.says')


let index = 1


function element(el){
  
  elements.innerHTML = el.map(i =>   
  ` <div>
      <box-icon color="gray" name=${i.name}></box-icon>
      <span class="name">${i.desc}</span>
    </div>
  `).join('')
}

element(division)


function showProduct(data){

  products.innerHTML = data.map(e => 
    `
    <div>
      <div class="imageProduct">
        <img src=${e.img} alt="" />
      </div>
      <div class="product_content">
        <h3>${e.name}</h3>
        <div class="stars">
          <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
          <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
          <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
          <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
          <box-icon name="star" color="gray" type="solid" size="xs"></box-icon>
        </div>
  
        <div class="price">
          <span class="line">${e.price_one}</span>
          <span class="red">${e.price_two}</span>
        </div>
  
        <div class="cart">
          <box-icon name="plus-circle" color="gray"></box-icon>
          <span class="add">Add to Cart</span>
        </div>
      </div>
  
      <div class="abs">
        <box-icon name="heart" color="gray"></box-icon>
      </div>
    </div>
    `).join('')
} 

showProduct(firstProduct)


// console.log(slider.length);
function arrivalp(params) {

  // console.log(params);
  arr.innerHTML = params.map((items) => 

    `
      <div>
        <div class="items">
          <img src=${items.img} />
        </div>
        <div class="product_content">
          <h3>${items.name}</h3>
          <div class="stars">
            <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
            <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
            <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
            <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
            <box-icon name="star" color="gray" type="solid" size="xs"></box-icon>
          </div>
        
          <div class="price">
            <span class="line">${items.price_one}</span>
            <span class="red">${items.price_two}</span>
          </div>
        
          <div class="cart">
            <box-icon name="plus-circle" color="gray"></box-icon>
            <span class="add">Add to Cart</span>
          </div>
        </div>
        
        <div class="abs">
          <box-icon name="heart" color="gray"></box-icon>
        </div>
      </div>
    `
  ).join('')
}

arrivalp(arrival.filter(e=> e.categories === 'laptop'))

lista.addEventListener('click', (event)=>{  
  const target = event.target.childNodes[3].innerHTML
  target === 'laptop' ? arrivalp(arrival.filter(e=> e.categories === 'laptop')) : arrivalp(arrival.filter(e=> e.categories === target))
})

//slider

for(let i = 0; i < slider.length; i++){

  let dot = document.createElement('div')
  dot.className = 'dot'
  dots.append(dot)
}

let dot = document.querySelectorAll('.dot')
dot[0].classList.add('dotado')

dot.forEach((el, i)=> el.addEventListener('click', (e)=>{

  document.querySelector('.dotado').classList.remove('dotado')
  e.target.classList.add('dotado')
  slider_wrapper.style.transform = `translateX(-${100*i}%)`

}))

function one(){
  slider_wrapper.style.transform = `translateX(-${100*index}%)`
  index++
  document.querySelector('.dotado').classList.remove('dotado')
  dot[index - 1].classList.add('dotado')
}

function dois(){
  slider_wrapper.style.transform = `translateX(0)`
  index = 1
  document.querySelector('.dotado').classList.remove('dotado')
  dot[index - 1].classList.add('dotado')
}

function three(){
  slider_wrapper.style.transform = `translateX(-${100*(index-2)}%)`
  index--
  document.querySelector('.dotado').classList.remove('dotado')
  dot[index - 1].classList.add('dotado') 
}

function quatro(){
  slider_wrapper.style.transform = `translateX(-${100*(slider.length-1)}%)`
  index = slider.length
  document.querySelector('.dotado').classList.remove('dotado')
  dot[slider.length - 1].classList.add('dotado')
}

right.addEventListener('click', ()=> index < slider.length ? one() : dois())
left.addEventListener('click', ()=> index > 1 ? three() : quatro())



function list(lit){
  li.innerHTML = lit.map(li =>    
    `<li>
      <box-icon color="gray" name=${li.name}></box-icon>
      <span class="nm">${li.desc}</span>
    </li>    
    `
  ).join('')
}

list(lis)


function seller(items){

  // console.log(items);
  seller_cards.innerHTML = items.map(p => `
  
  <div class="cards">
    <div class="card">
      <img src=${p.img}>
    </div>
  
    <div class="cont">
      <h5>${p.name}</h5>
      <div class="starss">
        <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
        <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
        <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
        <box-icon name="star" color="orange" type="solid" size="xs"></box-icon>
        <box-icon name="star" color="gray" type="solid" size="xs"></box-icon>
      </div>
      <div class="price">
        <span class="line">${p.price_one}</span>
        <span class="red">${p.price_two}</span>
      </div>
      
      <div class="cart">
        <box-icon name="plus-circle" color="gray"></box-icon>
        <span class="add">Add to Cart</span>
      </div>
    </div>
  </div>`).join('')

}

seller(sellerItems.filter(e => e.cat === 'computer'))



li.addEventListener('click', (e)=>{
  
  // console.log(e.target.childNodes[3].innerHTML);
  const target = e.target.childNodes[3].innerHTML
  
  target == 'laptop' ? seller(sellerItems.filter(e => e.cat === 'computer')) : seller(sellerItems.filter(e => e.cat === target))
  
})


let ativado = document.querySelectorAll('.seller_items div ul li')

ativado.forEach((e, k)=> {
  ativado[0].classList.add('activado')
  
  e.addEventListener('click', (i)=> {
  document.querySelector('.activado').classList.remove('activado')
  i.target.classList.add('activado')

})})

lista2.forEach(o=>{

  lista2[0].classList.add('act')
  o.addEventListener('click', (e)=>{
    document.querySelector('.act').classList.remove('act')
    e.target.classList.add('act')
  })
})


// function navHeader(entries){

//   const [entry] = entries
//   // console.log(entry);

//   if(!entry.isIntersecting) document.querySelector('.bottom_second').classList.add('sticky')
//   else document.querySelector('.bottom_second').classList.remove('sticky')
  
// }

// const obs = new IntersectionObserver(
//   navHeader, 
//   {
//     root: null,
//     threshold: 0,
//   }
// )
// obs.observe(header)


document.querySelectorAll('.hamburguer')[1].addEventListener('click', ()=> navigation.style.left = 0)
document.querySelector('.close').addEventListener('click', ()=> navigation.style.left = '-100%')

let peoples = document.querySelector('.peoples')
for(let b = 0; b < says.length ; b++){

  let sdot = document.createElement('div')
  sdot.className = 'sdot'

  sdots.append(sdot)
}

let sdot = document.querySelectorAll('.sdot')
sdot[0].classList.add('dota')
says[0].classList.add('imagine')

let s = 1
tright.addEventListener('click', ()=>{

  if(s < says.length){
    peoples.style.transform = `translateX(-${s*50}%)`
    s++
    document.querySelector('.dota').classList.remove('dota')
    document.querySelector('.imagine').classList.remove('imagine')
    says[s - 1].classList.add('imagine')
    sdot[s - 1].classList.add('dota')
  }else{
    peoples.style.transform = `translateX(0)`
    s = 1
    document.querySelector('.imagine').classList.remove('imagine')
    says[s - 1].classList.add('imagine')
    document.querySelector('.dota').classList.remove('dota')
    sdot[s - 1].classList.add('dota')
    
  }
  
})
tleft.addEventListener('click', ()=>{
  
  if(s > 1){

    peoples.style.transform = `translateX(-${(s-2)*47}%)`
    s--
    document.querySelector('.imagine').classList.remove('imagine')
    says[s - 1].classList.add('imagine')
    document.querySelector('.dota').classList.remove('dota')
    sdot[s - 1].classList.add('dota')
  }else{
    peoples.style.transform = `translateX(-${(says.length - 1)*47}%)`
    s = says.length
    document.querySelector('.imagine').classList.remove('imagine')
    says[says.length - 1].classList.add('imagine')
    document.querySelector('.dota').classList.remove('dota')
    sdot[says.length - 1].classList.add('dota')

  }

})


now.addEventListener('click', ()=> document.querySelector('.icons_section').scrollIntoView())



let ol = document.querySelector('.cat ol')
let catol = document.querySelector('.cat')


catol.addEventListener('mouseover', ()=> ol.style.display = 'flex')
catol.addEventListener('mouseleave', ()=> ol.style.display = 'none')


let fixedButton = (entries)=>{

  let [entry] = entries

  if(entry.isIntersecting) document.querySelector('.float').style.display = 'none'
  else document.querySelector('.float').style.display = 'flex'

}

let newObser = new IntersectionObserver(
  fixedButton, {
    root: null,
    threshold: 0
  }
)

newObser.observe(main)

document.querySelector('.float').addEventListener('click', ()=> header.scrollIntoView())

//navList[0].classList.add('active')
navList.forEach(e => e.addEventListener('click', (el)=> {
 el.preventDefault()
  document.querySelector('.active').classList.remove('active')
  el.target.classList.add('active')

  const id = el.target.getAttribute('href')
  // console.log(id);
  document.querySelector(id).scrollIntoView()
  navigation.style.left = '-100%'

}))


let dy = document.querySelectorAll('.day')
let hr = document.querySelectorAll('.hour')
let mt = document.querySelectorAll('.minute')
let sec = document.querySelectorAll('.second')

let years = new Date('Apr 19, 2024 00:00:00').getTime()
// console.log(years);
// console.log(anYear);

getTimer()
function getTimer(){

  const anYear = new Date().getTime()
  const distance = years - anYear

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  console.log(distance);

  const d = Math.floor(distance / day)
  const h = Math.floor((distance % day) / hour)
  const m = Math.floor((distance % hour) / minute)
  const s = Math.floor((distance % minute) / second)

  dy.forEach(e => e.innerHTML = d)
  hr.forEach(e => e.innerHTML = h)
  mt.forEach(e => e.innerHTML = m)
  sec.forEach(e => e.innerHTML = s)

  setTimeout(getTimer, 1000)


}