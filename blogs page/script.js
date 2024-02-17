const API_KEY = "bb5a52ac87c94793bcec745fad953467";
        const url = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=" + API_KEY;

        window.addEventListener("load", () => fetchNews());

        async function fetchNews() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                bindData(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        }

        function bindData(articles) {
            const cardsContainer = document.getElementById("cards-container");
            const newsCardTemplate = document.getElementById("template-news-card");

            cardsContainer.innerHTML = "";

            articles.forEach((article) => {
                if (!article.urlToImage) return;
                const cardClone = newsCardTemplate.content.cloneNode(true);
                fillDataInCard(cardClone, article);
                cardsContainer.appendChild(cardClone);
            });
        }

        function fillDataInCard(cardClone, article) {
            const newsImg = cardClone.querySelector("#news-img");
            const newsTitle = cardClone.querySelector("#news-title");
            const newsSource = cardClone.querySelector("#news-source");
            const newsDesc = cardClone.querySelector("#news-desc");

            newsImg.src = article.urlToImage;
            newsTitle.textContent = article.title;
            newsDesc.textContent = article.description;

            const date = new Date(article.publishedAt).toLocaleString("en-US", {
                timeZone: "Asia/Jakarta",
            });

            newsSource.textContent = `${article.source.name} · ${date}`;

            cardClone.firstElementChild.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });
        }