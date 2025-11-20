// බොත්තම සහ heading එක HTML වලින් තෝරා ගැනීම
const changeButton = document.getElementById('changeButton');
const greetingElement = document.getElementById('greeting');

// බොත්තම එබූ විට ක්‍රියාත්මක වන ශ්‍රිතය
function changeMessage() {
    // greetingElement හි අන්තර්ගතය වෙනස් කිරීම
    greetingElement.textContent = 'Awesome! The message has been changed by JavaScript!';
    
    // අවශ්‍ය නම්, heading එකට නව CSS style එකක් එකතු කළ හැක
    greetingElement.style.color = '#dc3545'; // වර්ණය රතු පාටට වෙනස් කරයි
}

// බොත්තමට 'click' event එක එක් කිරීම
changeButton.addEventListener('click', changeMessage);

console.log('JavaScript is running and ready!');