var positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

var names = [];
var team = new Object;
team.workers = [];

var getNames = function() {

    for (var i = 0; i < positions.length; i++) {
        var name = prompt('Введите имя для - ' + positions[i]);
        names[i] = name;
    }
}

var createTeam = function() {

    for (i = 0; i < positions.length; i++) {
        team.workers[i] = new Object();
        team.workers[i].name = names[i];
        team.workers[i].position = positions[i];
    }
}

var setSalary = function() {

    for (i = 0; i < positions.length; i++) {

        var randnumber = Math.random();

        if (team.workers[i].position.includes('Junior') == true) {
            team.workers[i].salary = Math.round(500 + 500 * randnumber);
        } else if (team.workers[i].position.includes('Middle') == true) {
            team.workers[i].salary = Math.round(1500 + 500 * randnumber);
        } else if (team.workers[i].position.includes('Senior') == true) {
            team.workers[i].salary = Math.round(2500 + 500 * randnumber);
        } else {
            team.workers[i].salary = Math.round(4500 + 500 * randnumber);
        }
    }

}
console.log('Работа getNames,createTeam,setSalary,итд.:' + '\n' + '\n');
getNames();
createTeam();
setSalary();

for (i = 0; i < positions.length; i++) {
    team.workers[i].tellAboutYourSelf = function() {
        console.log('Меня зовут ' + team.workers[i].name + ' и я - ' + team.workers[i].position + '. Я зарабатываю ' + team.workers[i].salary + '$.')
    }
    team.workers[i].tellAboutYourSelf();
}

team.showTeam = function() {
    for (var elem in team.workers) {
        if (typeof team.workers[elem] !== 'function') {
            console.log(team.workers[elem].name + ' - ' + team.workers[elem].position + '. Зарплата - ' + team.workers[elem].salary + '$.');
        }
    }
}
console.log('\n' + 'Работа team.showTeam:' + '\n');
team.showTeam();