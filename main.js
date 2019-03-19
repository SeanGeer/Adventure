
var person = prompt('Please enter your name to get started');
var brewing = confirm(`Hey there ${person}, will you be brewing with us today?`);
var phase = 1;

if (brewing === true){
  var recipeType = confirm('Will you be brewing an all-grain recipe?');
    if (recipeType === true) {
      alert(`Ok ${person}, lets find you an all-grain recipe`);
    } else {
        alert(`Ok ${person}, lets find you an extract recipe`);
    }
} else if (brewing === false) {
  alert('No worries, feel free to hangout and learn from the others!');
}

if (brewing === true && recipeType === true) {
  alert(`CONGRATULATIONS ${person} Phase ${phase} is COMPLETE, your recipe is set and its time to start mashing!!`);
  alert('Bring your strike water to 160 degrees and add your grain');
  alert('Dont forget to start your 60 minute timer!')
  phase += 1;
} else if (brewing === true && recipeType === false){
  alert(`CONGRATULATIONS ${person} Phase ${phase} is COMPLETE and its time to move on!`);
  alert('Bring your strike water to 212 degrees and wait to begin your boil');
  phase += 1;
}

if (phase = 2) {
  phase+=1;
  alert(`CONGRATULATIONS ${person}, you reached phase ${phase} and its time to start your boil!`);
}

if (phase = 3) {
  var hopFlavor = prompt('Would you like your recipe to have a heavy, medium, or low hop flavor?');
  if (hopFlavor ='high'){
    alert('Begin adding hops with 60 minutes left in the boil');
    alert('Second addition will be at 45 minutes left in the boil');
    alert('And the third addition will be with 30 minutes remaining in the boil');
    phase+=1;
  } else if (hopFlavor ='medium') {
    alert('Begin adding hops with 45 minutes left in the boil');
    alert('Second addition will be at 30 minutes left in the boil');
    alert('And the third addition will be with 15 minutes remaining in the boil');
    phase+=1;
  } else if (hopFlavor ='low') {
    alert('Begin adding hops with 30 minutes left in the boil');
    alert('Second addition will be at 15 minutes left in the boil');
    alert('And the third addition will be with 5 minutes remaining in the boil');
    phase+=1;
  }
}

if (phase = 4) {
alert(`${person} you have conquered phase ${phase}, your quest to brew the perfect beer is now complete!`);
}

























