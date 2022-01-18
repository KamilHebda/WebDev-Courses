//Parametry
    let activeElement = 0;
    const timeChange = 4000;

//pobieramy 4 elementy, na których pracujemy
    const colorImgHtml = document.querySelector(
        '.color');
    const grayImgHtml = document.querySelector('.gray');
    const h1Html = document.querySelector('.member h1');
    const h2Html = document.querySelector('.member h2');


//informacje w tablicach o elementach podmienianych
    const colorImages = ['img/s1.png', 'img/s2.png',
        'img/s3.png'
    ];
    const grayImages = ['img/s1a.png', 'img/s2a.png',
        'img/s3a.png'
    ];
    const names = ['Anna Baugart', 'Marcin Kania',
        'Andrzej Lambert'
    ];
    const profesion = ['Programistka JS',
        'Front-End Developer', 'QA'
    ];

    function changeElement() {
        activeElement++;

        if (activeElement == colorImages.length) {
            activeElement = 0;
        }

        colorImgHtml.src = colorImages[activeElement];
        grayImgHtml.src = grayImages[activeElement];
        h1Html.textContent = names[activeElement];
        h2Html.textContent = profesion[activeElement];
        }
    
    setInterval(changeElement, timeChange)