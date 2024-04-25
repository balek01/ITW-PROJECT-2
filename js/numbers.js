async function numbers() {

  let percent = 0;
  let counters = document.querySelectorAll('.counter');
  const target_numbers = Array.from(document.querySelectorAll('.counter')).map(element => parseInt(element.innerHTML));
  //reset counters 
  counters.forEach((counter) => {
    counter.innerHTML = '';
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));
 
  counters.forEach((counter, index) => {

    let i = setInterval(function () {
      counter.innerHTML = Math.floor(
        percent * parseInt(target_numbers[index])
      );
        percent += 0.01;
        if (percent >= 1.01) {
          clearInterval(i);
        }
    }, 40);
  });
}
//listening for custom event triggered by scrollspy.js
document.addEventListener('startNumbers', numbers);
