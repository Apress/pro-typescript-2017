namespace Options_1 {
    interface Options {
        material: string;
        backlight: boolean;
    }

    // Manually created readonly interface
    interface ManualReadonlyOptions {
        readonly material: string;
        readonly backlight: boolean;
    }

    // Manually created optional interface
    interface ManualOptionalOptions {
        material?: string;
        backlight?: string;
    }

    // Manually created nullable interface
    interface ManualNullableOptions {
        material: string | null;
        backlight: string | null;
    }
}