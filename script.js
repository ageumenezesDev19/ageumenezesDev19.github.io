const countProjects = () => {
    const myProjectsNumbers = document.querySelectorAll('.projects-container').length;
    const pOfTheNumbers = document.querySelector('#numbers-of-projects p');
    const outProjectsNumb = 1;
    pOfTheNumbers.innerText = `${myProjectsNumbers + outProjectsNumb} Projects`;
}

countProjects();
