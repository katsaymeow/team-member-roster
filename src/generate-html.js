const inquirer = require('inquirer');
const fs = require('fs');
const TeamMembers = require("../lib/team-members.js");
const promptUser = require('../index');

function generateHtml() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE TEAM IS BACK TOGETHER AGAIN</title>
    <link rel= "stylesheet" href= "./dist/style.css">
</head>
<main>
    <div class="card card-body">
        <div class="card-header">${answers.title}</div>
        <div class="card-answers">
        <div class="member-name">${answers.memberName}</div>
        <div class="member-id">${answers.memberId}</div>
        <div class="member-email">
        <a href = "mailto: ">${answers.memberEmail}</a></div>
        <div class = "member-office">${answers.memberOffice}</div>
        <div class = "member-school">${answers.school}</div>
        <div class = "member-github"><a href = ${answers.github}</a></div>
        </div>
</main>`
}

