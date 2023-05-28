const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
  },
};
const apiKey = "9167dae881545d7d1ebf42ac1186d6ae";
const apiKey2 = "bd6c2317d02803fb4cf4fa5deaff149c";

// Trending News
function displayTrendNews() {
  const apiKey = "bd6c2317d02803fb4cf4fa5deaff149c";
  category = "general";
  country = "us";
  url =
    "https://gnews.io/api/v4/top-headlines?category=" +
    category +
    "&lang=en&country=" +
    country +
    "&max=5&apikey=" +
    apiKey;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      trendarticles = data.articles;
      // console.log(trendarticles);
      // console.log(trendarticles[2].title);
      // articles.forEach((trendNews) => {
      const div = document.createElement("div");
      div.classList.add("row");
      div.innerHTML = `
        <div class="col-md-6 tn-left">
            <div class="tn-img">
              <img src="${trendarticles[0].image}" height="485"/>
              <div class="tn-content">
                <div class="tn-content-inner">
                  <a class="tn-date" href="${trendarticles[0].url}"
                    ><i class="far fa-clock"></i>${trendarticles[0].publishedAt}</a
                  >
                  <a class="tn-title" href=""
                    >${trendarticles[0].title}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 tn-right">
            <div class="row">
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[1].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" href="${trendarticles[1].url}"
                        ><i class="far fa-clock"></i>${trendarticles[1].publishedAt}</a
                      >
                      <a class="tn-title" href=""
                        >${trendarticles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[2].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" href="${trendarticles[2].url}"
                        ><i class="far fa-clock"></i>${trendarticles[2].publishedAt}</a
                      >
                      <a class="tn-title" href=""
                        >${trendarticles[2].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[3].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" href="${trendarticles[3].url}"
                        ><i class="far fa-clock"></i>${trendarticles[3].publishedAt}</a
                      >
                      <a class="tn-title" href=""
                        >${trendarticles[3].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="tn-img">
                  <img src="${trendarticles[4].image}" height="230"/>
                  <div class="tn-content">
                    <div class="tn-content-inner">
                      <a class="tn-date" href="${trendarticles[4].url}"
                        ><i class="far fa-clock"></i>${trendarticles[4].publishedAt}</a
                      >
                      <a class="tn-title" href=""
                        >${trendarticles[4].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             `;
      document.querySelector("#lefttrend").appendChild(div);
      // });
    });
}

function catetech() {
  const max = "8";
  lang = "en";
  category = "technology";
  country = "ph";
  url =
    "https://gnews.io/api/v4/top-headlines?category=" +
    category +
    "&lang=" +
    lang +
    "&country=" +
    country +
    "&max=" +
    max +
    "&apikey=" +
    apiKey2;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      techarticles = data.articles;
      techarticles = globaltechnews;
      console.log(globaltechnews);
    });
}

async function category1(url1, url2) {
  try {
    const url1 =
      "https://gnews.io/api/v4/top-headlines?category=business&country=ph&lang=en&country=ph&max=10&apikey=" +
      apiKey;
    const url2 =
      "https://gnews.io/api/v4/top-headlines?category=technology&country=ph&lang=en&country=ph&max=10&apikey=" +
      apiKey;

    const busresponse = await fetch(url1);
    const busdata = await busresponse.json();
    const techresponse = await fetch(url2);
    const techdata = await techresponse.json();
    // console.log(busdata.articles[0].image);
    // console.log(techdata);

    const div = document.createElement("div");
    div.classList = "cat-news";
    div.innerHTML = `

    <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <h2><i class="fas fa-soccer-ball"></i>Business</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${busdata.articles[0].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${busdata.articles[0].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[0].publishedAt}</a
                      >
                      <a class="cn-title" href="${busdata.articles[0].image}"
                        >${busdata.articles[0].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${busdata.articles[1].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${busdata.articles[1].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[1].publishedAt}</a
                      >
                      <a class="cn-title" href="${busdata.articles[1].url}"
                        >${busdata.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${busdata.articles[2].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${busdata.articles[2].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[2].publishedAt}</a
                      >
                      <a class="cn-title" href="${busdata.articles[2].url}">${busdata.articles[2].title}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div id="busscate3" class="cn-img">
                  <img src="${busdata.articles[3].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${busdata.articles[3].url}"
                        ><i class="far fa-clock"></i>${busdata.articles[3].publishedAt}</a
                      >
                      <a class="cn-title" href="${busdata.articles[3].url}">${busdata.articles[3].title}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h2>Technology</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[0].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${techdata.articles[0].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[0].publishedAt}</a
                      >
                      <a class="cn-title" href="${techdata.articles[0].url}"
                        >${techdata.articles[0].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[1].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${techdata.articles[1].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[1].publishedAt}</a
                      >
                      <a class="cn-title" href="${techdata.articles[1].url}"
                        >${techdata.articles[1].title}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[2].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${techdata.articles[2].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[2].publishedAt}</a
                      >
                      <a class="cn-title" href="${techdata.articles[2].url}">${techdata.articles[2].title}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="cn-img">
                  <img src="${techdata.articles[3].image}" />
                  <div class="cn-content">
                    <div class="cn-content-inner">
                      <a class="cn-date" href="${techdata.articles[3].url}"
                        ><i class="far fa-clock"></i>${techdata.articles[3].publishedAt}</a
                      >
                      <a class="cn-title" href="${techdata.articles[3].url}">${techdata.articles[3].title}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
    document.querySelector("#category1").appendChild(div);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      // displayTrendNews();
      // category1(); uncomment this when run

      break;
    case "/shows.html":
      //   displayPopularShows();
      break;
    case "/movie-details.html":
      //   displayMovieDetails();
      break;
    case "/tv-details.html":
      //   displayShowDetails();
      break;
    case "/search.html":
      //   search();
      break;
  }

  //   highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
