let users = [{
    name: "April",
    age: "18",
    introduction: "I am a student"
}, {
    name: "March",
    age: "3",
    introduction: "I am a progrem"

}, {
    name: "June",
    age: "18",
    introduction: "I am a worker"
}]
let work = ["student", "progrem", "worker"];
let usersInfo = `<ul>
   ${users.map(user =>
    links`<li>I am ${user.name}, ${user.introduction}</li>`
).join("")}
</ul>`;
document.write(usersInfo);

function links(strings, ...vars) {
    return strings.map((str, index) => {
        let varValue = vars[index];
        varValue = varValue && work.reduce((pre, work) => {
            return pre.replace(work, `<a href="https://www.baidu.com/">${work}</a>`)
        }, varValue);
        return str += varValue ? varValue : ""
    }).join("")
}