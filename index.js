
document.addEventListener("dblclick", () =>{
    document.documentElement.requestFullscreen().catch((e) =>{
        console.log(e)
    });
})

document.addEventListener('DOMContentLoaded', function() {
  const newsLink = document.getElementById('news-link');
  newsLink.addEventListener('click', (event) =>{
      event.preventDefault();
      window.location.reload();
  });
});


function showEntertainmentNews() {
    document.getElementById("newssection").style.display = "none";
    document.getElementById("entertainmentsection").style.display = "block";
    document.getElementById("sportssection").style.display = "none";
    document.getElementById("lifesection").style.display = "none";
    document.getElementById("techsection").style.display = "none";
  }


function showSportsNews() {
    document.getElementById("newssection").style.display = "none";
    document.getElementById("entertainmentsection").style.display = "none";
    document.getElementById("sportssection").style.display = "block";
    document.getElementById("lifesection").style.display = "none";
    document.getElementById("techsection").style.display = "none";
  }


function showLifeNews() {
    document.getElementById("newssection").style.display = "none";
    document.getElementById("entertainmentsection").style.display = "none";
    document.getElementById("sportssection").style.display = "none";
    document.getElementById("lifesection").style.display = "block";
    document.getElementById("techsection").style.display = "none";
  }


function showTechNews() {
    document.getElementById("newssection").style.display = "none";
    document.getElementById("entertainmentsection").style.display = "none";
    document.getElementById("sportssection").style.display = "none";
    document.getElementById("lifesection").style.display = "none";
    document.getElementById("techsection").style.display = "block";
  }


  document.querySelector(".navbar-nav .nav-link[href='#entertainmentsection']").addEventListener("click", function(event) {
    event.preventDefault();
    showEntertainmentNews();
  });


  document.querySelector(".navbar-nav .nav-link[href='#sportssection']").addEventListener("click", function(event) {
    event.preventDefault();
    showSportsNews();
  });


  document.querySelector(".navbar-nav .nav-link[href='#lifesection']").addEventListener("click", function(event) {
    event.preventDefault();
    showLifeNews();
  });


  document.querySelector(".navbar-nav .nav-link[href='#techsection']").addEventListener("click", function(event) {
    event.preventDefault();
    showTechNews();
  });


function handleReadMoreClick() {
    alert("Warning: This Website does not support redirects,maybe try searching the news article you want to read on google!Sorry (╥﹏╥)");
  }


  const readMoreButtons = document.querySelectorAll(".btn-primary");
  readMoreButtons.forEach(button => {
    button.addEventListener("mouseover", handleReadMoreClick);
  });

document.addEventListener('DOMContentLoaded', async (event) => {
  const newsSource = await showNewsSource();
  addNewsSource(newsSource);
  const sportsSource= await showSportsSource();
  addSportsSource(sportsSource);
  const entertainmentSource= await showEntertainmentSource();
  addEntertainmentSource(entertainmentSource);
});

function addNewsSource(source) {
    const sourceElement = document.getElementsByTagName('h6')[0];
    sourceElement.textContent = `Source: ${source}`;
}

function showNewsSource() {
    return fetch('https://independentproject.onrender.com/news', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.length > 0) {
              const source = data[0].source;
              return source;
          } else {
              return 'Unknown';
          }
        })
        .catch(error => {
            console.error('Error fetching source:', error);
            return 'Unknown';
        });
}

function addEntertainmentSource(source) {
  const sourceElement = document.getElementsByTagName('h6')[1];
  sourceElement.textContent = `Source: ${source}`;
}

function showEntertainmentSource() {
  return fetch('https://independentproject.onrender.com/entertainment', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
            const source = data[0].source;
            return source;
        } else {
            return 'Unknown';
        }
      })
      .catch(error => {
          console.error('Error fetching source:', error);
          return 'Unknown';
      });
}

function addSportsSource(source) {
  const sourceElement = document.getElementsByTagName('h6')[2];
  sourceElement.textContent = `Source: ${source}`;
}

function showSportsSource() {
  return fetch('https://independentproject.onrender.com/sports', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
            const source = data[0].source;
            return source;
        } else {
            return 'Unknown';
        }
      })
      .catch(error => {
          console.error('Error fetching source:', error);
          return 'Unknown';
      });
}
