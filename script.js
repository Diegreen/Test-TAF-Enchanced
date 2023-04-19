// Implemente aqui as funções


function validateHeight(gender, height) {

    if (gender === "male" && height >= 1.70 ||
        gender === "female" && height >= 1.60) {
        return true
    } else {
        return false
    }
}

function validateBarTest(gender, barReps, barSeconds) {
    if (gender === "male" && (barReps >= 6 || barSeconds >= 15) ||
        gender === "female" && (barReps >= 5 || barSeconds >= 12)) {
        return true
    } else {
        return false
    }
}

function validateAbs(gender, abs) {
    if ((gender === "male" || gender === "female") && abs >= 41) {
        return true
    } else {
        return false
    }
}

function validateRun(gender, runDistance, runTime) {
    if (gender === "male" && (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200) ||
        gender === "female" && (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320)) {
        return true
    } else {
        return false
    }
}

function validateSwin(gender, swinDistance, swinTime, diveTime) {
    if ((gender === "male" || gender === "female") &&
        (swinDistance >= 100 && swinTime <= 60 || swinDistance >= 100 && diveTime <= 30)) {
        return true
    } else {
        return false
    }
}

function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swinDistance, swinTime, diveTime) {
    const validatedHeight = validateHeight(gender, height)
    const validatedBarTest = validateBarTest(gender, barReps, barSeconds)
    const validatedAbs = validateAbs(gender, abs)
    const validatedRun = validateRun(gender, runDistance, runTime)
    const validatedSwin = validateSwin(gender, swinDistance, swinTime, diveTime)

    return validatedHeight && validatedBarTest && validatedAbs && validatedRun && validatedSwin
}

function showMessage(message) {
    console.log(message.toString().toUpperCase());
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
showMessage(areCandidateValid)

