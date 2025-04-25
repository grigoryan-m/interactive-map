document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="/interactive-map/pages/defaultmap.html">Карта</a></li>
                    <li><a href="/interactive-map/pages/bestiary.html">Бестиарий</a></li>
                    <li><a href="/interactive-map/pages/trees.html">Классы</a></li>
                    <li><a href="/interactive-map/pages/races.html">Расы</a></li>
                    <li><a href="/interactive-map/pages/currencies.html">Валюты</a></li>
                    <li><a href="/interactive-map/pages/secrets.html">Секреты</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});