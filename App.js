import('inquirer').then(({ default: inquirer }) => {
    import('chalk').then(({ default: chalk }) => {
      import('lodash').then(({ default: _ }) => {
  
        let tasks = ['Atividades de Estatistica', 'Teste de Usabilidade', 'Estudar Mainframes'];
  
        function showTasks() {
          console.log(chalk.bold.green('Lista de Tarefas:'));
          console.log(_.join(tasks, '\n'));
        }
  
        function addTask() {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'newTask',
                message: 'Adicione uma nova tarefa:',
              },
            ])
            .then((answers) => {
              tasks.push(answers.newTask);
              console.log(chalk.green('Tarefa adicionada com sucesso!\n'));
              showTasks();
              startApp();
            });
        }
  
        function startApp() {
          showTasks();
  
          inquirer
            .prompt([
              {
                type: 'list',
                name: 'action',
                message: 'O que você gostaria de fazer?',
                choices: ['Adicionar Tarefa', 'Sair'],
              },
            ])
            .then((answers) => {
              switch (answers.action) {
                case 'Adicionar Tarefa':
                  addTask();
                  break;
                case 'Sair':
                  console.log(chalk.bold.yellow('Até logo!'));
                  break;
              }
            });
        }
  
        startApp();
      });
    });
  });
  
