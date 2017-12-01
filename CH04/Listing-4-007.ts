class RewardPointsCalculator {
    getPoints(transactionValue: number) {
        // 4 points per whole dollar spent
        return Math.floor(transactionValue) * 4;
    }
}

class DoublePointsCalculator extends RewardPointsCalculator {
    getPoints(transactionValue: number) {
        const standardPoints = super.getPoints(transactionValue);
        return standardPoints * 2;
    }
}

const pointsCalculator = new DoublePointsCalculator();

// 800
alert(pointsCalculator.getPoints(100.99));