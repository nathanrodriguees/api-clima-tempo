const procurar = ()  => {
 
    const cidade = document.querySelector('#nomeCidade').value;
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;
   
    fetch(url)
          .then(resposta =>{
            console.log(resposta)
            return resposta.json();
          })
            .then(dados =>{
              console.log(dados);
              document.querySelector('#tempe').value = dados.main.temp;
            })
            .catch(erro => {
              console.log(erro);
            })
   
  }
