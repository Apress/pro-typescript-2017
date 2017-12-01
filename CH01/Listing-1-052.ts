{
    const emergencyService = {
        police: 'Chase',
        fire: 'Marshall',
    };

    const utilityService = {
        recycling: 'Rocky',
        construction: 'Rubble'
    };

    // Object spreading
    const patrol = { ...emergencyService, ...utilityService };

    // { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble' }
    console.log(patrol);
}