var meds = [];


function addMed(){
    event.preventDefault();
    let newMed = {
        "medicamento": document.getElementById("med").value,
        "quantidade": document.getElementById("quant").value,
        "tipo": document.getElementById("tipomed").value,
    }
    resetForm();
    meds.push(newMed);
    renderTable();

}

function removeMed(index){
    meds.splice(index, 1);
    renderTable();
}

function renderTable(){
    let table = document.getElementById("tabela");
    table.innerHTML = `<th>ID</th>
                    <th>Medicamento</th>
                    <th>Quantidade</th>
                    <th>Classe de Medicamento</th>
                    <th>Remover</th>`;

    for (let i = 0; i < meds.length; i++){


        table.innerHTML = table.innerHTML  +  `<tr>


        <td>${i}</td>
        <td>${meds[i].medicamento}/td>
        <td>${meds[i].quantidade}</td>
        <td>${meds[i].tipo}</td>
        <td><img id="remover" src="trash.png" width="25px" height="25px"  onclick="removeMed(${i})"></td></tr>
        `
    }
}

function resetForm(){
    document.getElementById('med')
    document.getElementById('quant')
    document.getElementById('tipomed')
}
renderTable();