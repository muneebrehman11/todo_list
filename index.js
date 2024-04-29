#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let chooseOption = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "Choose an option",
        choices: ["Add_todo", "Update_todo", "View", "Delete", "Quit"]
    });
    if (chooseOption.option === "Add_todo") {
        let addTodo = await inquirer.prompt({
            name: "add",
            type: "input",
            message: "add your todos here!",
            validate: function (input) {
                if (input.trim() === "") {
                    return "please enter something to add";
                }
                return true;
            }
        });
        todo.push(addTodo.add);
        todo.forEach(todo => console.log(todo)); //array k data ko list form main lanay k liay use hoga      
    }
    else if (chooseOption.option === "Update_todo") {
        let choose_item = await inquirer.prompt([
            {
                name: "chooseItem",
                type: "list",
                message: "what you want to update",
                choices: todo.map(item => item)
            },
        ]);
        let new_todo = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "what you want to add?"
            }
        ]);
        let newTodo = todo.filter(val => val !== choose_item.chooseItem);
        todo = [...newTodo, new_todo.add];
        todo.forEach(todo => console.log(todo)); //array k data ko list form main lanay k liay use hoga   
    }
    else if (chooseOption.option === "View") {
        todo.forEach(todo => console.log(todo));
    }
    else if (chooseOption.option === "Delete") {
        let select_delete_todo = await inquirer.prompt({
            name: "selectDelete",
            type: "list",
            message: "What you want to delete?",
            choices: todo.map(item => item)
        });
        let delete_todo = todo.filter(val => val !== select_delete_todo.selectDelete);
        todo = [...delete_todo];
        todo.forEach(todo => console.log(todo)); //array k data ko list form main lanay k liay use hoga   
    }
    else if (chooseOption.option === "Quit") {
        let quit_todo = await inquirer.prompt([
            {
                name: "quit",
                type: "confirm",
                message: "you want to quit !!! are you sure?",
            }
        ]);
        if (quit_todo.quit === true) {
            condition = false;
        }
        else {
            condition = true;
        }
    }
}
