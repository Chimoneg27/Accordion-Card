
document.addEventListener('DOMContentLoaded', () => {
let allQuestions = document.querySelectorAll(".faq .question")

let toggleFaqCards = (e) => {
    let answer = e.currentTarget.nextElementSibling
    let question = e.currentTarget.children[0]
    let arrow = e.currentTarget.children[1]

    if (answer.style.display === "none") {
        answer.style.display = "block"
        question.style.fontWeight = "bold"
        arrow.style.transform = "rotate(180deg)"
    } else {
        answer.style.display = "none"
        question.style.fontWeight = "normal"
        arrow.style.transform = "rotate(0deg)"
    }
}

for (let question of allQuestions) {
    let answer = question.nextElementSibling
    answer.style.display = "none"
    question.addEventListener("click", toggleFaqCards)
}
})