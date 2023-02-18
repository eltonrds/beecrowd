const getProblemNumberFromLocalStorage = () => localStorage.getItem('problem') ?? '1000';

const setProblemNumberInLocalStorage = (problemNumber) => {
  try {
    localStorage.setItem('problem', problemNumber);
  } catch (error) {
    console.error('Failed to set problem number in localStorage', error);
  }
};

const solveProblem = async () =>  {
  try {
    const input = document.getElementById('input').value.replace(/ +|\r|\n/g,' ').split(' ');

    const problemNumber = document.getElementById('problem').value;
    setProblemNumberInLocalStorage(problemNumber);

    const { problem } = await import(`./problems/${problemNumber}.js`);
    problem(input);
  } catch (error) {
    console.error('Failed to solve problem', error);
    alert('Failed to solve problem');
  }
};

document.getElementById('problem').value = getProblemNumberFromLocalStorage();

document.getElementById('solve').addEventListener('click', solveProblem);
