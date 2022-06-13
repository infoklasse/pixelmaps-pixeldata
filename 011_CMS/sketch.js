var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('content.csv', 'csv', 'header');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();
  // textSize(10);
  showData();
}

function showData(){
  var count = table.getRowCount();
      
  for (var i=0; i<count; i++) {

    //GET THE CONTENT FROM THE »CONTENT MANAGEMENT SYSTEM» (CSV)
      var headlineContent = table.getString(i,0);
      var subheadlineContent = table.getString(i,1);
      var imageContent = table.getString(i,2);
      var textContent = table.getString(i,3);

    //CREATE THE HTML ELEMENTS DYNAMICALLY AND ADD CONTENT INSIDE IT
    var maindiv = document.createElement('div');
    maindiv.classList.add('maincontainer');
    var subdiv = document.createElement('div');
    subdiv.classList.add('subcontainer');

    var headline = document.createElement('h1');
    headline.innerHTML = headlineContent

    var subheadline = document.createElement('h3');
    subheadline.innerHTML = subheadlineContent

    var image = document.createElement('img');
    image.src = imageContent + ".jpg"

    var text = document.createElement('p');
    text.innerHTML = textContent

    subdiv.appendChild(headline);
    subdiv.appendChild(subheadline);
    subdiv.appendChild(image);
    subdiv.appendChild(text);

    maindiv.appendChild(subdiv);
    document.getElementById('website').appendChild(maindiv);

     
  }
}