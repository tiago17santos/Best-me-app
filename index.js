const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o  que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Muito Bemm!

        O que você aprendi hoje:
        ${answers[0]}

        O que te aborreceu e você poderia fazer para melhorar:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Quantas pessoas você ajudou hoje:
        ${answers[3]}

        Volte amanhã para novas reflexões!!
    `)
})