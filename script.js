let topRow = document.querySelector(".top-row");
let topCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellContentDiv.addEventListener("scroll",function(e){
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromTop+"px";
    topCol.style.left = scrollFromLeft+"px";
    topLeftCell.style.top = scrollFromTop+"px";
    topLeftCell.style.left = scrollFromLeft+"px";
})

for(let i = 0; i<allCells.length; i++){
    allCells[i].addEventListener("click",function(e){
        // rowId = Number(e.target.getAttribute("rowid"));
        // colId = Number(e.target.getAttribute("colid"));
        let{rowId,colId} = getRowIdColIdFromElement(e.target);
        let address = String.fromCharCode(65+Number(colId))+(Number(rowId)+1)+"";
        // console.log(address);
        let cellObject = db[rowId][colId];
        addressInput.value = address;
        formulaInput.value = cellObject.formula;
    })
    allCells[i].addEventListener("blur",function(e){
        lastSelectedCell = e.target;
        let cellValue = e.target.textContent;
        // let rowId = e.target.getAttribute("rowid");
        // let colId = e.target.getAttribute("colid");
        let{rowId,colId} = getRowIdColIdFromElement(e.target);
        let cellObject = db[rowId][colId];
        if(cellObject.value == cellObject){
            return;
        } 
        cellObject.value = cellValue;
        console.log("After UPdate",cellObject);
    })
    
}


formulaInput.addEventListener("blur",function(e){
    let formula = e.target.value;
    if(formula){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        let computedValue = solveFormula(formula);
        // update db
        cellObject.value = computedValue;
        cellObject.formula = formula;
        // update ui
        lastSelectedCell.textContent = computedValue;
    }
})