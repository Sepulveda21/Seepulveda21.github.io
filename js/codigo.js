header = document.querySelector('header');
console.log(header)
li = Array.prototype.slice.apply(document.querySelectorAll('ul li'))

header.addEventListener('click',(e)=>{
	
	if(e.target.classList.contains('nav-item')){

		console.log(e.target.classList.contains('nav-item'))
		contenedo = document.querySelectorAll('.contenedorImg');

			for(danny=0; danny <li.length;danny++){
				contenedo[danny].style ='display:none;';
				li[danny].removeAttribute("id")
				// li[danny].setAttribute("id","navColor")

			}
			contenedo[li.indexOf(e.target)].classList.add('animate__animated', 'animate__bounceIn');
			contenedo[li.indexOf(e.target)].style.display ='block';
			li[li.indexOf(e.target)].setAttribute("id","navColor")

			
}
})
	mas = document.getElementById('mas');
	mas.addEventListener('click',cambiar)
x=0
function cambiar()
{	
	carta = document.querySelectorAll(".carta");
	x+=1;
	if(x%2==1){
		carta[0].style ="display:none";
		carta[1].style ="display:block";
		this.style ="background:red";
		carta[1].classList.add('animate__animated', 'animate__bounceIn')
		
	}else{
	
		carta[0].style ="display:block";
		carta[1].style ="display:none";
		this.style ="background:white";
		carta[0].classList.add('animate__animated', 'animate__bounceIn')

	}	
	console.log(x)	
	}

	
	toggle=document.querySelector('.navbar-toggler');

	toggle.addEventListener('click',navShow);

	function navShow(){
		alert()
	}	




