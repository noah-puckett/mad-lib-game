
function displayMadLib() {
   
    var noun1Input = document.getElementById('noun-1');
    var noun2Input = document.getElementById('noun-2');
    var adj1Input = document.getElementById('adjective-1');
    //grab the inputs store them in a variable
    var noun1 = noun1Input.value;
    var noun2 = noun2Input.value;
    var adj1 = adj1Input.value;
    //take those inputs and grab their VALUES

    var madLibTemplate = 'the ' + noun1 + ' hosted the worst party that the ' + noun2 + ' thought was SO ' + adj1 + '.'; 

    var message = document.getElementById('madlib-message');
    //concat into msg
   message.textContent = madLibTemplate;
}
