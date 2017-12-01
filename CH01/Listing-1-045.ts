{
    const highSchool = { school: 'Central High', team: 'Centaurs' };

    // Object destructuring
    const { school: s, team: t } = highSchool;

    // 'Central High'
    console.log(s);

    // 'Centaurs'
    console.log(t);
}