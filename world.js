window.onload = function() {

  const  input = document.getElementById('country');
  const  lookUp = document.getElementById('lookup');
  const  result = document.getElementById('result');
  const  httpReq= new XMLHttpRequest();
   
  const REG=(url)=>{
	httpReq.onreadystatechange = callback;
	httpReq.open('GET', url);
	httpReq.send();
  }
  lookUp.addEventListener('click', function(event) {
	event.preventDefault();
	const searchText = input.value;
	let stored = searchText.trim();
	const  url = `world.php?country=${stored}`;
	REG(url);
	console.log(stored)


  });


  function callback() {
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      if (httpReq.status === 200) {
        const res = httpReq.responseText;
		result.innerHTML=res;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

}
