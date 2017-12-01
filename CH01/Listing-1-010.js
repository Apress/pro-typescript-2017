{
    var VehicleType_1 = void 0;
    (function (VehicleType) {
        VehicleType[VehicleType["PedalCycle"] = 0] = "PedalCycle";
        VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
        VehicleType[VehicleType["Car"] = 2] = "Car";
        VehicleType[VehicleType["Van"] = 3] = "Van";
        VehicleType[VehicleType["Bus"] = 4] = "Bus";
        VehicleType[VehicleType["Lorry"] = 5] = "Lorry";
    })(VehicleType_1 || (VehicleType_1 = {}));
    var type_1 = VehicleType_1.Lorry;
    var typeName = VehicleType_1[type_1]; // 'Lorry'
}
