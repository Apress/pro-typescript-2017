class Totalizer {
    private total = 0;
    private taxRateFactor = 0.2;

    addDonation(amount: number) {
        if (amount <= 0) {
            throw new Error('Donation exception');
        }

        const taxRebate = amount * this.taxRateFactor;
        const totalDonation = amount + taxRebate;

        this.total += totalDonation;
    }

    getAmountRaised() {
        return this.total;
    }
}

const totalizer = new Totalizer();

totalizer.addDonation(100.00);

const fundsRaised = totalizer.getAmountRaised();

// 120
console.log(fundsRaised);
