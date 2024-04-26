const blokElement = document.querySelector('.blocks');

for(let i = 0; i < arrCredits.length; i++) {
    blokElement.insertAdjacentHTML(
        'beforeend',
        `<div class="card ${arrCredits[i].type}">
            <a href="blank.html"><img src="${arrCredits[i].image}" alt=""></a>
            <div class="card__content">
                <div class="card__text">
                    <a href="blank.html"><p class="card__name">${arrCredits[i].name}</p></a>
                    <span class="card__discription">
                    ${arrCredits[i].description}
                    </span>
                </div>
                <div class="card-info">
                    <div class="card-info__item">
                        <p>${arrCredits[i].especially[0]}</p>
                        <span>${arrCredits[i].especially[1]}</span>
                    </div>
                    <div class="card-info__item">
                        <p>${arrCredits[i].sum[0]}</p>
                        <span>${arrCredits[i].sum[1]}</span>
                    </div>
                    <div class="card-info__item">
                        <p>${arrCredits[i].date[0]}</p>
                        <span>${arrCredits[i].date[1]}</span>
                    </div>
                </div> 
                <div class="card__bot">
                    ${arrCredits[i].timeDelivery ? 
                        `<div class="delivery">
                            <img src="img/red.svg" alt="">
                            <p>Закажите сейчас — бесплатно доставим завтра</p>
                        </div>`
                        :
                        ""
                    }
                    <a href="blank.html">
                        <div class="card__button">
                            <p>Оформить заявку</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>`
    )
}
