window.onload=myfunction;

function myfunction(){
  let buttn = document.getElementById("btn");

  searchbtn.addEventListener('click', async function(element) {
    element.preventDefault();

    var hname = document.getElementsByClassName("name")[0];
    var search = document.getElementById("superhero").value;
    var bio = document.getElementsByClassName("biography")[0];
    var alias = document.getElementsByClassName("alias")[0];
    var msg = document.getElementsByClassName("message")[0];

    if (heroform === ''){
      fetch("superheroes.php")

      .then(response => {
        if (response.ok) {
          return response.text()
      } else {
          return Promise.reject('Something went wrong!')
      }
  })

      .then(data=> {
        msg.innerHTML = data;
        hname.innerHTML = '' ;
        alias.innerHTML = '';
        bio.innerHTML = '';
      })

      .catch(error => console.log('There was an error: ' + error));
    }
    else{
      fetch("superheroes.php",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(heroform)
      })

      .then(response => {
        if (response.ok) {
          return response.text()
      } else {
          return Promise.reject('something went wrong!')
      }
      })

      .then(data => {
        var hero = JSON.parse(data);
        if (typeof(hero) === "string"){
            bio.innerHTML = data ;
        } else if (typeof(hero) === "object"){
            var heroname = hero["name"];
            var aliasname = `a.k.a ${hero["alias"]}`;
            var biography = hero["biography"];
            msg.innerHTML = '';
            name.innerHTML = hname ;
            alias.innerHTML = aname;
            bio.innerHTML = biography;
        }
      });
    }
      });
    }