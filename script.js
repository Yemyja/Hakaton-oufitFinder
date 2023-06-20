const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const city = "Huixquilucan"; // Reemplaza "Ciudad" con el nombre de la ciudad que desees

function generateRandomOutfit() {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const outfit = generateOutfitBasedOnWeather(temperature, description);
  
        displayOutfit(temperature, description, outfit);
      })
      .catch(error => {
        console.log('Error al obtener datos del clima:', error);
      });
  }
  

  function generateOutfitBasedOnWeather(temperature, description) {
    if (temperature > 20 && description.includes('sunny')) {
      const outfitSoleado = generateOutfitSoleado();
      return outfitSoleado;
    } else if (temperature > 15 || description.includes('cloudy')) {
      const outfitNublado = generateOutfitNublado();
      return outfitNublado;
    } else if (temperature > 10 && description.includes('rain')) {
      const outfitLluvia = generateOutfitLluvia();
      return outfitLluvia;
    } else if (description.includes('clear sky')) {
      const outfitCieloDespejado = generateOutfitCieloDespejado();
      return outfitCieloDespejado;
    } else if (description.includes('partly cloudy') || description.includes('scattered clouds') || description.includes('broken clouds')) {
      const outfitNubes = generateOutfitNubes();
      return outfitNubes;
    } else if (description.includes('light rain') || description.includes('moderate rain') || description.includes('heavy rain') || description.includes('showers') || description.includes('thunderstorms')) {
      const outfitLluvia = generateOutfitLluvia();
      return outfitLluvia;
    } else if (description.includes('light snow') || description.includes('moderate snow') || description.includes('heavy snow')) {
      const outfitNieve = generateOutfitNieve();
      return outfitNieve;
    } else if (description.includes('fog') || description.includes('mist')) {
      const outfitNeblina = generateOutfitNeblina();
      return outfitNeblina;
    } else if (description.includes('strong wind')) {
      const outfitViento = generateOutfitViento();
      return outfitViento;
    } else if (description.includes('few clouds')) {
        const outfitPocasNubes = generateOutfitPocasNubes();
        return outfitPocasNubes;
      
    }else {
      return generateOutfitBasedOnTemperature(temperature);
    }
  }
  
  function generateOutfitSoleado() {
    const outfitsSoleado = [
      "Vestido floral y sandalias de cuña.",
      "Camiseta blanca, shorts de mezclilla y zapatillas blancas.",
      "Top sin mangas, pantalones anchos y sandalias de tiras.",
      "Blusa sin mangas, falda midi y sandalias de tiras",
"Vestido ligero y sandalias de plataforma",
"Top de manga corta, pantalones cortos y zapatillas blancas",
"Camiseta estampada, pantalones palazzo y sandalias de cuña",
"Mono corto y sandalias planas",
"Crop top, pantalones de tiro alto y zapatillas deportivas",
"Vestido floral y sandalias de tacón",
"Camisa de lino, pantalones anchos y alpargatas",
"Blusa de tirantes, shorts de mezclilla y sandalias gladiadoras",
"Maxi vestido y sandalias de plataforma"
     
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsSoleado.length);
    const randomOutfitSoleado = outfitsSoleado[randomIndex];
  
    return randomOutfitSoleado;
  }
  
  function generateOutfitNublado() {
    const outfitsNublado = [
      "Chaqueta de mezclilla, camiseta blanca y botines.",
      "Sweater, jeans y zapatillas.",
      "Camisa de botones, pantalones y mocasines.",
      "Suéter de manga larga, jeans ajustados y botas",
"Camisa de franela, pantalones cortos y zapatillas blancas",
"Chaqueta vaquera, vestido ajustado y botines",
"Sudadera con capucha, leggings y zapatillas deportivas",
"Blusa estampada, pantalones de tela y mocasines",
"Chaleco acolchado, camiseta básica y jeans",
"Blazer, falda lápiz y tacones",
"Suéter de cuello alto, pantalones de cuero y botas altas",
"Camisa a cuadros, jeans boyfriend y zapatillas blancas"
      
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsNublado.length);
    const randomOutfitNublado = outfitsNublado[randomIndex];
  
    return randomOutfitNublado;
  }
  
  function generateOutfitLluvia() {
    const outfitsLluvia = [
      "Impermeable, blusa a rayas y botas de lluvia.",
      "Paraguas, vestido y bailarinas.",
      "Chamarra impermeable, jeans y botas impermeables.",
      "Impermeable transparente, vestido y botas de lluvia",
"Jeans, suéter de punto y botines",
"Chamarra cortaviento, leggings y botas impermeables",
"Gabardina, blusa a rayas y botas de lluvia",
"Poncho impermeable, pantalones cortos y sandalias resistentes al agua",
"Chaqueta de lluvia, jeans y botas de agua",
"Chubasquero, falda plisada y botas de lluvia",
"Abrigo impermeable, pantalones ajustados y botas de lluvia",
"Capa de lluvia, vestido y botas de agua",
"Chamarra rompevientos, blusa de manga larga y botas de lluvia"
      // Agrega más combinaciones para días lluviosos...
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsLluvia.length);
    const randomOutfitLluvia = outfitsLluvia[randomIndex];
  
    return randomOutfitLluvia;
  }
  
  function generateOutfitCieloDespejado() {
    const outfitsCieloDespejado = [
      "Playera, shorts y sandalias.",
      "Top corto, falda y sandalias.",
      "Camiseta sin mangas, pantalones cortos y chanclas.",
      "Vestido de verano y sandalias de dedo",
"Top sin mangas, pantalones cortos y zapatillas blancas",
"Camiseta básica, jeans ajustados y sandalias planas",
"Blusa ligera, pantalones de tela y alpargatas",
"Mono corto y zapatillas de lona",
"Top corto, falda de vuelo y sandalias de plataforma",
"Vestido maxi y sandalias de cuña",
"Camisa sin mangas, shorts de mezclilla y zapatillas blancas",
"Suéter de manga corta, pantalones anchos y sandalias de tiras",
"Blusa estampada, pantalones palazzo y sandalias de tacón"
    
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsCieloDespejado.length);
    const randomOutfitCieloDespejado = outfitsCieloDespejado[randomIndex];
  
    return randomOutfitCieloDespejado;
  }
  
  function generateOutfitNubes() {
    const outfitsNubes = [
      "Chamarra ligera, camiseta y tenis.",
      "Blusa estampada, jeans y botines.",
      "Suéter, leggings y zapatillas deportivas.",
      "Chamarra de cuero, camiseta básica y tenis",
      "Suéter ligero, jeans ajustados y botines",
      "Vestido estampado, chaqueta de mezclilla y sandalias",
      "Camiseta gráfica, pantalones cortos y zapatillas deportivas",
      "Blusa de manga larga, jeans y botas",
      "Sudadera con capucha, leggings y zapatillas",
      "Crop top, pantalones de tiro alto y zapatillas blancas",
      "Camisa a rayas, falda midi y botas",
      "Blusa sin mangas, pantalones de tela y mocasines",
      "Chaqueta ligera, jeans y zapatillas de lona"

      // Agrega más combinaciones para días parcialmente nublados...
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsNubes.length);
    const randomOutfitNubes = outfitsNubes[randomIndex];
  
    return randomOutfitNubes;
  }
  
  function generateOutfitNieve() {
    const outfitsNieve = [
      "Abrigo, bufanda, pantalones y botas de nieve.",
      "Chamarra acolchada, jeans y botas de invierno.",
      "Suéter grueso, leggings y botines.",
      // Agrega más combinaciones para días nevados...
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsNieve.length);
    const randomOutfitNieve = outfitsNieve[randomIndex];
  
    return randomOutfitNieve;
  }
  
  function generateOutfitNeblina() {
    const outfitsNeblina = [
      "Chaqueta cortaviento, camiseta y zapatos cómodos.",
      "Blusa ligera, pantalones y zapatillas.",
      "Suéter, jeans y botines.",
      "Impermeable de colores, blusa estampada y botas de lluvia",
      "Paraguas grande, vestido ligero y botines",
      "Chamarra impermeable, jeans ajustados y botas impermeables",
      "Sudadera con capucha, leggings y botas de lluvia",
      "Gabardina, blusa de manga larga y botines",
      
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsNeblina.length);
    const randomOutfitNeblina = outfitsNeblina[randomIndex];
  
    return randomOutfitNeblina;
  }
  
  function generateOutfitViento() {
    const outfitsViento = [
      "Rompevientos, camiseta, leggings y tenis.",
      "Blusa suelta, pantalones ajustados y botas.",
      "Sudadera con capucha, jeans y zapatillas deportivas.",
      "Abrigo largo, bufanda, leggings y botas de tacón",
"Chaqueta cortaviento, camiseta básica y pantalones deportivos",
"Vestido de manga larga, medias tupidas y botines",
"Sudadera con capucha, jeans y zapatillas",
"Chamarra acolchada, leggings y botas altas",
"Blusa suelta, pantalones de tela y sandalias",
"Capa ligera, camiseta estampada y botas de lluvia",
"Camisa de manga larga, jeans ajustados y botines",
"Rompevientos, pantalones cortos y zapatillas deportivas",
"Suéter oversized, leggings y botas de combate"
      // Agrega más combinaciones para días ventosos...
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsViento.length);
    const randomOutfitViento = outfitsViento[randomIndex];
  
    return randomOutfitViento;
  }
  
  function generateOutfitFewClouds() {
    const outfitsFewClouds = [
      "Abrigo largo, suéter de cuello alto y botas altas.",
      "Chaqueta acolchada, jeans y botines.",
      "Sudadera, pantalones deportivos y zapatillas.",
      "Abrigo largo, suéter de cuello alto y botas altas",
"Chaqueta acolchada, jeans y botines",
"Sudadera, pantalones deportivos y zapatillas",
"Crop top, falda midi y botines",
"Blusa de manga larga, pantalones de tiro alto y mocasines",
"Blazer, camiseta básica y jeans ajustados",
"Cárdigan, pantalones cortos y zapatillas de lona",
"Vestido camisero, cinturón y sandalias",
"Chamarra de mezclilla, camiseta blanca y botas",
"Blusa estampada, pantalones palazzo y tacones"
      
    ];
  
    const randomIndex = Math.floor(Math.random() * outfitsFewClouds.length);
    const randomOutfitFewClouds = outfitsFewClouds[randomIndex];
  
    return randomOutfitFewClouds;
  
  }


function generateOutfitBasedOnTemperature(temperature) {
    const outfitBasedOnTemperature =["Camiseta blanca, jeans ajustados y zapatillas blancas",
    "Vestido negro, chaqueta de cuero y botines",
    "Blusa estampada, pantalones de tela y sandalias de tacón",
    "Suéter de punto, leggings y botas altas",
    "Camisa de botones, pantalones vaqueros y mocasines",
    "Blazer, camiseta básica y vaqueros",
    "Vestido camisero, cinturón y sandalias de tiras",
    "Top sin mangas, pantalones cortos y zapatillas deportivas",
    "Chaqueta de mezclilla, camiseta a rayas y botas de combate",
    "Conjunto de falda y crop top con sandalias de plataforma",
    "Blusa suelta, pantalones cortos y alpargatas",
    "Sudadera con capucha, leggings y zapatillas",
    "Camiseta gráfica, jeans desgastados y zapatillas de lona",
    "Vestido midi, chaqueta de punto y botas",
    "Camisa de manga larga, pantalones chinos y mocasines",
    "Top de encaje, falda plisada y tacones",
    "Suéter oversized, pantalones de yoga y zapatillas deportivas",
    "Blusa floral, pantalones de tiro alto y sandalias planas",
    "Chaqueta bomber, camiseta blanca y vaqueros rasgados",
    "Vestido estampado, chaqueta vaquera y zapatillas blancas"    
    ]
    const randomIndex = Math.floor(Math.random() * outfitBasedOnTemperature.length);
    const randomOutfitBasedOnTemperature= outfitBasedOnTemperature[randomIndex];
  
    return randomOutfitBasedOnTemperature;
  
}

function displayOutfit(temperature, description, outfit) {
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const outfitElement = document.getElementById('outfit');
    const outfitImageElement = document.getElementById('outfitImage');

    temperatureElement.textContent = 'Temperatura: ' + temperature + '°C';
    descriptionElement.textContent = 'Descripción: ' + description;
    outfitElement.textContent = 'Recomendación: ' + outfit;
  outfitImageElement.src = outfit.image;
  outfitImageElement.alt = 'Imagen del outfit';

    document.getElementById('outfitResult').style.display = 'block';
  }
  