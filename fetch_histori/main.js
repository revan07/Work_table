

var histo =
    {
        "historia": {
            "titulo": `<p style="text-align: center;">el origen de linux</p>`,
            "lore": `<p style="text-align: center;">Linux® es un sistema operativo (SO) open source.<br>
             En 1991, Linus Torvalds lo diseñó y creó a modo de pasatiempo.<br> 
            Mientras estaba en la universidad, intentó crear una versión open source, alternativa y gratuita del sistema operativo MINIX, que a su vez se basaba en los principios y el diseño de Unix.</p>`
        },
    
        "historia2": {
            "titulo2": `pao`,
            "lore2": `pao`,
    
    
        }
    };


function tracer() {
    
    document.getElementById('textBox').innerHTML = `
        <div  class="box">
        <h1>${histo.historia.titulo}</h1>
        <p>${histo.historia.lore}</p><br>
    
        <p>${histo.historia2.titulo2}</p>
        <p>${histo.historia2.lore2}</p>
        </div>
        `

};
