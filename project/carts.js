function up(number){
    let carts_input = document.getElementById("carts_input")
    let carts_input_value = Number(carts_input.value)
    carts_input_value += number
    document.getElementById("carts_input").value = carts_input_value
}