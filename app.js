// DO NOT CHANGE ANYTHING IN THIS FILE
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");
    var table = document.getElementById("contributors");
    contributors.forEach(contributor => {
        var row = table.insertRow(-1);
        var name = row.insertCell(0);
        var username = row.insertCell(1);
        var college = row.insertCell(2);
        var year = row.insertCell(3);
        name.innerHTML = contributor.name;
        username.innerHTML = `<a href="https://github.com/${contributor.username}/">${contributor.username}</a>`;
        college.innerHTML = contributor.college;
        year.innerHTML = contributor.year;
    })
})