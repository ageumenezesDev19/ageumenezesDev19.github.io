const myProjectsNumbers = document.querySelectorAll('.projects-container').length;
const pOfTheNumbers = document.querySelector('#numbers-of-projects p');

const countProjects = (allInsideProjects, outProjectsNumb) => {
    const textResult  = `${allInsideProjects + outProjectsNumb} Projects`;
    return textResult;
}

pOfTheNumbers.innerHTML = countProjects(myProjectsNumbers, 1);
