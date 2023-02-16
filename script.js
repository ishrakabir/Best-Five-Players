let cnt = 0;
function addList(inputId) {
    const li = document.createElement('li');
    const str = cnt + ". " + document.getElementById(inputId).innerText;
    console.log(str);
    li.innerText = str;
    const listContainer = document.getElementById('list-container');
    listContainer.style.textAlign = "left"
    listContainer.style.marginLeft = "64px"
    listContainer.style.padding = "74px"
    listContainer.appendChild(li);
};
function changeSys(inputId) {
    document.getElementById(inputId).setAttribute('disabled', true);
    document.getElementById(inputId).style.backgroundColor = "grey"
};



document.getElementById('btn-item1').addEventListener('click', function () {
    cnt++;
    if (cnt <= 5) {
        addList('player-1');
        changeSys('btn-item1')
    }
});

document.getElementById('btn-item2').addEventListener('click', function () {
    cnt++;
    if (cnt <= 5) {
        addList('player-2');
        changeSys('btn-item2')
    }
});

document.getElementById('btn-item3').addEventListener('click', function () {
    cnt++;
    if (cnt <= 5) {
        addList('player-3');
        changeSys('btn-item3')
    }
});

document.getElementById('btn-item4').addEventListener('click', function () {
    cnt++;
    if (cnt <= 5) {
        addList('player-4');
        changeSys('btn-item4')
    }
});

document.getElementById('btn-item5').addEventListener('click', function () {
    cnt++;
    if (cnt <= 5) {
        addList('player-5');
        changeSys('btn-item5')
    }
});

document.getElementById('btn-item6').addEventListener('click', function () {
    cnt++;
    if (cnt <= 5) {
        addList('player-6');
        changeSys('btn-item6')
    }
});

document.getElementById('list-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
});
let newRate = 0;
document.getElementById('calculateBtn').addEventListener('click', function () {
    const playerRate = document.getElementById('playerRate').value;
    if (cnt == 0||playerRate=="") {
        alert("Please Select Player or Enter Player Price");
    }
    else {
        
        newRate = playerRate * cnt;
        document.getElementById('playerExpense').innerText = newRate;
    }

});
document.getElementById('calculateTotal').addEventListener('click', function () {
    const managerRate = document.getElementById('managerRate').value;
    const coachRate = document.getElementById('coachRate').value;
    if (managerRate == "" || coachRate == "")
        alert("Please Input price")
    else {
        const totalValue = parseInt(newRate) + parseInt(managerRate) + parseInt(coachRate);
        document.getElementById('totalExpense').innerText = totalValue
    }
});