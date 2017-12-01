// Both personalityA and personalityB include DiscFlags.Influence
var personalityA = DiscFlags.Drive | DiscFlags.Influence | DiscFlags.Conscientiousness;
var personalityB = DiscFlags.Influence | DiscFlags.Steadiness;

// The result of a bitwise AND contains only matching flags

// DiscFlags.Influence
var matchingTraits = personalityA & personalityB;

// false
var hasD = (matchingTraits & DiscFlags.Drive) == DiscFlags.Drive;

// true
var hasI = (matchingTraits & DiscFlags.Influence) == DiscFlags.Influence;

// false
var hasS = (matchingTraits & DiscFlags.Steadiness) == DiscFlags.Steadiness;

// false
var hasC = (matchingTraits & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;
