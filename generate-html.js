const inquirer = require('inquirer');
const fs = require('fs');
const TeamMembers = require('./team-members');
const promptUser = require('./index');

function generateHtml(answers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE TEAM IS BACK TOGETHER AGAIN</title>
</head>
<main>
    <div class="card card-body">
        <div class="card-header">${answers.title}</div>
        <div class="card-answers">
        <div class="member-name">${answers.memberName}</div>
        <div class="member-id">${answers.memberId}</div>
        <div class="member-email">
        <a href = "mailto: ">${answers.memberEmail}</a></div>

        </div>
</main>`
}