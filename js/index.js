let check =  document.getElementById('toogle');
const year = document.querySelectorAll('.card__price-y')
const month = document.querySelectorAll('.card__price-m')
console.log(year , month)

check.addEventListener('change', ()=>{

  if(check.checked){
    year.forEach(price => price.style.display = "flex");
    month.forEach(price => {
      price.style.display = 'none'
    });

  }else{
    year.forEach(price => price.style.display = "none");
    month.forEach(price => {
      price.style.display = 'flex'
    });
  }
})