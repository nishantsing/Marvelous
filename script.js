const PUBLIC_KEY="b8ac975be0765c9e5b197e765a6bd72c";
const tbody = document.getElementById("pote");
const loading = document.getElementById("loading");
var limit = 10
var offset = 0 
var total;
var name;
var nameStartsWith;


var url =
  `http://gateway.marvel.com:80/v1/public/characters?&apikey=${PUBLIC_KEY}&limit=${limit}`;
  
$( document ).ready(function() {
  loading.style.display = "none";
  getData(url)
});

$('.scroll-top').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 100);
  return false;
});

$(window).scroll(function() {                    
  if($(window).scrollTop() > $(document).height() - $(window).height()-0.5) {
    name = document.getElementById('name').value;
    nameStartsWith = document.getElementById('nameStartsWith').value;
    var lurl;
    // console.log(name, nameStartsWith);
	offset+=limit;

    if(offset<total){
      if(name === '' && nameStartsWith !==''){      
        // offset+=limit;
        lurl = `${url}&nameStartsWith=${nameStartsWith}&offset=${offset}`; 
      }else if(name !== '' && nameStartsWith=== ''){
        // offset+=limit;
        lurl = `${url}&name=${name}&offset=${offset}`;
      }else if(name !== '' && nameStartsWith !== ''){
        // offset+=limit;
        lurl = `${url}&name=${name}&nameStartsWith=${nameStartsWith}&offset=${offset}`;
      }else{
        // offset+=limit;
        lurl = `${url}&offset=${offset}`;
      }
      
      getData(lurl, true);  
    }                       
  }
});


function  func() {
  name = document.getElementById('name').value;
  nameStartsWith = document.getElementById('nameStartsWith').value;
  var lurl;
  // console.log(name,nameStartsWith);
  // console.log(window.url);
  offset=0;

  if(name === '' && nameStartsWith !==''){
    lurl = `${url}&nameStartsWith=${nameStartsWith}`;
  }else if(name !== '' && nameStartsWith=== ''){
    lurl = `${url}&name=${name}`;
  }else if(name !== '' && nameStartsWith !== ''){
    lurl = `${url}&name=${name}&nameStartsWith=${nameStartsWith}`;
  }else{
    lurl = window.url;
  }

  getData(lurl);
  return false;
}

function getoff(){
  var lurl;
  
  offset = parseInt(document.getElementById('offnum').value);
  // console.log(offnum);
  // offset = offnum;
  // console.log(offset)
  lurl = `${url}&offset=${offset}`;
  
  getData(lurl);
  return false;
}


async function getData(url, x=false) {
  loading.style.display = "block";
  if(!x){
    tbody.innerHTML = ``;
  }  
  var url = url  
  const res = await fetch(url);
  const data = await res.json();
  loading.style.display = "none";
  console.log(data.data);
  const op = data.data.results;
  total = data.data.total;
  op.forEach((curr_op) => {
    const id = curr_op.id;
    const name = curr_op.name;
    const img = curr_op.thumbnail.path
    const desc = curr_op.description
    const ext = curr_op.thumbnail.extension
    var sum=""

    const events = curr_op.events.items
    const stories = curr_op.stories.items
    const series = curr_op.series.items
    const comics = curr_op.comics.items
    
    // var li = document.getElementById("heroes");
    // li.innerHTML += `<li>${id} - ${name}</li>`;
    if(desc===''){
        sum ='NA'
    }
    var comicnames = []
    comics.forEach((item)=>{
      comicnames.push(item.name)
    })

    var seriesnames = [];
    series.forEach((item) => {
      seriesnames.push(item.name);
    });
    var eventsnames = [];
    events.forEach((item) => {
      eventsnames.push(item.name);
    });
    var storiesnames = [];
    stories.forEach((item) => {
      storiesnames.push(item.name);
    });
    
    // const tr = document.createElement('tr')
    tbody.innerHTML += `
    <tr>
      <td><b>${id}</b></td>
      <td><a href="https://www.google.com/search?q=${name} marvel character" target="_blank" style="color:black"><b>${name}</b></a><br>
        <details><summary>${sum}</summary><p>${desc}</p></details>
        <details><summary>Related-</summary>
          &nbsp;<details><summary>Comic</summary><p>${comicnames}</p></details><hr>   
          &nbsp;<details><summary>Series</summary><p>${seriesnames}</p></details><hr>   
          &nbsp;<details><summary>Events</summary><p>${eventsnames}</p></details><hr>   
          &nbsp;<details><summary>Stories</summary><p>${storiesnames}</p></details>   
        </details>
        </td>
      <td><img src="${img}.${ext}" width="100 px" height="100" alt="NA" align="right"></td>
    </tr>`
    
    console.log(id, name);
  });
}

















// / const url = 'http://gateway.marvel.com:80/v1/public/characters'

// $.getJSON(url, {
//         ts: ts,
//         apikey: PUBLIC_KEY,
//         hash: hash,
//         limit:30
//     })
//         .done(function (data) {
//             // sort of a long dump you will need to sort through
//             console.log(data.data.results);
//             const op = data.data.results
//             op.forEach(curr_op => {
//                 const id = curr_op.id
//                 const name = curr_op.name

//                 //CREATING A NEW LI WITH DATA
//                 // var node = document.createElement('li')
//                 // var textnode = document.createTextNode(`${id} - ${name}`)
//                 // node.appendChild(textnode)
//                 // document.getElementById('heroes').appendChild(node)

//                 //CREATING NEW INNER HTML
//                 var li = document.getElementById('heroes')
//                 li.innerHTML += `<li>${id} - ${name}</li>`

//                 console.log(id,name);
//             });

//         })
//         .fail(function (err) {
//             // the error codes are listed on the dev site
//             console.log(err);
//         });


