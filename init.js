let cellContentDiv = document.querySelector(".cells-content");

function initCells(){
    let cellContent = "<div class = 'top-left-cell'></div>";
    // top row
    cellContent+="<div class = 'top-row'>"
    for(let i = 0; i<26; i++){
        cellContent+=`<div class='top-row-cell'>${String.fromCharCode(65+i)}</div>`;
    }
    cellContent+="</div>";

    // left col
    cellContent+="<div class='left-col'>"
    for(let i=0;i<100;i++){
        cellContent+=`<div class='left-col-cell'>${i+1}</div>`
    }
    cellContent+="</div>";

    // cell divs
    cellContent+="<div class='cells'>";
    for(let i = 0; i<100; i++){
        cellContent+="<div class = 'row'>";
        // columns
        for(let j = 0;j<26; j++){
            cellContent+=`<div class = 'cell' rowid='${i}' colid='${j}' contenteditable></div>`  //custom attributes
        }
        cellContent+="</div>"
    }
    cellContent+="</div>"
    cellContentDiv.innerHTML = cellContent;
}

initCells();

let db;
function initDb(){
    db = [];
    for(let i = 0; i<100; i++){
        let row = [];
        for(let j = 0; j<26; j++){
            let name = String.fromCharCode(65+j)+(i+1)+"";
            let cellObject = {
                name:name,
                value:"",
                formula:""
            }
            row.push(cellObject);
        }
        db.push(row);
    }
}
initDb();
// console.log(db);

