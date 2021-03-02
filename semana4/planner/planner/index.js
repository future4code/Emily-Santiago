function tarefaDaSemana() {

    const planner = document.getElementById("tarefa")
    //console.log(planner)

    const selectDay = document.getElementById("dias-semana")
    //console.log(selectDay.value)

    const list = document.getElementById(selectDay.value)
    //console.log(list)

    if (planner !== "") {
        list.innerHTML += `<p>${planner.value}</p>`
        planner.value = ""
    }
}