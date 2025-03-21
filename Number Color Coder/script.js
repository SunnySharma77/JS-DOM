const container = document.getElementById('numberContainer');

    
    function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }


    for (let i = 1; i <= 100; i++) {
      const numberDiv = document.createElement('div');
      numberDiv.classList.add('number');
      numberDiv.textContent = i;

      if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red';
      } else if (i % 2 === 0) {
        numberDiv.style.backgroundColor = 'green';
      } else {
        numberDiv.style.backgroundColor = 'yellow';
        numberDiv.style.color = '#000'; 
      }

      container.appendChild(numberDiv);
    }
