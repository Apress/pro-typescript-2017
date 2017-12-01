// Switch statements

const styles = {
    tranditional: 1,
    modern: 2,
    postModern: 3,
    futuristic: 4
};

const style = styles.tranditional;

switch (style) {
    case styles.tranditional:
        // Code to execute for traditional style
        break;
    case styles.modern:
        // Code to execute for modern style
        break;
    case styles.postModern:
        // Code to execute for post modern style
        break;
    case styles.futuristic:
        // Code to execute for futuristic style
        break;
    default:
        throw new Error('Style not known: ' + style);
}