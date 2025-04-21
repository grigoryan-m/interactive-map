document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="pages/defaultmap.html">Карта</a></li>
                    <li><a href="pages/bestiary.html">Бестиарий</a></li>
                    <li><a href="pages/trees.html">Классы</a></li>
                    <li><a href="pages/races.html">Расы</a></li>
                    <li><a href="pages/currencies.html">Валюты</a></li>
                    <li><a href="pages/backgrounds.html">Предыстории</a></li>
                    <li><a href="pages/secrets.html">Секреты</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});