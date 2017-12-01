class CommunicationLines {
    calculate(teamSize: number) {
        return (teamSize * (teamSize - 1)) / 2
    }
}

function testCommunicationLines() {
    const communicationLines = new CommunicationLines();

    let result = communicationLines.calculate(4);

    if (result !== 6) {
        throw new Error('Test failed for team size of 4.');
    }

    result = communicationLines.calculate(10);

    if (result !== 45) {
        throw new Error('Test failed for team size of 10.');
    }
}

testCommunicationLines();