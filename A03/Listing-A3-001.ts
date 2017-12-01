enum DiscFlags {
    None = 0,
    Drive = 1 << 0,
    Influence = 1 << 1,
    Steadiness = 1 << 2,
    Conscientiousness = 1 << 3
}
// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

// Testing flags

// true
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;

// false
var hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;

// false
var hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;

// true
var hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;
